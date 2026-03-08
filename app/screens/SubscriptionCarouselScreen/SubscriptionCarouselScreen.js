
import classNames from "classnames";
import EmblaCarouselReact from "embla-carousel-react";
import React, { useEffect } from "react";
import freeTrialSlideOne from "../../assets/images/free-trial-slide-1.png";
import freeTrialSlideTwo from "../../assets/images/free-trial-slide-2.png";
import freeTrialSlideThree from "../../assets/images/free-trial-slide-3.png";
import Button from "../../common/components/Button/Button";
import Screen from "../../common/components/Screen/Screen";
import {
  HOME_SCREEN, SUBSCRIPTION_SCREEN, SUBSCRIPTION_CAROUSEL_SCREEN, SUBSCRIPTION_SCREEN_MODAL 
} from "../../common/consts/routes";
import useEmbla from "../../common/hooks/useEmbla";
import config from "../../config";
import "./SubscriptionCarouselScreen.scss";
import { MONTHLY_SUB_ID } from "../../common/consts/subscriptions";

const { subscriptions } = config;

const RenderOnboardingSlides = () => {
  const {
    embla: [embla, setEmbla],
    index: [carouselIndex, setCarouselIndex]
  } = useEmbla();

  return (
    <>
      <div className="onboarding-slides-container">
        <EmblaCarouselReact
          emblaRef={setEmbla}
          options={{ loop: false }}
        >
          <div className="carousel">
            <div>
              <img src={freeTrialSlideOne} alt="" />
              <h2>Become A Better Musician</h2>
              <p>Master music theory, ear training, and rhythm through 80+ interactive lessons</p>
            </div>
            <div>
              <img src={freeTrialSlideTwo} alt="" />
              <h2>Learn Music Theory With Confidence</h2>

              <p>Dead simple lessons to help you understand complex topics</p>
            </div>
            <div>
              <img src={freeTrialSlideThree} alt="" />
              <h2>Actually Remember It!</h2>
              <p>Daily curated lessons that reinforce what you've learned</p>
            </div>
          </div>
        </EmblaCarouselReact>
      </div>
      <div className="carousel-dots-container">
        <div
          onClick={() => embla.scrollTo(0)}
          className={classNames("dot", [0, 1, 2].includes(carouselIndex) && "active")}
        />
        <div
          onClick={() => embla.scrollTo(1)}
          className={classNames("dot", [1, 2].includes(carouselIndex) && "active")}
        />
        <div
          onClick={() => embla.scrollTo(2)}
          className={classNames("dot", [2].includes(carouselIndex) && "active")}
        />
      </div>
      {/* <div className="line-break-container">
        <div></div>
      </div> */}
    </>
  );
};

const renderCopyText = () => {
  return (
    <div className="copy-container">
      <p>
        Try 7 days for free.
      </p>
      <p className="sub">
        Then 15.99/month.
      </p>
    </div>
  );
};

const renderButtons = props => {
  return (
    <div className="buttons-container">
      <Button
        className="subscribe-button"
        text="TRY 7 DAYS FOR FREE"
        isTextCentered
        isSuccess
        onClick={() => props.history.push(props.isModal ? SUBSCRIPTION_SCREEN_MODAL : SUBSCRIPTION_SCREEN)}
      />
      <Button
        text="NO THANKS"
        className="restore-purchases-button"
        isTextCentered
        isGhost
        onClick={() => props.isModal ? props.history.goBack() : props.history.push(HOME_SCREEN)}
      />
    </div>
  );
};

const renderTos = () => (
  <div className="tos-container">
    <a href="">Terms of Service</a>
    <span> and </span>
    <a href=""> Privacy Policy</a>
  </div>
);

export default function SubscriptionScreen(props) {
  useEffect(() => {
    if (!subscriptions) {
      props.history.push(HOME_SCREEN);
    }
  }, []);

  return (
    <Screen className="subscription-carousel-screen" isModal={props.isModal}>
      {RenderOnboardingSlides()}
      {renderButtons(props)}
      {/* {renderTos()} */}
    </Screen>
  );
}
