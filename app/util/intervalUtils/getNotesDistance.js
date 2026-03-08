import getDisplayNameFromInterval from "./getDisplayNameFromInterval";
import { distance } from "@tonaljs/tonal";

export default (firstNote, secondNote) => {
  const interval = distance(firstNote, secondNote);

  const displayName = getDisplayNameFromInterval(interval);

  return {
    interval,
    displayName
  };
};