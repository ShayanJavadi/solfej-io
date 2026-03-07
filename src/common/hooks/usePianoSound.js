import { useRef, useCallback } from 'react';

const CHROMATIC = ["C", "C#", "D", "Eb", "E", "F", "F#", "G", "Ab", "A", "Bb", "B"];
const ENHARMONIC = { "Db": "C#", "D#": "Eb", "Fb": "E", "E#": "F", "Gb": "F#", "G#": "Ab", "A#": "Bb", "B#": "C", "Cb": "B" };

const chromaticIndex = (note) => {
    const idx = CHROMATIC.indexOf(note);
    if (idx !== -1) return idx;
    return CHROMATIC.indexOf(ENHARMONIC[note] || note);
};

export default function usePianoSound(rootNote) {
    const synthRef = useRef(null);
    const loadingRef = useRef(false);

    const onKeyClick = useCallback(async (noteName) => {
        if (!noteName) return;

        if (!synthRef.current && !loadingRef.current) {
            loadingRef.current = true;
            const Tone = (await import('tone')).default;
            const synth = new Tone.PolySynth(4, Tone.Synth, {
                envelope: {
                    attack: 0.01,
                    decay: 1.73,
                    sustain: 0.25,
                    release: 1.47,
                    attackCurve: 'exponential',
                    decayCurve: 'exponential',
                    releaseCurve: 'exponential'
                },
                volume: -10
            });
            synth.toMaster();
            synthRef.current = synth;
            loadingRef.current = false;
        }

        if (synthRef.current) {
            let resolvedName = ENHARMONIC[noteName] || noteName;
            if (CHROMATIC.indexOf(resolvedName) === -1) return;

            let octave = 4;
            if (rootNote) {
                const rootIdx = chromaticIndex(rootNote);
                const noteIdx = chromaticIndex(noteName);
                if (rootIdx > 0 && noteIdx < rootIdx) {
                    octave = 5;
                }
            }
            try {
                synthRef.current.triggerAttackRelease(`${resolvedName}${octave}`, 1);
            } catch (e) {
                // Ignore audio param errors from rapid key presses
            }
        }
    }, [rootNote]);

    return onKeyClick;
}
