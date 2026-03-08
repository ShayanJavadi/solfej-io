
import React from "react";
import { connect } from "react-redux";
import LoadingScreen from "../../common/components/LoadingScreen/LoadingScreen";
import FullscreenButton from "../../common/components/FullscreenButton";
import { setAppIsInteractive } from "../../store/app/actions";
import LoadingSpinner from "../../common/components/LoadingSpinner/LoadingSpinner";
import getIsSingleNotePracticeScreenIsLoading from "../../store/singleNoteScreen/selectors/getIsSingleNotePracticeScreenIsLoading";
import { SINGLE_NOTE_PRACTICE_SCREEN, INTERVAL_IDENTIFICATION_SCREEN, CHORD_QUALITY_SCREEN } from "../../common/consts/routes";
import getIsIntervalIdentificationScreenIsLoading from "../../store/intervalIdentificationScreen/selectors/getIsIntervalIdentificationScreenIsLoading";
import getChordQualityScreenIsLoading from "../../store/chordQualityScreen/selectors/getChordQualityScreenIsLoading";

// TODO: rename this component to something else to not be confused with with loader
const getIsLoadingPropBasedOnRoute = (state) => {
  const { router } = state;

  return getChordQualityScreenIsLoading(state);
  
};

const mapStateToProps = state => {
  const loading = {
    appIsLoading: state.app.isLoading,
    authNotLoaded: !state.firebase.auth.isLoaded,
    lessonDataIsLoading: state.lessonData.isLoading,
    accountIsLoading: state.account.isLoading,
    accountIsLoadingOnboardedStatus: state.account.isLoadingOnboardedStatus,
    soundEffectsIsLoading: state.soundEffects.isLoading,
    instrumentIsLoading: state.instrument.isLoading,
  };
  console.log("[SOLFEJ] loading flags:", loading);
  console.log("[SOLFEJ] isInteractive:", state.app.isInteractive);
  return {
    isLoading: loading.appIsLoading ||
      loading.authNotLoaded ||
      loading.lessonDataIsLoading ||
      loading.accountIsLoading ||
      loading.accountIsLoadingOnboardedStatus ||
      loading.soundEffectsIsLoading ||
      loading.instrumentIsLoading,
    isInteractive: state.app.isInteractive,
  };
};

const mapDispatchToProps = { setAppIsInteractive };

export default (WrappedComponent) => {
  const InjectedComponent = ({
    setAppIsInteractive, isLoading, isInteractive, ...props 
  }) => {
    if (isLoading || isLoading === undefined) {
      return (
        <LoadingScreen>
          <FullscreenButton>
            <br />
            <h1>Loading</h1>
            <LoadingSpinner />
          </FullscreenButton>
        </LoadingScreen>
      );
    }

    if (!isInteractive) {
      return (
        <LoadingScreen>
          <FullscreenButton
            onClick={() => setAppIsInteractive(true)}
            text="Tap To Start"
          />
        </LoadingScreen>
      );
    }
    
    return (
      <WrappedComponent {...props} />
    );
  };

  return connect(mapStateToProps, mapDispatchToProps)(InjectedComponent);
};