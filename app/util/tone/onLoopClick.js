import Tone from "tone";
import clearLoops from "./clearLoops";

// this is the most dangrous util i've ever written
export default (
  loops,
  activeLoopIndex,
  clickedLoopIndex,
  createLoop,
  setActiveLoopIndex,
) => {

  if (loops.current.length > 0) {
    if (activeLoopIndex === clickedLoopIndex) {
      // stop loop
      clearLoops(loops);
      Tone.Transport.stop();
      // activeLoopIndex.current = undefined;
      setActiveLoopIndex(undefined);
      return;
    }

    // clear loop ids to prevent crackling
    clearLoops(loops);
  }

  const id = createLoop();
  loops.current.push(id);
  // activeLoopIndex.current = clickedLoopIndex
  setActiveLoopIndex(clickedLoopIndex);
  Tone.Transport.start();
};