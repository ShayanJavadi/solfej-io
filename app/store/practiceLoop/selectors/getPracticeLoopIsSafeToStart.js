export default ({ instrument, app, practiceLoop }) => !instrument.isLoading &&
  app.isInteractive &&
  instrument.piano &&
  !practiceLoop.practiceLoopStarted;
