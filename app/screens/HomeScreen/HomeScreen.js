import { isEmpty } from "lodash";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useFirebase } from "react-redux-firebase";
import Modal from "react-responsive-modal";
import Button from "../../common/components/Button/Button";
import LessonCardsContainer from "../../common/components/LessonCardsContainer";
import LessonCategoryTile from "../../common/components/LessonCategoryTile/LessonCategoryTile";
import Paragraph from "../../common/components/Paragraph";
import Screen from "../../common/components/Screen/Screen";
import ScreenHeader from "../../common/components/ScreenHeader/ScreenHeader";
import SectionHeader from "../../common/components/SectionHeader/SectionHeader";
import { SCREEN_VIEW, logOnStreakDropdownPressed } from "../../common/consts/analytics";
import { blueGray } from "../../common/consts/colors";
import { HOME_SCREEN, SUBSCRIPTION_CAROUSEL_SCREEN_MODAL } from "../../common/consts/routes";
import useRememberScrollYPosition from "../../common/hooks/useRememberScrollYPosition";
import useSetNotchColor from "../../common/hooks/useSetNotchColor";
import createDailyLesson from "../../store/firebase/createDailyLesson";
import setLessonStarted from "../../store/firebase/setLessonStarted";
import scrollUp from "../../util/browser/scrollUp";
import isToday from "../../util/isToday";
import goToDailyLesson from "../../util/lessons/goToDailyLesson";
import "./HomeScreen.scss";
import DotProgress from "../../common/components/DotProgress";
import setDailyLessonIsStarted from "../../store/firebase/setDailyLessonIsStarted";
import { MdLock, MdShare } from "react-icons/md";
import { FiShare } from "react-icons/fi";
import usePrevious from "../../common/hooks/usePrevious";
import isAndroid from "../../util/platform/isAndroid";
import setUserIsOnboarded from "../../store/firebase/setUserIsOnboarded";
import Header from "../../common/components/Header";
import Streak from "../../common/components/Streak";
import setUserShare from "../../store/firebase/setUserShare";
import usePromptRateApp from "../../common/hooks/usePromptRateApp";
import { MUSIC_THEORY_BUILDING_BLOCKS_ID, MUSIC_THEORY_SHARPS_AND_FLATS_ID } from "../../store/firebase/accountSetup";
import SubscriptionCTAContainer from "../../common/components/SubscriptionCTAContainer/SubscriptionCTAContainer";
import { MUSICIAN_LEVELS } from "../OnboardingScreen/slides/MusicianLevelSlide/MusicianLevelSlide";
import setUserHasLessonsUnlocked from "../../store/firebase/setUserHasLessonsUnlocked";
import { promptSubscription, routeToLesson } from "../../util/routing";
import setUserLastOpenedCategory from "../../store/firebase/setUserLastOpenedCategory";
import getGreeting from "../../util/getGreeting";
import EmblaCarouselReact from "embla-carousel-react";
import Card from "../../common/components/Card";
import getCurrentLesson from "../../util/lessons/getCurrentLesson";
import queryString from "query-string";

// Web share API fallback
const Share = {
  share: async (data) => {
    if (navigator.share) {
      return navigator.share(data);
    }
    // fallback: copy to clipboard
    if (navigator.clipboard) {
      await navigator.clipboard.writeText(data.url || data.text);
    }
    return {};
  }
};

const renderGreeting = (props) => {
  const { user, lessonCategories } = props;
  const { lastOpenedCategory } = user;
  const greetingCategory = lastOpenedCategory && 
    lessonCategories.find(category => category.categoryId === lastOpenedCategory);

  const greetingText = getGreeting();

  return (
    lastOpenedCategory &&
    <div class="greeting-container">
      <SectionHeader
        text={greetingText}
        subText="Continue where you left off."
      />
      <LessonCategoryTile
        key={Math.random()}
        {...greetingCategory}
        onClick={() => {
          props.history.push(greetingCategory.route)
        }}
      />
    </div>
  )
}

