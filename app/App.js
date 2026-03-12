import { Plugins, StatusBarStyle } from "@capacitor/core";
import { ConnectedRouter } from "connected-react-router";
import React, { useEffect } from "react";
import { Provider } from "react-redux";
import { ReactReduxFirebaseProvider } from "react-redux-firebase";
import { Route } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import store, { firebaseProviderProps, history, persistor } from "../src/store";
import "./App.scss";
import { logAppOpened } from "./common/consts/analytics";
import {
  ACCOUNT_SCREEN, CHORD_QUALITY_SCREEN, EAR_TRAINING_DIMINISHED_SCREEN, EAR_TRAINING_INTERVALS_BEGINNER_SCREEN, EAR_TRAINING_MINOR_MAJOR_6THS_SCREEN, EAR_TRAINING_MINOR_MAJOR_6TH_CHORDS_SCREEN, EAR_TRAINING_MINOR_MAJOR_7THS_SCREEN, EAR_TRAINING_MINOR_MAJOR_7TH_CHORDS_SCREEN, EAR_TRAINING_MINOR_MAJOR_CHORD_SCREEN, EAR_TRAINING_MINOR_MAJOR_SECOND_SCREEN, EAR_TRAINING_MINOR_MAJOR_THIRD_SCREEN, EAR_TRAINING_PERFECT_FIFTH_PERFECT_FOURTH_SCREEN, EAR_TRAINING_SCREEN, EAR_TRAINING_TRITONE_SCREEN, GET_STARTED_SCREEN, HOME_SCREEN, INTERVAL_IDENTIFICATION_SCREEN, MUSIC_THEORY_BUILDING_BLOCKS_SCREEN, MUSIC_THEORY_CHECKPOINT_I_SCREEN, MUSIC_THEORY_DIMINISHED_SCREEN, MUSIC_THEORY_DOTTED_NOTES_SCREEN, MUSIC_THEORY_ENHARMONIC_NOTES_SCREEN, MUSIC_THEORY_EXERCISES_NOTE_DISTANCES_MINOR_MAJOR_2NDS_SCREEN, MUSIC_THEORY_EXERCISES_NOTE_DISTANCES_MINOR_MAJOR_3RDS_SCREEN, MUSIC_THEORY_EXERCISES_NOTE_DISTANCES_MINOR_MAJOR_6THS_SCREEN, MUSIC_THEORY_EXERCISES_NOTE_DISTANCES_MINOR_MAJOR_7THS_SCREEN, MUSIC_THEORY_EXERCISES_NOTE_DISTANCES_PERFECT_4TH_AND_5THS_SCREEN, MUSIC_THEORY_EXERCISES_SCREEN, MUSIC_THEORY_HARMONY_SCREEN, MUSIC_THEORY_INTERVALS_CHECKPOINT_ONE_SCREEN, MUSIC_THEORY_MAJOR_SCALE_SCREEN, MUSIC_THEORY_MINOR_MAJOR_6THS_SCREEN, MUSIC_THEORY_MINOR_MAJOR_6TH_CHORDS_SCREEN, MUSIC_THEORY_MINOR_MAJOR_7THS_SCREEN, MUSIC_THEORY_MINOR_MAJOR_7TH_CHORDS_SCREEN, MUSIC_THEORY_MINOR_MAJOR_CHORD_SCREEN, MUSIC_THEORY_MINOR_MAJOR_SECOND_SCREEN, MUSIC_THEORY_MINOR_MAJOR_THIRDS, MUSIC_THEORY_NOTE_DURATIONS_SCREEN, MUSIC_THEORY_PERFECT_FIFTH_PERFECT_FROUTH_SCREEN, MUSIC_THEORY_RHYTHM_SCREEN, MUSIC_THEORY_SCREEN, MUSIC_THEORY_SHARPS_AND_FLATS_SCREEN, MUSIC_THEORY_TRITONE_SCREEN, ONBOARDING_SCREEN, QUIZ_MUSIC_THEORY_BUILDING_BLOCKS_SCREEN, QUIZ_MUSIC_THEORY_CHECKPOINT_I_SCREEN, QUIZ_MUSIC_THEORY_DIMINISHED_SCREEN, QUIZ_MUSIC_THEORY_DOTTED_NOTES_SCREEN, QUIZ_MUSIC_THEORY_HARMONY_SCREEN, QUIZ_MUSIC_THEORY_INTERVALS_CHECKPOINT_ONE_SCREEN, QUIZ_MUSIC_THEORY_MAJOR_SCALE_SCREEN, QUIZ_MUSIC_THEORY_MINOR_MAJOR_6THS_SCREEN, QUIZ_MUSIC_THEORY_MINOR_MAJOR_6TH_CHORDS_SCREEN, QUIZ_MUSIC_THEORY_MINOR_MAJOR_7THS_SCREEN, QUIZ_MUSIC_THEORY_MINOR_MAJOR_7TH_CHORDS_SCREEN, QUIZ_MUSIC_THEORY_MINOR_MAJOR_CHORD_SCREEN, QUIZ_MUSIC_THEORY_MINOR_MAJOR_SECOND_SCREEN, QUIZ_MUSIC_THEORY_MINOR_MAJOR_THIRDS, QUIZ_MUSIC_THEORY_NOTE_DURATIONS_SCREEN, QUIZ_MUSIC_THEORY_PERFECT_FIFTH_PERFECT_FROUTH_SCREEN, QUIZ_MUSIC_THEORY_RHYTHM_SCREEN, QUIZ_MUSIC_THEORY_SHARPS_AND_FLATS_SCREEN, QUIZ_MUSIC_THEORY_TRITONE_SCREEN, RHYTHM_SCREEN, RHYTHM_TRANSCRIPTION_SCREEN_I, RHYTHM_TRANSCRIPTION_SCREEN_II, RHYTHM_TRANSCRIPTION_SCREEN_III, RHYTHM_TRANSCRIPTION_SCREEN_IV, RHYTHM_TRANSCRIPTION_SCREEN_V, RHYTHM_TRANSCRIPTION_SCREEN_VI, SIGN_IN_SCREEN, SIGN_UP_SCREEN, SINGLE_NOTE_PRACTICE_SCREEN, SUBSCRIPTION_SCREEN, QUIZ_MUSIC_THEORY_SUS_2_AND_4_CHORDS_SCREEN, MUSIC_THEORY_SUS_2_AND_4_CHORDS_SCREEN, EAR_TRAINING_SUS_2_AND_4_CHORDS_SCREEN, MUSIC_THEORY_EXTENDED_CHORDS_SCREEN, QUIZ_MUSIC_THEORY_EXTENDED_CHORDS_SCREEN, MUSIC_THEORY_HALF_DIMINISHED_7TH_CHORD_SCREEN, QUIZ_MUSIC_THEORY_HALF_DIMINISHED_7TH_CHORD_SCREEN, EAR_TRAINING_HALF_DIMINISHED_7TH_CHORD_SCREEN, MUSIC_THEORY_DOMINANT_7TH_CHORD_SCREEN, QUIZ_MUSIC_THEORY_DOMINANT_7TH_CHORD_SCREEN, EAR_TRAINING_DOMINANT_7TH_CHORD_SCREEN, EAR_TRAINING_7TH_CHORD_SCREEN, EAR_TRAINING_MINOR_MAJOR_SECOND_2_SCREEN, EAR_TRAINING_MINOR_MAJOR_SECOND_1_SCREEN, EAR_TRAINING_MINOR_MAJOR_THIRD_1_SCREEN, EAR_TRAINING_MINOR_MAJOR_THIRD_2_SCREEN, EAR_TRAINING_TRITONE_1_SCREEN, EAR_TRAINING_TRITONE_2_SCREEN, EAR_TRAINING_PERFECT_FIFTH_PERFECT_FOURTH_1_SCREEN, EAR_TRAINING_PERFECT_FIFTH_PERFECT_FOURTH_2_SCREEN, EAR_TRAINING_MINOR_MAJOR_6THS_1_SCREEN, EAR_TRAINING_MINOR_MAJOR_6THS_2_SCREEN, EAR_TRAINING_MINOR_MAJOR_7THS_1_SCREEN, EAR_TRAINING_MINOR_MAJOR_7THS_2_SCREEN, EAR_TRAINING_DIMINISHED_1_SCREEN, EAR_TRAINING_DIMINISHED_2_SCREEN, EAR_TRAINING_MINOR_MAJOR_CHORD_1_SCREEN, EAR_TRAINING_MINOR_MAJOR_CHORD_2_SCREEN, EAR_TRAINING_MINOR_MAJOR_6TH_CHORDS_1_SCREEN, EAR_TRAINING_MINOR_MAJOR_6TH_CHORDS_2_SCREEN, EAR_TRAINING_MINOR_MAJOR_7TH_CHORDS_1_SCREEN, EAR_TRAINING_MINOR_MAJOR_7TH_CHORDS_2_SCREEN, EAR_TRAINING_HALF_DIMINISHED_7TH_CHORD_1_SCREEN, EAR_TRAINING_HALF_DIMINISHED_7TH_CHORD_2_SCREEN, EAR_TRAINING_DOMINANT_7TH_CHORD_1_SCREEN, EAR_TRAINING_DOMINANT_7TH_CHORD_2_SCREEN, SINGLE_NOTE_PERFECT_PITCH_PRACTICE_SCREEN, INTERVAL_IDENTIFICATION_CUSTOM_LESSON_SCREEN, CHORD_IDENTIFICATION_CUSTOM_LESSON_SCREEN, RHYTHM_TRANSCRIPTION_CUSTOM_LESSON_SCREEN, SUBSCRIPTION_CAROUSEL_SCREEN, SUBSCRIPTION_CAROUSEL_SCREEN_MODAL, SUBSCRIPTION_SCREEN_MODAL, CUSTOM_EXERCISES_SCREEN, CUSTOM_EXERCISES_CHOOSE_CATEGORY_SCREEN, CUSTOM_EXERCISES_CHOOSE_SUB_CATEGORY_SCREEN, CUSTOM_EXERCISES_CHOOSE_OPTIONS_SCREEN 
} from "./common/consts/routes";
import AccountSetupProvider from "./containers/AccountSetupProvider";
import LoadingOverlayProvider from "./containers/LoadingOverlayProvider";
import OnboardedProvider from "./containers/OnboardedProvider.js";
import { AuthenticatedRouteProvider, UnauthenticatedRouteProvider } from "./containers/ProtectedRouteProvider";
import {
  IsOnboardedProvider, NotOnboardedProvider, NotSubscribedRouteProvider, SubscribedRouteProvider 
} from "./containers/ProtectedRouteProvider/ProtectedRouteProvider";
import TabNavigatorProvider from "./containers/TabNavigatorProvider";
import AccountScreen from "./screens/AccountScreen";
import ChordQualityScreen from "./screens/ChordQualityScreen/";
import EarTrainingScreen from "./screens/EarTrainingScreen";
import EnharmonicNotesExerciseScreen from "./screens/EnharmonicNotesExerciseScreen";
import GetStartedScreen from "./screens/GetStartedScreen/GetStartedScreen";
import HomeScreen from "./screens/HomeScreen";
import IntervalIdentificationScreen from "./screens/IntervalIdentificationScreen/";
import MusicTheoryExerciseScreen from "./screens/MusicTheoryExercisesScreen";
import MusicTheoryLessonScreen from "./screens/MusicTheoryLessonScreen";
import MusicTheoryScreen from "./screens/MusicTheoryScreen";
import NoteDistancesExerciseScreen from "./screens/NoteDistancesExerciseScreen";
// import AdminScreen from "./screens/AdminScreen/AdminScreen";
import OnboardingScreen from "./screens/OnboardingScreen/OnboardingScreen";
import QuizScreen from "./screens/QuizScreen";
import RhythmScreen from "./screens/RhythmScreen";
import RhythmTranscriptionScreen from "./screens/RhythmTranscriptionScreen";
import SignInScreen from "./screens/SignInScreen";
import SignUpScreen from "./screens/SignUpScreen";
import SingleNotePracticeScreen from "./screens/SingleNotePracticeScreen";
import SubscriptionScreen from "./screens/SubscriptionScreen/SubscriptionScreen";
import {
  EAR_TRAINING_CHORD_IDENTIFICATION_ID, EAR_TRAINING_DIMINISHED_ID, EAR_TRAINING_INTERVALS_BEGINNER_ID, EAR_TRAINING_INTERVAL_IDENTIFICATION_ID, EAR_TRAINING_MINOR_MAJOR_CHORD_ID, EAR_TRAINING_MINOR_MAJOR_SECOND_ID, EAR_TRAINING_MINOR_MAJOR_THIRD_ID, EAR_TRAINING_PERFECT_FIFTH_PERFECT_FOURTH_ID, EAR_TRAINING_TRITONE_ID, MUSIC_THEORY_BUILDING_BLOCKS_ID, MUSIC_THEORY_CHECKPOINT_I_ID, MUSIC_THEORY_DIMINISHED_ID, MUSIC_THEORY_DOTTED_NOTES_ID, MUSIC_THEORY_ENHARMONIC_NOTES_ID, MUSIC_THEORY_EXERCISES_NOTE_DISTANCES_MINOR_MAJOR_2NDS_ID, MUSIC_THEORY_EXERCISES_NOTE_DISTANCES_MINOR_MAJOR_3RD_ID, MUSIC_THEORY_EXERCISES_NOTE_DISTANCES_MINOR_MAJOR_6THS_ID, MUSIC_THEORY_EXERCISES_NOTE_DISTANCES_MINOR_MAJOR_7THS_ID, MUSIC_THEORY_EXERCISES_NOTE_DISTANCES_PERFECT_4THS_AND_5THS_ID, MUSIC_THEORY_HARMONY_ID, MUSIC_THEORY_INTERVALS_CHECKPOINT_ONE_ID, MUSIC_THEORY_MAJOR_SCALE_ID, MUSIC_THEORY_MINOR_MAJOR_6THS_ID, MUSIC_THEORY_MINOR_MAJOR_CHORD_ID, MUSIC_THEORY_MINOR_MAJOR_SECOND_ID, MUSIC_THEORY_MINOR_MAJOR_THIRDS_ID, MUSIC_THEORY_NOTE_DURATIONS_ID, MUSIC_THEORY_PERFECT_FIFTH_PERFECT_FROUTH_ID, MUSIC_THEORY_RHYTHM_ID, MUSIC_THEORY_SHARPS_AND_FLATS_ID, MUSIC_THEORY_TRITONE_ID, RHYTHM_TRANSCRIPTION_III_ID, RHYTHM_TRANSCRIPTION_II_ID, RHYTHM_TRANSCRIPTION_IV_ID, RHYTHM_TRANSCRIPTION_I_ID, RHYTHM_TRANSCRIPTION_VI_ID, RHYTHM_TRANSCRIPTION_V_ID, MUSIC_THEORY_MINOR_MAJOR_6TH_CHORDS_ID, MUSIC_THEORY_MINOR_MAJOR_7THS_ID, MUSIC_THEORY_MINOR_MAJOR_7TH_CHORDS_ID, EAR_TRAINING_MINOR_MAJOR_6THS_ID, EAR_TRAINING_MINOR_MAJOR_7THS_ID, EAR_TRAINING_MINOR_MAJOR_6TH_CHORDS_ID, EAR_TRAINING_MINOR_MAJOR_7TH_CHORDS_ID, MUSIC_THEORY_SUS_2_AND_4_CHORDS_ID, EAR_TRAINING_SUS_2_AND_4_CHORDS_ID, MUSIC_THEORY_EXTENDED_CHORDS_ID, MUSIC_THEORY_HALF_DIMINISHED_7TH_CHORD_ID, EAR_TRAINING_HALF_DIMINISHED_7TH_CHORD_ID, MUSIC_THEORY_DOMINANT_7TH_CHORD_ID, EAR_TRAINING_DOMINANT_7TH_CHORD_ID, EAR_TRAINING_7TH_CHORDS_ID, EAR_TRAINING_MINOR_MAJOR_SECOND_1_ID, EAR_TRAINING_MINOR_MAJOR_SECOND_2_ID, EAR_TRAINING_MINOR_MAJOR_THIRD_2_ID, EAR_TRAINING_MINOR_MAJOR_THIRD_1_ID, EAR_TRAINING_TRITONE_2_ID, EAR_TRAINING_TRITONE_1_ID, EAR_TRAINING_PERFECT_FIFTH_PERFECT_FOURTH_1_ID, EAR_TRAINING_PERFECT_FIFTH_PERFECT_FOURTH_2_ID, EAR_TRAINING_MINOR_MAJOR_6THS_1_ID, EAR_TRAINING_MINOR_MAJOR_6THS_2_ID, EAR_TRAINING_MINOR_MAJOR_7THS_1_ID, EAR_TRAINING_MINOR_MAJOR_7THS_2_ID, EAR_TRAINING_DIMINISHED_1_ID, EAR_TRAINING_DIMINISHED_2_ID, EAR_TRAINING_MINOR_MAJOR_CHORD_1_ID, EAR_TRAINING_MINOR_MAJOR_CHORD_2_ID, EAR_TRAINING_MINOR_MAJOR_6TH_CHORDS_1_ID, EAR_TRAINING_MINOR_MAJOR_6TH_CHORDS_2_ID, EAR_TRAINING_MINOR_MAJOR_7TH_CHORDS_1_ID, EAR_TRAINING_MINOR_MAJOR_7TH_CHORDS_2_ID, EAR_TRAINING_HALF_DIMINISHED_7TH_CHORD_1_ID, EAR_TRAINING_HALF_DIMINISHED_7TH_CHORD_2_ID, EAR_TRAINING_DOMINANT_7TH_CHORD_1_ID, EAR_TRAINING_DOMINANT_7TH_CHORD_2_ID, EAR_TRAINING_SINGLE_NOTE_IDENTIFICATION_ID, EAR_TRAINING_PERFECT_PITCH_SINGLE_NOTE_IDENTIFICATION_ID 
} from "./store/firebase/accountSetup";
import { App as AppState } from "@capacitor/core";
import SubscriptionProvider from "./containers/SubscriptionProvider/SubscriptionProvider";
import AppVersionProvider from "./containers/AppVersionProvider";
import QueryProvider from "./containers/QueryProvider";
import SubscriptionCarouselScreen from "./screens/SubscriptionCarouselScreen";
import { AnimatedSwitch, AnimatedRoute } from "react-router-transition";
import CustomExerciseScreen from "./screens/CustomExercisesScreen";
import CustomExerciseChooseCategoryScreen from "./screens/CustomExerciseChooseCategoryScreen";
import CustomExerciseChooseSubCategoryScreen from "./screens/CustomExerciseChooseSubCategoryScreen";
import CustomExerciseChooseOptionsScreen from "./screens/CustomExerciseChooseOptionsScreen";
import "rc-slider/assets/index.css";
import { Analytics } from "capacitor-analytics";
import { logScreen } from "./common/consts/analytics";
const { SplashScreen, StatusBar } = Plugins;
const analytics = new Analytics();

