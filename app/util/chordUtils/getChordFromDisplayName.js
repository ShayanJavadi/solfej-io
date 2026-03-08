
export default (chordDisplayName, choices) => Object.values(choices)
  .find(chord => chord.displayName === chordDisplayName);