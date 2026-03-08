import React, { useState } from "react";
import Tone from "tone";
import HeaderText from "../../../common/components/HeaderText/HeaderText";
import Paragraph from "../../../common/components/Paragraph";
import PianoRollContainer from "../../../common/components/PianoRollContainer";
import PlayerBlock from "../../../common/components/PlayerBlock/PlayerBlock";
import SubHeader from "../../../common/components/SubHeader/SubHeader";
import useLoop from "../../../common/hooks/useLoop";
import playNote from "../../../util/noteUtils/playNote";
import playNotes from "../../../util/noteUtils/playNotes";
import clearLoops from "../../../util/tone/clearLoops";
import createLoop from "../../../util/tone/createLoop";
import onLoopClick from "../../../util/tone/onLoopClick";

const THE_LICC = [{ "time": 0, "note": "A3", "velocity": 0.9, duration: "4n" },
  { "time": .2, "note": "B3", "velocity": 0.5, duration: "4n" },
  { "time": .4, "note": "C4", "velocity": 0.5, duration: "4n" },
  { "time": .6, "note": "D4", "velocity": 0.5, duration: "4n" },
  { "time": .8, "note": "B3", "velocity": 0.5, duration: "2n" },
  { "time": 1.2, "note": "G3", "velocity": 0.5, duration: "2n" },
  { "time": 1.4, "note": "A3", "velocity": 0.5, duration: "2n", end: true }];

const One = ({ instrument }) => (
  <>
    <HeaderText>
      Music Building Blocks
    </HeaderText>
    <SubHeader>
      Musical Alphabet
    </SubHeader>
    <Paragraph>
      All music is made up of notes. A <b>note</b> is any pitch made by a musical instrument.
    </Paragraph>
    <Paragraph>
      The musical alphabet consists of <b>12 different notes</b>.
    </Paragraph>
    <Paragraph>
      In music every note has a letter name. They go from A to G before repeating.
    </Paragraph>
    <Paragraph noMargin opaque>
      Play me👇 🎹🔊
    </Paragraph>
    <PianoRollContainer
      notes={["A3", "Bb3", "B3", "C4", "C#4", "D4", "Eb4", "E4", "F4", "F#4", "G4", "Ab4", "A4"]}
      isPresentational
      hideBlackKeyNames
      notesHaveOctaves
      className
      onKeyClick={({ noteName, octave }) => playNote({ noteName, octave }, instrument)}
    />
    <Paragraph>
      Wait that's not 12 notes. That's 7!
    </Paragraph>
    <Paragraph>
      That's where <b>sharps (♯)</b> and <b>flats (♭)</b> come in (Next lesson!).
    </Paragraph>
  </>
);

const Two = ({ instrument }) => {
  const [activeLoopIndex, setActiveLoopIndex] = useState(undefined);

  let loops = useLoop();

  return (
    <>
      <HeaderText>
        Music Building Blocks
      </HeaderText>
      <SubHeader>
        3 Important Concepts
      </SubHeader>
      <Paragraph>
        The following is an introduction to 3 of the most important concepts in music.
      </Paragraph>
    <Paragraph>
       We will delve deeper in the following lessons.
    </Paragraph>
      <Paragraph>
        <b>Harmony</b> is when you hear two or more notes, or chords played at the same time.
      </Paragraph>
      <PlayerBlock
        isPlaying={activeLoopIndex === 0}
        onClick={() => {
          setActiveLoopIndex(0);
          Tone.Transport.stop();
          Tone.Transport.cancel(0);

          playNotes({
            notes: [
              { noteName: "C" },
              { noteName: "E" },
              { noteName: "G" },
              { noteName: "A" },
            ],
            instrument
          });
          setTimeout(() => setActiveLoopIndex(undefined), 400);

        }}
        text="Harmony"
      />
      <Paragraph>
        Next up is Rhythm 👉
      </Paragraph>
    </>
  );
};

const Three = ({ instrument }) => {
  const [activeLoopIndex, setActiveLoopIndex] = useState(undefined);

  let loops = useLoop();

  return (
    <>
      <HeaderText>
        Music Building Blocks
      </HeaderText>
      <SubHeader addBottomPadding>
        3 Important Concepts (Continued)
      </SubHeader>
      <Paragraph>
        <b>Rhythm</b> is the arrangement of note lengths.
      </Paragraph>
      <PlayerBlock
        isPlaying={activeLoopIndex === 0}
        onClick={() => {
          const loopFunction = () => createLoop("C4", "2n", "2n", instrument);
          onLoopClick(loops, activeLoopIndex, 0, loopFunction, setActiveLoopIndex);
        }}
        text="Slow Rhythm"
      />
      <PlayerBlock
        isPlaying={activeLoopIndex === 1}
        onClick={() => {
          const loopFunction = () => createLoop("C4", "4n", "4n", instrument);
          onLoopClick(loops, activeLoopIndex, 1, loopFunction, setActiveLoopIndex);
        }}
        text="Fast Rhythm"
      />
      <Paragraph>
        Next up is Melody 👉
      </Paragraph>
    </>
  );
};

const Four = ({ instrument }) => {
  const [activeLoopIndex, setActiveLoopIndex] = useState(undefined);

  let loops = useLoop();

  return (
    <>
      <HeaderText>
        Music Building Blocks
      </HeaderText>
      <SubHeader addBottomPadding>
        3 Important Concepts (Continued)
      </SubHeader>
      <Paragraph>
        <b>Melody</b> is the overarching tune created by playing a succession or series of notes.
      </Paragraph>
      <PlayerBlock
        isPlaying={activeLoopIndex === 2}
        onClick={() => {
          if (activeLoopIndex === 2) {
            setActiveLoopIndex(undefined);
            Tone.Transport.cancel(0);
            Tone.Transport.stop();

            return;
          }

          setActiveLoopIndex(2);
          clearLoops(loops);
          Tone.Transport.stop();
          Tone.Transport.cancel(0);

          const part = new Tone.Part(function (time, value) {
            instrument.triggerAttackRelease(value.note, value.duration, time, value.velocity);
            if (value.end) {
              setActiveLoopIndex(undefined);
              Tone.Transport.cancel(0);
              Tone.Transport.stop();
            }
          }, THE_LICC).start(0);

          Tone.Transport.start();

        }}
        text="Melody"
      />
      <Paragraph>
        Now that we know the essential parts of music we can continue on to more complex subjects.
      </Paragraph>
      <Paragraph>
        But first time for a short quiz 👉
      </Paragraph>
    </>
  );
};

const lessons = [
  One,
  Two,
  Three,
  Four
];

export default function BuildingBlocks(props) {
  const { index } = props;

  return lessons[index](props);
}
