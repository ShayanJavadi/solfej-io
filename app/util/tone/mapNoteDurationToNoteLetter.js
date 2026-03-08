export default {
  4: {
    duration: "1n",
    noteLetter: "w",
  },
  2: {
    duration: "2n",
    noteLetter: "h",
  },
  1: {
    duration: "4n",
    noteLetter: "q",
  },
  .5: {
    duration: "8n",
    noteLetter: "e",
  },
  .25: {
    duration: "16n",
    noteLetter: "s",
  },
  [4 + 2]: {
    duration: "1n.",
    noteLetter: "w.",
  },
  [2 + 1]: {
    duration: "2n.",
    noteLetter: "h.",
  },
  [1 + .5]: {
    duration: "4n.",
    noteLetter: "q.",
  },
  [.5 + .25]: {
    duration: "8n.",
    noteLetter: "e.",
  },
  [.25 + (.25 / 2)]: {
    duration: "16n.",
    noteLetter: "s.",
  }
};