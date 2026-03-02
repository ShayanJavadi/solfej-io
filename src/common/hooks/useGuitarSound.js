import { useRef, useCallback } from 'react';

export default function useGuitarSound() {
    const synthRef = useRef(null);
    const loadingRef = useRef(false);

    const onNoteClick = useCallback(async (noteName) => {
        if (!noteName) return;

        if (!synthRef.current && !loadingRef.current) {
            loadingRef.current = true;
            const Tone = (await import('tone')).default;
            const synth = new Tone.PluckSynth({
                attackNoise: 1,
                dampening: 4000,
                resonance: 0.97,
            });
            synth.volume.value = -5;
            synth.toMaster();
            synthRef.current = synth;
            loadingRef.current = false;
        }

        if (synthRef.current) {
            synthRef.current.triggerAttack(noteName);
        }
    }, []);

    return onNoteClick;
}
