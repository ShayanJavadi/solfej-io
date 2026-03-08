
import React from "react";
import { useSelector } from "react-redux";
import LoadingOverlay from "../../common/components/LoadingOverlay/LoadingOverlay";
import useDebounce from "../../common/hooks/useDebounce";
import { SINGLE_NOTE_PRACTICE_SCREEN, INTERVAL_IDENTIFICATION_SCREEN, CHORD_QUALITY_SCREEN } from "../../common/consts/routes";

// provides the app with a general purpose overlay for loading
export default props => {
  const { isLoading, pathname } = useSelector(state => ({
    isLoading: state.app.isLoading || 
      !state.firebase.auth.isLoaded ||
      state.lessonData.isLoading ||
      state.account.isLoading ||
      state.account.isLoadingOnboardedStatus ||
      state.instrument.isLoading ||
      state.soundEffects.isLoading,
    pathname: state.router.location.pathname
  }));

  const debouncedIsLoading = useDebounce(isLoading, 100);
  const blackListedPaths = [
    SINGLE_NOTE_PRACTICE_SCREEN,
    INTERVAL_IDENTIFICATION_SCREEN,
    CHORD_QUALITY_SCREEN,
  ];
  return (
    <>
      {props.children}
      <LoadingOverlay isVisible={!blackListedPaths.includes(pathname) && debouncedIsLoading} />
    </>
  );
};