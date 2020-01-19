import React, { useEffect, useState } from 'react'
import Tone from "tone";

export default function TonePolySynthProvider(props) {
    const [instrument, setInstrument] = useState(undefined);
    const [isLoading, setIsLoading] = useState(true);

    const sequencePlayer = (partToPlay, onStart, onEnd, isPlaying) => {
        if (isPlaying) {
            Tone.Transport.stop();
            Tone.Transport.cancel(0);
            onEnd();
            return;
        }

        Tone.Transport.stop();
        Tone.Transport.cancel(0);
        onStart();

        const part = new Tone.Part(function (time, value) {
            instrument.triggerAttackRelease(value.note, value.duration, time, value.velocity);
            if (value.end) {
                onEnd();
                Tone.Transport.cancel(0);
                Tone.Transport.stop();
            }
        }, partToPlay).start(0);

        Tone.Transport.start();
    }

    useEffect(() => {
        const piano = new Tone.PolySynth(4, Tone.Synth, {
            envelope: {
                attack: .01,
                decay: 1.73,
                sustain: .25,
                release: 1.47,
                attackCurve: 'exponential',
                decayCurve: "exponential",
                releaseCurve: "exponential"
            },
            volume: -10
        })

        piano.toMaster();
        setInstrument(piano)
        setIsLoading(false)
    }, [])

    const childrenWithProps = React.Children.map(props.children, child =>
        React.cloneElement(child, { instrument, sequencePlayer, toneState: Tone.context.state, isLoading, ...props })
    );

    return childrenWithProps
}
