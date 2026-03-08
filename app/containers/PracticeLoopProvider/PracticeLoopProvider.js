
import React from "react";
import { connect } from "react-redux";
import { initPiano } from "../../store/instrument/actions";
import { 
  onWrongGuess,
  onCorrectGuess, 
  initPracticeLoop,
  setIsQuestionPlaying,
  initNewQuestion,
  setActiveNotes,
  loopThroughQuestionSounds,
  resetQuestion
} from "../../store/practiceLoop/actions";
import getPracticeLoopState from "../../store/practiceLoop/selectors/getPracticeLoopState";
import { withRouter } from "react-router-dom";

const mapStateToProps = (state) => ({
  ...{ isInteractive: state.app.isInteractive },
  ...getPracticeLoopState(state),
});

const mapDispatchToProps = {
  initPiano,
  onWrongGuess,
  onCorrectGuess,
  initPracticeLoop,
  setIsQuestionPlaying,
  initNewQuestion,
  setActiveNotes,
  loopThroughQuestionSounds,
  resetQuestion
};

export default (WrappedComponent) => {
  const InjectedComponent = props => <WrappedComponent {...props} />;

  return connect(mapStateToProps, mapDispatchToProps)(withRouter(InjectedComponent));
};