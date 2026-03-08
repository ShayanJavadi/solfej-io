import Tone from "tone";

// returns loop id
export default (note = "C4", release = "1n", loopDuration = "1n", instrument, callback = () => null) => {
  return Tone.Transport.scheduleRepeat(function (time) {
    callback(time);
    instrument && instrument.triggerAttackRelease(note, release, time);
  }, loopDuration);
};

