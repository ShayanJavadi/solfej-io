import { delay } from "lodash";

export default ({
  sounds = [],
  activeSoundStateSetterFunction,
  onBeforeLastSoundCallback,
  onAfterLastSoundCallback,
  timePerNote = 1000
}) => {
  const timerIds = [];
  // TODO: refactor to reduce
  sounds.forEach((sound, index) => {
    const isLastSound = index === sounds.length - 1;
    if (isLastSound) {
      // before last sound is started
      onBeforeLastSoundCallback && timerIds.push(delay(
        () => onBeforeLastSoundCallback(),
        timePerNote * (index),
      ));
      // after last sound is ended
      onAfterLastSoundCallback && timerIds.push(delay(
        () => onAfterLastSoundCallback(),
        timePerNote * (index + 1),
      ));
    }
    // queue up next note
    timerIds.push(delay(soundToSet => activeSoundStateSetterFunction(soundToSet), timePerNote * index, sound));
  });
  
  return timerIds;
};