export default function App() {
  useEffect(() => {
    logAppOpened();
    SplashScreen.hide();
    StatusBar.setStyle({
      style: StatusBarStyle.Light
    });

    history.listen((location) => {
      const { pathname } = location;

      if (pathname === SUBSCRIPTION_CAROUSEL_SCREEN_MODAL) {
        // add time out to not mess with animation
        setTimeout(() => logScreen(pathname), 500);
        return;
      }

      setTimeout(() => logScreen(pathname), 100);
    });
  }, []);

  // reload the app if it goes foreground on exercises that need piano
  // this prevents the audio context being stopped
  AppState.addListener("appStateChange", (state, setState) => {
    if (state.isActive) {
      window.location.reload();
    }
  });
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ReactReduxFirebaseProvider {...firebaseProviderProps}>
          <ConnectedRouter history={history}>
            <SubscriptionProvider>
              <OnboardedProvider>
                <AccountSetupProvider>
                  <AppVersionProvider>
                    <QueryProvider>
                      <div className="App">
                        <LoadingOverlayProvider />
                        <TabNavigatorProvider />
                        <Route path={HOME_SCREEN} exact component={AuthenticatedRouteProvider(IsOnboardedProvider(HomeScreen))} />
                        <Route path={ONBOARDING_SCREEN} exact component={AuthenticatedRouteProvider(NotOnboardedProvider(OnboardingScreen))} />
                        <Route path={ACCOUNT_SCREEN} exact component={AuthenticatedRouteProvider(AccountScreen)} />
                        <Route path={EAR_TRAINING_SCREEN} exact component={AuthenticatedRouteProvider(EarTrainingScreen)} />
                        <Route path={CUSTOM_EXERCISES_SCREEN} exact component={AuthenticatedRouteProvider(CustomExerciseScreen)} />
                        <Route path={CUSTOM_EXERCISES_CHOOSE_CATEGORY_SCREEN} exact component={AuthenticatedRouteProvider(CustomExerciseChooseCategoryScreen)} />
                        <Route path={CUSTOM_EXERCISES_CHOOSE_SUB_CATEGORY_SCREEN} exact component={AuthenticatedRouteProvider(CustomExerciseChooseSubCategoryScreen)} />
                        <Route path={CUSTOM_EXERCISES_CHOOSE_OPTIONS_SCREEN} exact component={AuthenticatedRouteProvider(CustomExerciseChooseOptionsScreen)} />
                        <Route
                          path={SINGLE_NOTE_PRACTICE_SCREEN}
                          exact
                          component={AuthenticatedRouteProvider(SubscribedRouteProvider(
                            props => <SingleNotePracticeScreen {...props} lessonId={EAR_TRAINING_SINGLE_NOTE_IDENTIFICATION_ID} />
                          ))}
                        />
                        <Route
                          path={SINGLE_NOTE_PERFECT_PITCH_PRACTICE_SCREEN}
                          exact
                          component={AuthenticatedRouteProvider(SubscribedRouteProvider(
                            props => <SingleNotePracticeScreen {...props} lessonId={EAR_TRAINING_PERFECT_PITCH_SINGLE_NOTE_IDENTIFICATION_ID} />
                          ))}
                        />
                        <Route
                          path={INTERVAL_IDENTIFICATION_SCREEN}
                          exact
                          component={AuthenticatedRouteProvider(SubscribedRouteProvider(
                            props => <IntervalIdentificationScreen {...props} lessonId={EAR_TRAINING_INTERVAL_IDENTIFICATION_ID} />
                          ))}
                        />
                        <Route
                          path={INTERVAL_IDENTIFICATION_CUSTOM_LESSON_SCREEN}
                          exact
                          component={AuthenticatedRouteProvider(SubscribedRouteProvider(
                            props => <IntervalIdentificationScreen {...props} />
                          ))}
                        />
                        <Route
                          path={CHORD_IDENTIFICATION_CUSTOM_LESSON_SCREEN}
                          exact
                          component={AuthenticatedRouteProvider(SubscribedRouteProvider(
                            props => <ChordQualityScreen {...props} />
                          ))}
                        />
                        <Route
                          path={RHYTHM_TRANSCRIPTION_CUSTOM_LESSON_SCREEN}
                          exact
                          component={AuthenticatedRouteProvider(SubscribedRouteProvider(
                            props => <RhythmTranscriptionScreen {...props} />
                          ))}
                        />
                        <Route path={CHORD_QUALITY_SCREEN} exact component={AuthenticatedRouteProvider(SubscribedRouteProvider(
                          props => <ChordQualityScreen {...props} lessonId={EAR_TRAINING_CHORD_IDENTIFICATION_ID} />
                        ))} />
                        <Route path={SIGN_IN_SCREEN} exact component={UnauthenticatedRouteProvider(SignInScreen)} />
                        <Route path={SIGN_UP_SCREEN} exact component={UnauthenticatedRouteProvider(SignUpScreen)} />
                        <Route path={SUBSCRIPTION_SCREEN} exact component={AuthenticatedRouteProvider(NotSubscribedRouteProvider(IsOnboardedProvider(SubscriptionScreen)))} />
                        <Route path={SUBSCRIPTION_SCREEN_MODAL} exact component={AuthenticatedRouteProvider(NotSubscribedRouteProvider(IsOnboardedProvider(props => <SubscriptionScreen {...props} isModal />)))} />
                        <AnimatedRoute
                          path={SUBSCRIPTION_CAROUSEL_SCREEN_MODAL}
                          exact
                          component={AuthenticatedRouteProvider(NotSubscribedRouteProvider(IsOnboardedProvider(
                            props => <SubscriptionScreen isModal {...props} />
                          )))}
                          atEnter={{ translateY: 30 }}
                          atLeave={{ translateY: 30 }}
                          atActive={{ translateY: 0 }}
                          className="switch-wrapper"
                          mapStyles={styles => ({
                            transform: `translateY(${styles.translateY}%)`,
                          })}

                        />
                        <Route path={SUBSCRIPTION_CAROUSEL_SCREEN} exact component={AuthenticatedRouteProvider(NotSubscribedRouteProvider(IsOnboardedProvider(SubscriptionScreen)))} />
                        <Route path={GET_STARTED_SCREEN} exact component={UnauthenticatedRouteProvider(GetStartedScreen)} />
                        <Route path={MUSIC_THEORY_SCREEN} exact component={AuthenticatedRouteProvider(MusicTheoryScreen)} />
                        <Route path={MUSIC_THEORY_BUILDING_BLOCKS_SCREEN} exact component={AuthenticatedRouteProvider(
                          props => <MusicTheoryLessonScreen lessonRoute={MUSIC_THEORY_BUILDING_BLOCKS_SCREEN} lessonId={MUSIC_THEORY_BUILDING_BLOCKS_ID} {...props} />
                        )} />
                        <Route path={MUSIC_THEORY_NOTE_DURATIONS_SCREEN} exact component={AuthenticatedRouteProvider(SubscribedRouteProvider(
                          props => <MusicTheoryLessonScreen lessonRoute={MUSIC_THEORY_NOTE_DURATIONS_SCREEN} lessonId={MUSIC_THEORY_NOTE_DURATIONS_ID} {...props} />
                        ))} />
                        <Route path={MUSIC_THEORY_HARMONY_SCREEN} exact component={AuthenticatedRouteProvider(SubscribedRouteProvider(
                          props => <MusicTheoryLessonScreen lessonRoute={MUSIC_THEORY_HARMONY_SCREEN} lessonId={MUSIC_THEORY_HARMONY_ID} {...props} />
                        ))} />
                        <Route path={MUSIC_THEORY_MINOR_MAJOR_THIRDS} exact component={AuthenticatedRouteProvider(SubscribedRouteProvider(
                          props => <MusicTheoryLessonScreen lessonRoute={MUSIC_THEORY_MINOR_MAJOR_THIRDS} lessonId={MUSIC_THEORY_MINOR_MAJOR_THIRDS_ID} {...props} />
                        ))} />

                        {/* quizes */}
                        <Route path={QUIZ_MUSIC_THEORY_BUILDING_BLOCKS_SCREEN} exact component={AuthenticatedRouteProvider(
                          props => <QuizScreen lessonRoute={MUSIC_THEORY_BUILDING_BLOCKS_SCREEN} lessonId={MUSIC_THEORY_BUILDING_BLOCKS_ID} {...props} />
                        )} />
                        <Route path={QUIZ_MUSIC_THEORY_NOTE_DURATIONS_SCREEN} exact component={AuthenticatedRouteProvider(SubscribedRouteProvider(
                          props => <QuizScreen lessonRoute={MUSIC_THEORY_NOTE_DURATIONS_SCREEN} lessonId={MUSIC_THEORY_NOTE_DURATIONS_ID} {...props} />
                        ))} />
                        <Route path={QUIZ_MUSIC_THEORY_HARMONY_SCREEN} exact component={AuthenticatedRouteProvider(SubscribedRouteProvider(
                          props => <QuizScreen lessonRoute={MUSIC_THEORY_HARMONY_SCREEN} lessonId={MUSIC_THEORY_HARMONY_ID} {...props} />
                        ))} />
                        <Route path={QUIZ_MUSIC_THEORY_MINOR_MAJOR_THIRDS} exact component={AuthenticatedRouteProvider(SubscribedRouteProvider(
                          props => <QuizScreen lessonRoute={MUSIC_THEORY_MINOR_MAJOR_THIRDS} lessonId={MUSIC_THEORY_MINOR_MAJOR_THIRDS_ID} {...props} />
                        ))} />

                        <Route
                          path={EAR_TRAINING_MINOR_MAJOR_THIRD_SCREEN}
                          exact
                          component={AuthenticatedRouteProvider(SubscribedRouteProvider(
                            props => <IntervalIdentificationScreen {...props} lessonId={EAR_TRAINING_MINOR_MAJOR_THIRD_ID} />
                          ))}
                        />
                        <Route
                          path={EAR_TRAINING_MINOR_MAJOR_THIRD_1_SCREEN}
                          exact
                          component={AuthenticatedRouteProvider(SubscribedRouteProvider(
                            props => <IntervalIdentificationScreen {...props} lessonId={EAR_TRAINING_MINOR_MAJOR_THIRD_1_ID} />
                          ))}
                        />
                        <Route
                          path={EAR_TRAINING_MINOR_MAJOR_THIRD_2_SCREEN}
                          exact
                          component={AuthenticatedRouteProvider(SubscribedRouteProvider(
                            props => <IntervalIdentificationScreen {...props} lessonId={EAR_TRAINING_MINOR_MAJOR_THIRD_2_ID} />
                          ))}
                        />
                        <Route
                          path={MUSIC_THEORY_PERFECT_FIFTH_PERFECT_FROUTH_SCREEN}
                          exact
                          component={AuthenticatedRouteProvider(SubscribedRouteProvider(
                            props => <MusicTheoryLessonScreen lessonRoute={MUSIC_THEORY_PERFECT_FIFTH_PERFECT_FROUTH_SCREEN} lessonId={MUSIC_THEORY_PERFECT_FIFTH_PERFECT_FROUTH_ID} {...props} />
                          ))}
                        />
                        <Route path={QUIZ_MUSIC_THEORY_PERFECT_FIFTH_PERFECT_FROUTH_SCREEN} exact component={AuthenticatedRouteProvider(SubscribedRouteProvider(
                          props => <QuizScreen lessonRoute={MUSIC_THEORY_PERFECT_FIFTH_PERFECT_FROUTH_SCREEN} lessonId={MUSIC_THEORY_PERFECT_FIFTH_PERFECT_FROUTH_ID} {...props} />
                        ))} />

                        <Route
                          path={EAR_TRAINING_PERFECT_FIFTH_PERFECT_FOURTH_SCREEN}
                          exact
                          component={AuthenticatedRouteProvider(SubscribedRouteProvider(
                            props => <IntervalIdentificationScreen {...props} lessonId={EAR_TRAINING_PERFECT_FIFTH_PERFECT_FOURTH_ID} />
                          ))}
                        />
                        <Route
                          path={EAR_TRAINING_PERFECT_FIFTH_PERFECT_FOURTH_1_SCREEN}
                          exact
                          component={AuthenticatedRouteProvider(SubscribedRouteProvider(
                            props => <IntervalIdentificationScreen {...props} lessonId={EAR_TRAINING_PERFECT_FIFTH_PERFECT_FOURTH_1_ID} />
                          ))}
                        />
                        <Route
                          path={EAR_TRAINING_PERFECT_FIFTH_PERFECT_FOURTH_2_SCREEN}
                          exact
                          component={AuthenticatedRouteProvider(SubscribedRouteProvider(
                            props => <IntervalIdentificationScreen {...props} lessonId={EAR_TRAINING_PERFECT_FIFTH_PERFECT_FOURTH_2_ID} />
                          ))}
                        />
                        <Route
                          path={MUSIC_THEORY_MINOR_MAJOR_CHORD_SCREEN}
                          exact
                          component={AuthenticatedRouteProvider(SubscribedRouteProvider(
                            props => <MusicTheoryLessonScreen lessonRoute={MUSIC_THEORY_MINOR_MAJOR_CHORD_SCREEN} lessonId={MUSIC_THEORY_MINOR_MAJOR_CHORD_ID} {...props} />
                          ))}
                        />
                        <Route path={QUIZ_MUSIC_THEORY_MINOR_MAJOR_CHORD_SCREEN} exact component={AuthenticatedRouteProvider(SubscribedRouteProvider(
                          props => <QuizScreen lessonRoute={MUSIC_THEORY_MINOR_MAJOR_CHORD_SCREEN} lessonId={MUSIC_THEORY_MINOR_MAJOR_CHORD_ID} {...props} />
                        ))} />
                        <Route
                          path={EAR_TRAINING_MINOR_MAJOR_CHORD_SCREEN}
                          exact
                          component={AuthenticatedRouteProvider(SubscribedRouteProvider(
                            props => <ChordQualityScreen {...props} lessonId={EAR_TRAINING_MINOR_MAJOR_CHORD_ID} />
                          ))}
                        />
                        <Route
                          path={EAR_TRAINING_MINOR_MAJOR_CHORD_1_SCREEN}
                          exact
                          component={AuthenticatedRouteProvider(SubscribedRouteProvider(
                            props => <ChordQualityScreen {...props} lessonId={EAR_TRAINING_MINOR_MAJOR_CHORD_1_ID} />
                          ))}
                        />
                        <Route
                          path={EAR_TRAINING_MINOR_MAJOR_CHORD_2_SCREEN}
                          exact
                          component={AuthenticatedRouteProvider(SubscribedRouteProvider(
                            props => <ChordQualityScreen {...props} lessonId={EAR_TRAINING_MINOR_MAJOR_CHORD_2_ID} />
                          ))}
                        />
                        <Route
                          path={MUSIC_THEORY_MINOR_MAJOR_SECOND_SCREEN}
                          exact
                          component={AuthenticatedRouteProvider(SubscribedRouteProvider(
                            props => <MusicTheoryLessonScreen lessonRoute={MUSIC_THEORY_MINOR_MAJOR_SECOND_SCREEN} lessonId={MUSIC_THEORY_MINOR_MAJOR_SECOND_ID} {...props} />
                          ))}
                        />
                        <Route path={QUIZ_MUSIC_THEORY_MINOR_MAJOR_SECOND_SCREEN} exact component={AuthenticatedRouteProvider(SubscribedRouteProvider(
                          props => <QuizScreen lessonRoute={MUSIC_THEORY_MINOR_MAJOR_SECOND_SCREEN} lessonId={MUSIC_THEORY_MINOR_MAJOR_SECOND_ID} {...props} />
                        ))} />
                        <Route
                          path={EAR_TRAINING_MINOR_MAJOR_SECOND_SCREEN}
                          exact
                          component={AuthenticatedRouteProvider(
                            props => <IntervalIdentificationScreen {...props} lessonId={EAR_TRAINING_MINOR_MAJOR_SECOND_ID} />
                          )}
                        />
                        <Route
                          path={EAR_TRAINING_MINOR_MAJOR_SECOND_1_SCREEN}
                          exact
                          component={AuthenticatedRouteProvider(
                            props => <IntervalIdentificationScreen {...props} lessonId={EAR_TRAINING_MINOR_MAJOR_SECOND_1_ID} />
                          )}
                        />
                        <Route
                          path={EAR_TRAINING_MINOR_MAJOR_SECOND_2_SCREEN}
                          exact
                          component={AuthenticatedRouteProvider(SubscribedRouteProvider(
                            props => <IntervalIdentificationScreen {...props} lessonId={EAR_TRAINING_MINOR_MAJOR_SECOND_2_ID} />
                          ))}
                        />
                        <Route
                          path={MUSIC_THEORY_INTERVALS_CHECKPOINT_ONE_SCREEN}
                          exact
                          component={AuthenticatedRouteProvider(SubscribedRouteProvider(
                            props => <MusicTheoryLessonScreen lessonRoute={MUSIC_THEORY_INTERVALS_CHECKPOINT_ONE_SCREEN} lessonId={MUSIC_THEORY_INTERVALS_CHECKPOINT_ONE_ID} {...props} />
                          ))}
                        />
                        <Route path={QUIZ_MUSIC_THEORY_INTERVALS_CHECKPOINT_ONE_SCREEN} exact component={AuthenticatedRouteProvider(SubscribedRouteProvider(
                          props => <QuizScreen lessonRoute={MUSIC_THEORY_INTERVALS_CHECKPOINT_ONE_SCREEN} lessonId={MUSIC_THEORY_INTERVALS_CHECKPOINT_ONE_ID} {...props} />
                        ))} />
                        <Route
                          path={EAR_TRAINING_INTERVALS_BEGINNER_SCREEN}
                          exact
                          component={AuthenticatedRouteProvider(SubscribedRouteProvider(
                            props => <IntervalIdentificationScreen {...props} lessonId={EAR_TRAINING_INTERVALS_BEGINNER_ID} />
                          ))}
                        />
                        <Route
                          path={MUSIC_THEORY_TRITONE_SCREEN}
                          exact
                          component={AuthenticatedRouteProvider(SubscribedRouteProvider(
                            props => <MusicTheoryLessonScreen lessonRoute={MUSIC_THEORY_TRITONE_SCREEN} lessonId={MUSIC_THEORY_TRITONE_ID} {...props} />
                          ))}
                        />
                        <Route path={QUIZ_MUSIC_THEORY_TRITONE_SCREEN} exact component={AuthenticatedRouteProvider(SubscribedRouteProvider(
                          props => <QuizScreen lessonRoute={MUSIC_THEORY_TRITONE_SCREEN} lessonId={MUSIC_THEORY_TRITONE_ID} {...props} />
                        ))} />
                        <Route
                          path={EAR_TRAINING_TRITONE_SCREEN}
                          exact
                          component={AuthenticatedRouteProvider(SubscribedRouteProvider(
                            props => <IntervalIdentificationScreen {...props} lessonId={EAR_TRAINING_TRITONE_ID} />
                          ))}
                        />
                        <Route
                          path={EAR_TRAINING_TRITONE_1_SCREEN}
                          exact
                          component={AuthenticatedRouteProvider(SubscribedRouteProvider(
                            props => <IntervalIdentificationScreen {...props} lessonId={EAR_TRAINING_TRITONE_1_ID} />
                          ))}
                        />
                        <Route
                          path={EAR_TRAINING_TRITONE_2_SCREEN}
                          exact
                          component={AuthenticatedRouteProvider(SubscribedRouteProvider(
                            props => <IntervalIdentificationScreen {...props} lessonId={EAR_TRAINING_TRITONE_2_ID} />
                          ))}
                        />

                        <Route
                          path={EAR_TRAINING_DIMINISHED_SCREEN}
                          exact
                          component={AuthenticatedRouteProvider(SubscribedRouteProvider(
                            props => <ChordQualityScreen {...props} lessonId={EAR_TRAINING_DIMINISHED_ID} />
                          ))}
                        />
                        <Route
                          path={EAR_TRAINING_DIMINISHED_1_SCREEN}
                          exact
                          component={AuthenticatedRouteProvider(SubscribedRouteProvider(
                            props => <ChordQualityScreen {...props} lessonId={EAR_TRAINING_DIMINISHED_1_ID} />
                          ))}
                        />
                        <Route
                          path={EAR_TRAINING_DIMINISHED_2_SCREEN}
                          exact
                          component={AuthenticatedRouteProvider(SubscribedRouteProvider(
                            props => <ChordQualityScreen {...props} lessonId={EAR_TRAINING_DIMINISHED_2_ID} />
                          ))}
                        />
                        {/* {
                    config.admin &&
                    <Route
                      path={ADMIN_SCREEN}
                      exact
                      component={AuthenticatedRouteProvider(AdminScreen)}
                    />
                  }
                  */}
                        <Route
                          path={MUSIC_THEORY_DIMINISHED_SCREEN}
                          exact
                          component={AuthenticatedRouteProvider(SubscribedRouteProvider(
                            props => <MusicTheoryLessonScreen lessonRoute={MUSIC_THEORY_DIMINISHED_SCREEN} lessonId={MUSIC_THEORY_DIMINISHED_ID} {...props} />
                          ))}
                        />
                        <Route path={QUIZ_MUSIC_THEORY_DIMINISHED_SCREEN} exact component={AuthenticatedRouteProvider(SubscribedRouteProvider(
                          props => <QuizScreen lessonRoute={MUSIC_THEORY_DIMINISHED_SCREEN} lessonId={MUSIC_THEORY_DIMINISHED_ID} {...props} />
                        ))} />
                        <Route
                          path={MUSIC_THEORY_MAJOR_SCALE_SCREEN}
                          exact
                          component={AuthenticatedRouteProvider(SubscribedRouteProvider(
                            props => <MusicTheoryLessonScreen lessonRoute={MUSIC_THEORY_MAJOR_SCALE_SCREEN} lessonId={MUSIC_THEORY_MAJOR_SCALE_ID} {...props} />
                          ))}
                        />
                        <Route path={QUIZ_MUSIC_THEORY_MAJOR_SCALE_SCREEN} exact component={AuthenticatedRouteProvider(SubscribedRouteProvider(
                          props => <QuizScreen lessonRoute={MUSIC_THEORY_MAJOR_SCALE_SCREEN} lessonId={MUSIC_THEORY_MAJOR_SCALE_ID} {...props} />
                        ))} />
                        <Route
                          path={MUSIC_THEORY_CHECKPOINT_I_SCREEN}
                          exact
                          component={AuthenticatedRouteProvider(SubscribedRouteProvider(
                            props => <MusicTheoryLessonScreen lessonRoute={MUSIC_THEORY_CHECKPOINT_I_SCREEN} lessonId={MUSIC_THEORY_CHECKPOINT_I_ID} {...props} />
                          ))}
                        />
                        <Route path={QUIZ_MUSIC_THEORY_CHECKPOINT_I_SCREEN} exact component={AuthenticatedRouteProvider(SubscribedRouteProvider(
                          props => <QuizScreen lessonRoute={MUSIC_THEORY_CHECKPOINT_I_SCREEN} lessonId={MUSIC_THEORY_CHECKPOINT_I_ID} {...props} />
                        ))} />
                        <Route
                          path={MUSIC_THEORY_SHARPS_AND_FLATS_SCREEN}
                          exact
                          component={AuthenticatedRouteProvider(
                            props => <MusicTheoryLessonScreen lessonRoute={MUSIC_THEORY_SHARPS_AND_FLATS_SCREEN} lessonId={MUSIC_THEORY_SHARPS_AND_FLATS_ID} {...props} />
                          )}
                        />
                        <Route path={QUIZ_MUSIC_THEORY_SHARPS_AND_FLATS_SCREEN} exact component={AuthenticatedRouteProvider(
                          props => <QuizScreen lessonRoute={MUSIC_THEORY_SHARPS_AND_FLATS_SCREEN} lessonId={MUSIC_THEORY_SHARPS_AND_FLATS_ID} {...props} />
                        )} />
                        <Route
                          path={RHYTHM_TRANSCRIPTION_SCREEN_I}
                          exact
                          component={AuthenticatedRouteProvider(
                            props => <RhythmTranscriptionScreen {...props} lessonId={RHYTHM_TRANSCRIPTION_I_ID} />
                          )}
                        />
                        <Route
                          path={RHYTHM_TRANSCRIPTION_SCREEN_II}
                          exact
                          component={AuthenticatedRouteProvider(SubscribedRouteProvider(
                            props => <RhythmTranscriptionScreen {...props} lessonId={RHYTHM_TRANSCRIPTION_II_ID} />
                          ))}
                        />
                        <Route
                          path={RHYTHM_TRANSCRIPTION_SCREEN_III}
                          exact
                          component={AuthenticatedRouteProvider(SubscribedRouteProvider(
                            props => <RhythmTranscriptionScreen {...props} lessonId={RHYTHM_TRANSCRIPTION_III_ID} />
                          ))}
                        />
                        <Route
                          path={RHYTHM_TRANSCRIPTION_SCREEN_IV}
                          exact
                          component={AuthenticatedRouteProvider(SubscribedRouteProvider(
                            props => <RhythmTranscriptionScreen {...props} lessonId={RHYTHM_TRANSCRIPTION_IV_ID} />
                          ))}
                        />
                        <Route
                          path={RHYTHM_TRANSCRIPTION_SCREEN_V}
                          exact
                          component={AuthenticatedRouteProvider(SubscribedRouteProvider(
                            props => <RhythmTranscriptionScreen {...props} lessonId={RHYTHM_TRANSCRIPTION_V_ID} />
                          ))}
                        />
                        <Route
                          path={RHYTHM_TRANSCRIPTION_SCREEN_VI}
                          exact
                          component={AuthenticatedRouteProvider(SubscribedRouteProvider(
                            props => <RhythmTranscriptionScreen {...props} lessonId={RHYTHM_TRANSCRIPTION_VI_ID} />
                          ))}
                        />
                        <Route
                          path={RHYTHM_SCREEN}
                          exact
                          component={AuthenticatedRouteProvider(RhythmScreen)}
                        />
                        <Route
                          path={MUSIC_THEORY_RHYTHM_SCREEN}
                          exact
                          component={AuthenticatedRouteProvider(SubscribedRouteProvider(
                            props => <MusicTheoryLessonScreen lessonRoute={MUSIC_THEORY_RHYTHM_SCREEN} lessonId={MUSIC_THEORY_RHYTHM_ID} {...props} />
                          ))}
                        />
                        <Route path={QUIZ_MUSIC_THEORY_RHYTHM_SCREEN} exact component={AuthenticatedRouteProvider(SubscribedRouteProvider(
                          props => <QuizScreen lessonRoute={MUSIC_THEORY_RHYTHM_SCREEN} lessonId={MUSIC_THEORY_RHYTHM_ID} {...props} />
                        ))} />
                        <Route
                          path={MUSIC_THEORY_DOTTED_NOTES_SCREEN}
                          exact
                          component={AuthenticatedRouteProvider(SubscribedRouteProvider(
                            props => <MusicTheoryLessonScreen lessonRoute={MUSIC_THEORY_DOTTED_NOTES_SCREEN} lessonId={MUSIC_THEORY_DOTTED_NOTES_ID} {...props} />
                          ))}
                        />
                        <Route path={QUIZ_MUSIC_THEORY_DOTTED_NOTES_SCREEN} exact component={AuthenticatedRouteProvider(SubscribedRouteProvider(
                          props => <QuizScreen lessonRoute={MUSIC_THEORY_DOTTED_NOTES_SCREEN} lessonId={MUSIC_THEORY_DOTTED_NOTES_ID} {...props} />
                        ))} />

                        <Route path={MUSIC_THEORY_EXERCISES_SCREEN} exact component={AuthenticatedRouteProvider(MusicTheoryExerciseScreen)} />
                        <Route path={MUSIC_THEORY_ENHARMONIC_NOTES_SCREEN} exact component={AuthenticatedRouteProvider(SubscribedRouteProvider(
                          props => <EnharmonicNotesExerciseScreen {...props} lessonId={MUSIC_THEORY_ENHARMONIC_NOTES_ID} />
                        ))} />
                        <Route path={MUSIC_THEORY_EXERCISES_NOTE_DISTANCES_MINOR_MAJOR_2NDS_SCREEN} exact component={AuthenticatedRouteProvider(SubscribedRouteProvider(
                          props => <NoteDistancesExerciseScreen {...props} lessonId={MUSIC_THEORY_EXERCISES_NOTE_DISTANCES_MINOR_MAJOR_2NDS_ID} />
                        ))} />
                        <Route path={MUSIC_THEORY_EXERCISES_NOTE_DISTANCES_MINOR_MAJOR_3RDS_SCREEN} exact component={AuthenticatedRouteProvider(SubscribedRouteProvider(
                          props => <NoteDistancesExerciseScreen {...props} lessonId={MUSIC_THEORY_EXERCISES_NOTE_DISTANCES_MINOR_MAJOR_3RD_ID} />
                        ))} />
                        <Route path={MUSIC_THEORY_EXERCISES_NOTE_DISTANCES_PERFECT_4TH_AND_5THS_SCREEN} exact component={AuthenticatedRouteProvider(SubscribedRouteProvider(
                          props => <NoteDistancesExerciseScreen {...props} lessonId={MUSIC_THEORY_EXERCISES_NOTE_DISTANCES_PERFECT_4THS_AND_5THS_ID} />
                        ))} />
                        <Route path={MUSIC_THEORY_EXERCISES_NOTE_DISTANCES_MINOR_MAJOR_6THS_SCREEN} exact component={AuthenticatedRouteProvider(SubscribedRouteProvider(
                          props => <NoteDistancesExerciseScreen {...props} lessonId={MUSIC_THEORY_EXERCISES_NOTE_DISTANCES_MINOR_MAJOR_6THS_ID} />
                        ))} />
                        <Route path={MUSIC_THEORY_EXERCISES_NOTE_DISTANCES_MINOR_MAJOR_7THS_SCREEN} exact component={AuthenticatedRouteProvider(SubscribedRouteProvider(
                          props => <NoteDistancesExerciseScreen {...props} lessonId={MUSIC_THEORY_EXERCISES_NOTE_DISTANCES_MINOR_MAJOR_7THS_ID} />
                        ))} />
                        <Route
                          path={MUSIC_THEORY_MINOR_MAJOR_6THS_SCREEN}
                          exact
                          component={AuthenticatedRouteProvider(SubscribedRouteProvider(
                            props => <MusicTheoryLessonScreen lessonRoute={MUSIC_THEORY_MINOR_MAJOR_6THS_SCREEN} lessonId={MUSIC_THEORY_MINOR_MAJOR_6THS_ID} {...props} />
                          ))}
                        />
                        <Route path={QUIZ_MUSIC_THEORY_MINOR_MAJOR_6THS_SCREEN} exact component={AuthenticatedRouteProvider(SubscribedRouteProvider(
                          props => <QuizScreen lessonRoute={MUSIC_THEORY_MINOR_MAJOR_6THS_SCREEN} lessonId={MUSIC_THEORY_MINOR_MAJOR_6THS_ID} {...props} />
                        ))} />
                        <Route
                          path={MUSIC_THEORY_MINOR_MAJOR_6TH_CHORDS_SCREEN}
                          exact
                          component={AuthenticatedRouteProvider(SubscribedRouteProvider(
                            props => <MusicTheoryLessonScreen lessonRoute={MUSIC_THEORY_MINOR_MAJOR_6TH_CHORDS_SCREEN} lessonId={MUSIC_THEORY_MINOR_MAJOR_6TH_CHORDS_ID} {...props} />
                          ))}
                        />
                        <Route path={QUIZ_MUSIC_THEORY_MINOR_MAJOR_6TH_CHORDS_SCREEN} exact component={AuthenticatedRouteProvider(SubscribedRouteProvider(
                          props => <QuizScreen lessonRoute={MUSIC_THEORY_MINOR_MAJOR_6TH_CHORDS_SCREEN} lessonId={MUSIC_THEORY_MINOR_MAJOR_6TH_CHORDS_ID} {...props} />
                        ))} />
                        <Route
                          path={MUSIC_THEORY_MINOR_MAJOR_7THS_SCREEN}
                          exact
                          component={AuthenticatedRouteProvider(SubscribedRouteProvider(
                            props => <MusicTheoryLessonScreen lessonRoute={MUSIC_THEORY_MINOR_MAJOR_7THS_SCREEN} lessonId={MUSIC_THEORY_MINOR_MAJOR_7THS_ID} {...props} />
                          ))}
                        />
                        <Route path={QUIZ_MUSIC_THEORY_MINOR_MAJOR_7THS_SCREEN} exact component={AuthenticatedRouteProvider(SubscribedRouteProvider(
                          props => <QuizScreen lessonRoute={MUSIC_THEORY_MINOR_MAJOR_7THS_SCREEN} lessonId={MUSIC_THEORY_MINOR_MAJOR_7THS_ID} {...props} />
                        ))} />
                        <Route
                          path={MUSIC_THEORY_MINOR_MAJOR_7TH_CHORDS_SCREEN}
                          exact
                          component={AuthenticatedRouteProvider(SubscribedRouteProvider(
                            props => <MusicTheoryLessonScreen lessonRoute={MUSIC_THEORY_MINOR_MAJOR_7TH_CHORDS_SCREEN} lessonId={MUSIC_THEORY_MINOR_MAJOR_7TH_CHORDS_ID} {...props} />
                          ))}
                        />
                        <Route path={QUIZ_MUSIC_THEORY_MINOR_MAJOR_7TH_CHORDS_SCREEN} exact component={AuthenticatedRouteProvider(SubscribedRouteProvider(
                          props => <QuizScreen lessonRoute={MUSIC_THEORY_MINOR_MAJOR_7TH_CHORDS_SCREEN} lessonId={MUSIC_THEORY_MINOR_MAJOR_7TH_CHORDS_ID} {...props} />
                        ))} />
                        <Route
                          path={EAR_TRAINING_MINOR_MAJOR_6THS_SCREEN}
                          exact
                          component={AuthenticatedRouteProvider(SubscribedRouteProvider(
                            props => <IntervalIdentificationScreen {...props} lessonId={EAR_TRAINING_MINOR_MAJOR_6THS_ID} />
                          ))}
                        />
                        <Route
                          path={EAR_TRAINING_MINOR_MAJOR_6THS_1_SCREEN}
                          exact
                          component={AuthenticatedRouteProvider(SubscribedRouteProvider(
                            props => <IntervalIdentificationScreen {...props} lessonId={EAR_TRAINING_MINOR_MAJOR_6THS_1_ID} />
                          ))}
                        />
                        <Route
                          path={EAR_TRAINING_MINOR_MAJOR_6THS_2_SCREEN}
                          exact
                          component={AuthenticatedRouteProvider(SubscribedRouteProvider(
                            props => <IntervalIdentificationScreen {...props} lessonId={EAR_TRAINING_MINOR_MAJOR_6THS_2_ID} />
                          ))}
                        />
                        <Route
                          path={EAR_TRAINING_MINOR_MAJOR_7THS_SCREEN}
                          exact
                          component={AuthenticatedRouteProvider(SubscribedRouteProvider(
                            props => <IntervalIdentificationScreen {...props} lessonId={EAR_TRAINING_MINOR_MAJOR_7THS_ID} />
                          ))}
                        />
                        <Route
                          path={EAR_TRAINING_MINOR_MAJOR_7THS_1_SCREEN}
                          exact
                          component={AuthenticatedRouteProvider(SubscribedRouteProvider(
                            props => <IntervalIdentificationScreen {...props} lessonId={EAR_TRAINING_MINOR_MAJOR_7THS_1_ID} />
                          ))}
                        />
                        <Route
                          path={EAR_TRAINING_MINOR_MAJOR_7THS_2_SCREEN}
                          exact
                          component={AuthenticatedRouteProvider(SubscribedRouteProvider(
                            props => <IntervalIdentificationScreen {...props} lessonId={EAR_TRAINING_MINOR_MAJOR_7THS_2_ID} />
                          ))}
                        />
                        <Route
                          path={EAR_TRAINING_MINOR_MAJOR_6TH_CHORDS_SCREEN}
                          exact
                          component={AuthenticatedRouteProvider(SubscribedRouteProvider(
                            props => <ChordQualityScreen {...props} lessonId={EAR_TRAINING_MINOR_MAJOR_6TH_CHORDS_ID} />
                          ))}
                        />
                        <Route
                          path={EAR_TRAINING_MINOR_MAJOR_6TH_CHORDS_1_SCREEN}
                          exact
                          component={AuthenticatedRouteProvider(SubscribedRouteProvider(
                            props => <ChordQualityScreen {...props} lessonId={EAR_TRAINING_MINOR_MAJOR_6TH_CHORDS_1_ID} />
                          ))}
                        />
                        <Route
                          path={EAR_TRAINING_MINOR_MAJOR_6TH_CHORDS_2_SCREEN}
                          exact
                          component={AuthenticatedRouteProvider(SubscribedRouteProvider(
                            props => <ChordQualityScreen {...props} lessonId={EAR_TRAINING_MINOR_MAJOR_6TH_CHORDS_2_ID} />
                          ))}
                        />
                        <Route
                          path={EAR_TRAINING_MINOR_MAJOR_7TH_CHORDS_SCREEN}
                          exact
                          component={AuthenticatedRouteProvider(SubscribedRouteProvider(
                            props => <ChordQualityScreen {...props} lessonId={EAR_TRAINING_MINOR_MAJOR_7TH_CHORDS_ID} />
                          ))}
                        />
                        <Route
                          path={EAR_TRAINING_MINOR_MAJOR_7TH_CHORDS_1_SCREEN}
                          exact
                          component={AuthenticatedRouteProvider(SubscribedRouteProvider(
                            props => <ChordQualityScreen {...props} lessonId={EAR_TRAINING_MINOR_MAJOR_7TH_CHORDS_1_ID} />
                          ))}
                        />
                        <Route
                          path={EAR_TRAINING_MINOR_MAJOR_7TH_CHORDS_2_SCREEN}
                          exact
                          component={AuthenticatedRouteProvider(SubscribedRouteProvider(
                            props => <ChordQualityScreen {...props} lessonId={EAR_TRAINING_MINOR_MAJOR_7TH_CHORDS_2_ID} />
                          ))}
                        />
                        <Route
                          path={MUSIC_THEORY_DOMINANT_7TH_CHORD_SCREEN}
                          exact
                          component={AuthenticatedRouteProvider(SubscribedRouteProvider(
                            props => <MusicTheoryLessonScreen lessonRoute={MUSIC_THEORY_DOMINANT_7TH_CHORD_SCREEN} lessonId={MUSIC_THEORY_DOMINANT_7TH_CHORD_ID} {...props} />
                          ))}
                        />
                        <Route path={QUIZ_MUSIC_THEORY_DOMINANT_7TH_CHORD_SCREEN} exact component={AuthenticatedRouteProvider(SubscribedRouteProvider(
                          props => <QuizScreen lessonRoute={MUSIC_THEORY_DOMINANT_7TH_CHORD_SCREEN} lessonId={MUSIC_THEORY_DOMINANT_7TH_CHORD_ID} {...props} />
                        ))} />
                        <Route
                          path={EAR_TRAINING_DOMINANT_7TH_CHORD_SCREEN}
                          exact
                          component={AuthenticatedRouteProvider(SubscribedRouteProvider(
                            props => <ChordQualityScreen {...props} lessonId={EAR_TRAINING_DOMINANT_7TH_CHORD_ID} />
                          ))}
                        />
                        <Route
                          path={EAR_TRAINING_DOMINANT_7TH_CHORD_1_SCREEN}
                          exact
                          component={AuthenticatedRouteProvider(SubscribedRouteProvider(
                            props => <ChordQualityScreen {...props} lessonId={EAR_TRAINING_DOMINANT_7TH_CHORD_1_ID} />
                          ))}
                        />
                        <Route
                          path={EAR_TRAINING_DOMINANT_7TH_CHORD_2_SCREEN}
                          exact
                          component={AuthenticatedRouteProvider(SubscribedRouteProvider(
                            props => <ChordQualityScreen {...props} lessonId={EAR_TRAINING_DOMINANT_7TH_CHORD_2_ID} />
                          ))}
                        />
                        <Route
                          path={MUSIC_THEORY_HALF_DIMINISHED_7TH_CHORD_SCREEN}
                          exact
                          component={AuthenticatedRouteProvider(SubscribedRouteProvider(
                            props => <MusicTheoryLessonScreen lessonRoute={MUSIC_THEORY_HALF_DIMINISHED_7TH_CHORD_SCREEN} lessonId={MUSIC_THEORY_HALF_DIMINISHED_7TH_CHORD_ID} {...props} />
                          ))}
                        />
                        <Route path={QUIZ_MUSIC_THEORY_HALF_DIMINISHED_7TH_CHORD_SCREEN} exact component={AuthenticatedRouteProvider(SubscribedRouteProvider(
                          props => <QuizScreen lessonRoute={MUSIC_THEORY_HALF_DIMINISHED_7TH_CHORD_SCREEN} lessonId={MUSIC_THEORY_HALF_DIMINISHED_7TH_CHORD_ID} {...props} />
                        ))} />
                        <Route
                          path={EAR_TRAINING_HALF_DIMINISHED_7TH_CHORD_SCREEN}
                          exact
                          component={AuthenticatedRouteProvider(SubscribedRouteProvider(
                            props => <ChordQualityScreen {...props} lessonId={EAR_TRAINING_HALF_DIMINISHED_7TH_CHORD_ID} />
                          ))}
                        />
                        <Route
                          path={EAR_TRAINING_HALF_DIMINISHED_7TH_CHORD_1_SCREEN}
                          exact
                          component={AuthenticatedRouteProvider(SubscribedRouteProvider(
                            props => <ChordQualityScreen {...props} lessonId={EAR_TRAINING_HALF_DIMINISHED_7TH_CHORD_1_ID} />
                          ))}
                        />
                        <Route
                          path={EAR_TRAINING_HALF_DIMINISHED_7TH_CHORD_2_SCREEN}
                          exact
                          component={AuthenticatedRouteProvider(SubscribedRouteProvider(
                            props => <ChordQualityScreen {...props} lessonId={EAR_TRAINING_HALF_DIMINISHED_7TH_CHORD_2_ID} />
                          ))}
                        />
                        <Route
                          path={EAR_TRAINING_7TH_CHORD_SCREEN}
                          exact
                          component={AuthenticatedRouteProvider(SubscribedRouteProvider(
                            props => <ChordQualityScreen {...props} lessonId={EAR_TRAINING_7TH_CHORDS_ID} />
                          ))}
                        />
                        {/* <Route
                    path={MUSIC_THEORY_SUS_2_AND_4_CHORDS_SCREEN}
                    exact
                    component={AuthenticatedRouteProvider(SubscribedRouteProvider(
                      props => <MusicTheoryLessonScreen lessonRoute={MUSIC_THEORY_SUS_2_AND_4_CHORDS_SCREEN} lessonId={MUSIC_THEORY_SUS_2_AND_4_CHORDS_ID} {...props} />
                    ))}
                  />
                  <Route path={QUIZ_MUSIC_THEORY_SUS_2_AND_4_CHORDS_SCREEN} exact component={AuthenticatedRouteProvider(SubscribedRouteProvider(
                    props => <QuizScreen lessonRoute={MUSIC_THEORY_SUS_2_AND_4_CHORDS_SCREEN} lessonId={MUSIC_THEORY_SUS_2_AND_4_CHORDS_ID} {...props} />
                  ))} />
                  <Route
                    path={EAR_TRAINING_SUS_2_AND_4_CHORDS_SCREEN}
                    exact
                    component={AuthenticatedRouteProvider(SubscribedRouteProvider(
                      props => <ChordQualityScreen {...props} lessonId={EAR_TRAINING_SUS_2_AND_4_CHORDS_ID} />
                    ))}
                  />
                  <Route
                    path={MUSIC_THEORY_EXTENDED_CHORDS_SCREEN}
                    exact
                    component={AuthenticatedRouteProvider(SubscribedRouteProvider(
                      props => <MusicTheoryLessonScreen lessonRoute={MUSIC_THEORY_EXTENDED_CHORDS_SCREEN} lessonId={MUSIC_THEORY_EXTENDED_CHORDS_ID} {...props} />
                    ))}
                  />
                  <Route path={QUIZ_MUSIC_THEORY_EXTENDED_CHORDS_SCREEN} exact component={AuthenticatedRouteProvider(SubscribedRouteProvider(
                    props => <QuizScreen lessonRoute={MUSIC_THEORY_EXTENDED_CHORDS_SCREEN} lessonId={MUSIC_THEORY_EXTENDED_CHORDS_ID} {...props} />
                  ))} /> */}
                      </div>
                    </QueryProvider>
                  </AppVersionProvider>
                </AccountSetupProvider>
              </OnboardedProvider>
            </SubscriptionProvider>
          </ConnectedRouter>
        </ReactReduxFirebaseProvider>
      </PersistGate>
    </Provider>
  );
}
