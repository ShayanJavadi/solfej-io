
import React, { useState, useEffect, useRef } from "react";
import { MdPauseCircleFilled, MdPlayCircleFilled } from "react-icons/md";
import { primary, yellow } from "../../common/consts/colors";
import Block from "../Block/Block";
import Paragraph from "../Paragraph";
import "./PlayerBlock.scss";
import playNotes from "../../common/utils/playNotes";

function usePrevious(value) {
    // The ref object is a generic container whose current property is mutable ...
    // ... and can hold any value, similar to an instance property on a class
    const ref = useRef();

    // Store current value in ref
    useEffect(() => {
        ref.current = value;
    }, [value]); // Only re-run if value changes

    // Return previous value (happens before update in useEffect above)
    return ref.current;
}

export default function PlayerBlock(props) {
    const {
        onClick,
        text,
        isLoading,
        notesToPlay,
        playNotesSequentially = false,
        instrument,
        shouldAutoPlaySound,
        sequencePlayer,
        toneState
    } = props;
    const [autoPlayedOnce, setAutoPlayedOnce] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const [blockMessage, setBlockMessage] = useState(undefined);

    const wasLoading = usePrevious(isLoading)

    const playBlock = () => {
        setBlockMessage(undefined)
        if (instrument && sequencePlayer && !isLoading) {
            if (playNotesSequentially) {
                const partToPlay = notesToPlay.map((note, index) => ({
                    time: 0 + (.5 * index),
                    note: note,
                    velocity: .5 + .04 * index,
                    duration: "4n",
                }))

                partToPlay.push({
                    time: 0 + (.5 * notesToPlay.length),
                    note: notesToPlay[0] + "5",
                    velocity: .5 + .04 * notesToPlay.length,
                    duration: "4n",
                    end: true
                })
                sequencePlayer(
                    partToPlay,
                    () => setIsPlaying(true),
                    () => setIsPlaying(false),
                    isPlaying
                )
             
                return
            }

            setIsPlaying(true);

            playNotes({
                notes: notesToPlay.map(note => ({ noteName: note })),
                instrument
            });
            setTimeout(() => setIsPlaying(false), 400);
        }

    }

    useEffect(() => {
        if (!isLoading && wasLoading && shouldAutoPlaySound && !autoPlayedOnce) {
            if (toneState === "suspended") {
                setBlockMessage("Tap to unmute")
                return;
            }

            playBlock()
            setAutoPlayedOnce(true)
       }
    }, [isLoading])

  return (
    <div className="player-block" onClick={notesToPlay ? playBlock : onClick}>
      <Block>
        <Paragraph>
          {
            isPlaying ?
              <MdPauseCircleFilled size={55} color={yellow} /> :
              <MdPlayCircleFilled size={55} color={yellow} />
          }
                  {isLoading ? "loading..." : blockMessage || text}
        </Paragraph>
      </Block>
    </div>
  );
}
