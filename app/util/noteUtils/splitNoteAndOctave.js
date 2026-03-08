export default noteNameToSplit => {
  const [noteName, octave] = noteNameToSplit.split(/(\d)/);
  return {
    noteName,
    octave: octave ? parseInt(octave) : undefined,
  };
};

