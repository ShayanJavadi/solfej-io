import {
  RHYTHM_TRANSCRIPTION_I_ID, RHYTHM_TRANSCRIPTION_II_ID, RHYTHM_TRANSCRIPTION_III_ID, RHYTHM_TRANSCRIPTION_IV_ID, RHYTHM_TRANSCRIPTION_V_ID, RHYTHM_TRANSCRIPTION_VI_ID 
} from "../../store/firebase/accountSetup";

export const RHYTHM_CHOICES = {
  [RHYTHM_TRANSCRIPTION_I_ID]: {
    choices: ["h", "q"],
    choiceLength: [2, 3, 3, 3, 3, 3, 3, 4],
  },
  [RHYTHM_TRANSCRIPTION_II_ID]: {
    choices: ["h", "q", "e"],
    choiceLength: [3, 4, 4, 4],
  },
  [RHYTHM_TRANSCRIPTION_III_ID]: {
    choices: ["h", "q", "h.", "q."],
    choiceLength: [3, 4],
  },
  [RHYTHM_TRANSCRIPTION_IV_ID]: {
    choices: ["h", "q", "e", "h.", "q.", "e."],
    choiceLength: [3, 4],
  },
  [RHYTHM_TRANSCRIPTION_V_ID]: {
    choices: ["h", "q", "e", "h.", "q.", "e."],
    choiceLength: [3, 4, 5],
  },
  [RHYTHM_TRANSCRIPTION_VI_ID]: {
    choices: ["h", "q", "e", "h.", "q.", "e."],
    choiceLength: [4, 5],
  },

};