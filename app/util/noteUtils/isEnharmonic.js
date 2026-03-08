import { note } from "@tonaljs/tonal";

export default (firstNote = "", secondNote = "") => note(firstNote + "4").midi === note(secondNote + "4").midi;