const RenderLessonCategoryTiles = props => {
  const firebase = useFirebase();
  const { auth } = useSelector(({ firebase }) => ({
    auth: firebase.auth,
  }));
  const { uid } = auth;

  return (
    <div className="lesson-category-tiles-container">
      {
        props.lessonCategories.map(({
          title,
          backgroundColor,
          boxShadow,
          route,
          isFullWidth,
          categoryId,
        ...rest
        }) => (
            <LessonCategoryTile
              key={Math.random()}
              title={title}
              backgroundColor={backgroundColor}
              boxShadow={boxShadow}
              onClick={() => {
                setUserLastOpenedCategory(firebase, uid, categoryId)
                props.history.push(route)
              }}
              isFullWidth={isFullWidth}
              categoryId={categoryId}
              {...rest}
          />
          ))
      }
    </div>
  )
}

const RenderDailyLesson = (props, hasCreatedDailyLesson, setHasCreatedDailyLesson, shouldShowDailyLessonFinishedHeader) => {
  // move this logic somewhere else smh  
  const firebase = useFirebase();
  const analytics = firebase.analytics();
  const { auth, isSubscribed } = useSelector(({ firebase, account }) => ({
    auth: firebase.auth,
    isSubscribed: account.isSubscribed
  }));
  const { dailyLesson: dailyLessons } = props;

  if (!isSubscribed) {
    return (
      <div className="daily-lesson-section-container">
        <SectionHeader
          text="Your Daily Lesson 💪👂"
        />
        <Card>
          <Paragraph>Personalized daily lessons to help you internalize what you've learned</Paragraph>
          <div className="cta-container">
            <Button
              isTextCentered
              isSuccess
              text="TRY FOR FREE"
              onClick={() => promptSubscription(props.history, `${props.history.location.pathname}1`)}
            />
          </div>
        </Card>
      </div>
    );
  }

  const shouldCreateNewDailyLesson = props.dailyLesson && 
    !isEmpty(props.dailyLesson.lessons) &&
    !isToday(new Date(props.dailyLesson.date));

  // checks if lessons is null
  // or daily lesson has expired
  // and if we already havemt created a lesson
  if ((shouldCreateNewDailyLesson || props.dailyLesson === null || (props.dailyLesson && props.dailyLesson.isIneligible)) && !hasCreatedDailyLesson) {
    createDailyLesson(props.lessonCategories, props.dailyLesson, auth, firebase);
    setHasCreatedDailyLesson(true);
  }

  if (shouldShowDailyLessonFinishedHeader) {
    return (
      <div className="daily-lesson-section-container">
        <SectionHeader
          text="Great Job! 💪👂"
        />
        <Card>
          <Paragraph>Come back tomorrow for your next daily lesson.</Paragraph>
          <DotProgress
            dailyLesson={dailyLessons}
          />
        </Card>     
      </div>
    );
  }

  if (dailyLessons && dailyLessons.isIneligible) {
    return (
      <div className="daily-lesson-section-container">
        <SectionHeader
          text="Your Daily Lesson 💪👂"
        />
        <Card>
          <Paragraph>Complete More Lessons To Unlock Daily Personalized Lessons </Paragraph>
          <div className="cta-container hide-shadow">
            <Button
              isTextCentered
              isDisabled
              text={<MdLock size={30} />}
            />
          </div>
        </Card>     
      </div>
    );
  }

  const nextDailyLesson = dailyLessons && Object.values(dailyLessons.lessons)
    .sort((a, b) => a.displayOrder - b.displayOrder)
    .find(lesson => !lesson.isFinished);

  const hasFinishedSomeDailyLessons = dailyLessons && Object.values(dailyLessons.lessons).some(lesson => lesson.isFinished);
  const dailyLessonStarted = dailyLessons && dailyLessons.isStarted;

  return (
    nextDailyLesson &&
    <div className="daily-lesson-section-container">
      {
        hasFinishedSomeDailyLessons || dailyLessonStarted ?
          <>
            <SectionHeader
              text="Almost There!"
            />
            <Card>
              <DotProgress
                dailyLesson={dailyLessons}
              />
              <div className="cta-container">
                <Button
                  isSuccess
                  isTextCentered
                  text="Continue Lesson"
                  onClick={() => goToDailyLesson(props.history, nextDailyLesson)}
                />
              </div>
            </Card>
          </> :
          <>
            <SectionHeader
              text="Your Daily Lesson 💪👂"
            />
            <Card>
              <DotProgress
                dailyLesson={dailyLessons}
              />
              <div className="cta-container">
                <Button
                  isSuccess
                  isTextCentered
                  text="Start Lesson"
                  onClick={() => {
                    goToDailyLesson(props.history, nextDailyLesson);
                    setDailyLessonIsStarted(firebase, auth.uid);
                  }}
                />
              </div>
            </Card>
          </> 
      }
    </div>
  );
};

