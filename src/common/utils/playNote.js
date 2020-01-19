
export default ({
    noteName, release = 1, time = 0, octave = 4
}, instrument) => {
    if (noteName && instrument) {
        instrument.triggerAttackRelease(`${noteName}${octave}`, release);
    }
};