const getLessonsFromCategories = lessonCategories => {
  // get rid of ghost lesson and empty lessons
  return lessonCategories.filter(category => category.isAvailable && category.lessons && category.lessons.length !== 0)
    .reduce((lessons, category) => (
      [...lessons, ...category.lessons]
    ), [])
    .sort((a, b) => a.displayOrder - b.displayOrder) || [];
};

export default function HomeScreen(props) {
  const [embla, setEmbla] = useState(null);

  useEffect(() => {
    if (embla) {
      embla.on("select", () => {
        // console.log(`Current index is ${embla.selectedScrollSnap()}`);
      });
    }
  }, [embla]);

  const [modalOpen, setModalOpen] = useState(true);
  const [unlockLessonModalOpen, setUnlockLessonModalOpen] = useState(true);
  const [dropDownVisible, setDropDownVisible] = useState(undefined);
  const [hasCreatedDailyLesson, setHasCreatedDailyLesson] = useState(false);
  const [shouldShowDailyLessonFinishedHeader, setShouldShowDailyLessonFinishedHeader] = useState(false);
  const [checkoutSuccess, setCheckoutSuccess] = useState(false);
  const firebase = useFirebase();
  const { history = {}, user = {}  } = props;
  const didFinishDailyLesson = history.location && history.location.state && history.location.state.didFinishDailyLesson;
  const lastDidFinishDailyLessonState = usePrevious(didFinishDailyLesson);
  const { auth, isSubscribed } = useSelector(({ firebase, account }) => ({
    auth: firebase.auth,
    isSubscribed: account.isSubscribed
  }));
  useSetNotchColor(blueGray);
  usePromptRateApp();
  useRememberScrollYPosition(HOME_SCREEN);
  const userHasSeenPopup = localStorage.getItem("seen-popup-1-3");
  const userHasSeenUnlockLessonsPopup = localStorage.getItem("seen-unlock-lessons-popup");

  useEffect(() => {
    document.body.classList.add("long-height");

    scrollUp();

    const params = queryString.parse(window.location.search);
    if (params.checkout === "success") {
      setCheckoutSuccess(true);
      // Clean up the query param from URL
      const url = new URL(window.location);
      url.searchParams.delete("checkout");
      window.history.replaceState({}, "", url.pathname);
    }

    return () => document.body.classList.remove("long-height");
  }, []);

  useEffect(() => {
    if (didFinishDailyLesson && !lastDidFinishDailyLessonState && !shouldShowDailyLessonFinishedHeader) {
      const state = { ...history.location.state, ...{ didFinishDailyLesson: undefined } };

      history.replace({ ...history.location, state });

      setShouldShowDailyLessonFinishedHeader(true);
      setTimeout(() => setShouldShowDailyLessonFinishedHeader(false), 5000);
    }
  }, [didFinishDailyLesson, lastDidFinishDailyLessonState]);

  const ShareIcon = isAndroid() ?
    MdShare : 
    FiShare;
  const lessons = getLessonsFromCategories(props.lessonCategories)
    
  return (
    <Screen className="home-screen" addBottomNotchPadding>
      <Header
        headerMiddleNode={
          <>
            <Streak 
              streaks={props.streaks} 
              onClick={() => {
                logOnStreakDropdownPressed();
                setDropDownVisible("streak");
              }}
            />
            {
              dropDownVisible === "streak" &&
              <div
                className="drop-down-arrow"
              />
            }
          
          </>
        }
        headerRightNode={
          <ShareIcon
            size={20}
            onClick={async () => {
              try {
                const shareData = await Share.share({
                  title: "Check this out!",
                  text: "Solfej is this music theory and ear training app I found.",
                  url: "https://www.solfej.io/",
                  dialogTitle: "Share Solfej"
                });

                setUserShare(firebase, auth.uid, shareData);
              } catch(e) {
                // failed
                console.log(e);
              }
             
            }} 
          />
        }
        isFixed
      />
      {
        dropDownVisible === "streak" &&
        <Header
          isFixed
          isDropDown
          onClickOutside={() => setDropDownVisible(undefined)}
        >
          <div className="drop-down-content streak">
            <Streak streaks={props.streaks} />
          </div>
          <div className="drop-down-content streak-copy">
            <SectionHeader
              text="Streak"
            />
            <Paragraph>
              Complete a lesson each day to build your streak 
            </Paragraph>
          </div>
        </Header>
      }
      {renderGreeting(props)}
      {RenderDailyLesson(props, hasCreatedDailyLesson, setHasCreatedDailyLesson, shouldShowDailyLessonFinishedHeader)}
      <SectionHeader
        text="Recommended Path"
      />
      <div className="recommended-section-container">
        {
          props.lessonCategories && props.lessonCategories[0] &&
          <EmblaCarouselReact
            emblaRef={setEmbla}
            options={{ loop: false, dragFree: true, startIndex: getCurrentLesson(lessons) }}
          >
            <LessonCardsContainer
              lockLessons={!isSubscribed}
              isHorizontal
              lockWhiteList={[MUSIC_THEORY_BUILDING_BLOCKS_ID, MUSIC_THEORY_SHARPS_AND_FLATS_ID]}
              onLessonClick={lesson => routeToLesson(history, lesson, firebase, auth.uid)}
              lessons={lessons}
            />
          </EmblaCarouselReact>
        }
      </div>
      <ScreenHeader
        title="Categories"
        backgroundColor="transparent"
      />
      {
        !isSubscribed &&
        <SubscriptionCTAContainer
          onClick={() => promptSubscription(props.history, `${props.history.location.pathname}2`)}
        />
      }
      {RenderLessonCategoryTiles(props)}
      <Modal open={!userHasSeenPopup} onClose={() => {
        setModalOpen(false);
        localStorage.setItem("seen-popup-1-3", true);
      }} center>
        <h2 className="overlay">{"Hi! Shayan here 👋"}</h2>
        <p className="overlay">
          Thank you so much for downloading Solfej! 🎉
        </p>
        <p className="overlay">
          Send any and all feedback/bugs/requests you have using the <b>"Feedback"</b> link at the bottom 😊
        </p>
        <p className="overlay">Feel free to reach out to me at <b>shayanjavadi1375@gmail.com</b> with any questions as well!</p>
      </Modal>
      <Modal open={checkoutSuccess} onClose={() => setCheckoutSuccess(false)} center>
        <h2 className="overlay">{"Welcome to Solfej! 🎉"}</h2>
        <p className="overlay">
          Thank you for subscribing! You now have full access to all lessons and features.
        </p>
        <Button
          text="Start Learning"
          isTextCentered
          isSuccess
          onClick={() => setCheckoutSuccess(false)}
        />
      </Modal>
      <Modal open={userHasSeenPopup && !userHasSeenUnlockLessonsPopup && user.musicianLevel > 1} onClose={() => {
        setUnlockLessonModalOpen(false);
        localStorage.setItem("seen-unlock-lessons-popup", true);
      }} center>
        <h2 className="overlay">{"Lesson Path Preference"}</h2>
        <p className="overlay">
          Since you are an {MUSICIAN_LEVELS[user.musicianLevel]} musician, you have the option to <b>complete lessons in any order</b>.
        </p>
        <p className="overlay">
          Would you like to activate this option?
        </p>
        <Button 
          text="Yes, Unlock All Lesson Paths"
          isTextCentered
          isSuccess
          className="margin-bottom"
          onClick={() => {
            setUserHasLessonsUnlocked(firebase, auth.uid, true);
            setUnlockLessonModalOpen(false);
            localStorage.setItem("seen-unlock-lessons-popup", true);
          }}
        />
        <Button 
          text="No, I'll Do Them In Order"
          isTextCentered
          isYellow
          onClick={() => {
            setUnlockLessonModalOpen(false);
            localStorage.setItem("seen-unlock-lessons-popup", true);
          }}
        />
        <p className="overlay" style={{ fontSize: 13, textAlign: "center" }}>You can always change this later in the account tab</p>
      </Modal>
    </Screen>
  );
}
