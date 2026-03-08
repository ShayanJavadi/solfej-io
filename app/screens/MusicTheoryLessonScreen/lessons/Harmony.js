import React, { useState } from "react";
import HeaderText from "../../../common/components/HeaderText/HeaderText";
import Paragraph from "../../../common/components/Paragraph";
import PlayerBlock from "../../../common/components/PlayerBlock/PlayerBlock";
import SubHeader from "../../../common/components/SubHeader/SubHeader";
import playNotes from "../../../util/noteUtils/playNotes";
import PianoRollContainer from "../../../common/components/PianoRollContainer";
import playNote from "../../../util/noteUtils/playNote";

const One = ({ instrument }) => {
  const [activePlayerIndex, setActivePlayerIndex] = useState(undefined);

  return (
    <>
      <HeaderText>
        Harmony
      </HeaderText>
      <SubHeader>
        Why do things sound "good"?
      </SubHeader>
      <Paragraph>
        Ever wondered why some notes sound ugly when played together 🧟?
      </Paragraph>
      <PlayerBlock
        isPlaying={activePlayerIndex === 0}
        onClick={() => {
          setActivePlayerIndex(0);
          playNotes({
            notes: [
              { noteName: "C" },
              { noteName: "F#" },
            ],
            instrument 
          });
          setTimeout(() => setActivePlayerIndex(undefined), 400);
        }}
        text="Ugly 🧟 (C and F#)"
      />
      <Paragraph>
        While other combinations sound beautiful 🌸?
      </Paragraph>
      <PlayerBlock
        isPlaying={activePlayerIndex === 1}
        onClick={() => {
          setActivePlayerIndex(1);
          playNotes({
            notes: [
              { noteName: "C" },
              { noteName: "E" },
            ],
            instrument
          });
          setTimeout(() => setActivePlayerIndex(undefined), 400);

        }}
        text="Beautiful 🌸 (C and E)"
      />
      <Paragraph>
        In music, when two notes are played at the same time, the result is called <b>Harmony</b>.
      </Paragraph>

    </>
  );
};

const Two = ({ instrument }) => {
  const [activePlayerIndex, setActivePlayerIndex] = useState(undefined);
  
  return (
    <>
      <HeaderText>
        Harmony
      </HeaderText>
      <SubHeader>
        Intervals
      </SubHeader>
      <Paragraph>
        The distance between two notes is called an <b>interval</b>.
      </Paragraph>
      <Paragraph>
        🌸 Intervals that sound pleasant are called <b>consonant</b>.
      </Paragraph>
      <Paragraph>
        🧟 Intervals that sound harsh or unpleasant are called <b>dissonant</b>.
      </Paragraph>
      
      <Paragraph>
        The two notes in an interval can be played the same time
      </Paragraph>
      <PlayerBlock
        isPlaying={activePlayerIndex === 0}
        onClick={() => {
          setActivePlayerIndex(0);
          playNotes({
            notes: [
              { noteName: "C" },
              { noteName: "G" },
            ],
            instrument
          });
          setTimeout(() => setActivePlayerIndex(undefined), 400);

        }}
        text="At the same time"
      />
      <Paragraph>
        or separately.
      </Paragraph>
      <PlayerBlock
        isPlaying={activePlayerIndex === 1}
        onClick={() => {
          setActivePlayerIndex(1);
          playNotes({
            notes: [
              { noteName: "C" },
            ],
            instrument
          });

          setTimeout(() =>{
            playNotes({
              notes: [
                { noteName: "G" },
              ],
              instrument
            });
            setActivePlayerIndex(undefined);
          }, 1000);

        }}
        text="Separately"
      />
    </>
  );
};

const OneTwo = ({ instrument }) => (
  <>
    <HeaderText>
      Music Building Blocks
    </HeaderText>
    <SubHeader>
      Octaves
    </SubHeader>
    <Paragraph>
      A very important and easy interval to remember is the <b>octave</b>
    </Paragraph>
    <Paragraph>
       An <b>octave</b> is the distance of 12 notes.
    </Paragraph>
    <Paragraph>
      In other words an octave is the distance between a note and the next repeating note of the same name.
    </Paragraph>
    <Paragraph>
      For example on the piano below the first A is an octave lower than the second one.
    </Paragraph>
    <Paragraph noMargin opaque>
      Play the two As below to get a feel for what an octave sounds like👇 🎹🔊
    </Paragraph>
    <PianoRollContainer
      notes={["A3", "Bb3", "B3", "C4", "C#4", "D4", "Eb4", "E4", "F4", "F#4", "G4", "Ab4", "A4"]}
      isPresentational
      notesHaveOctaves
      className
      onKeyClick={({ noteName, octave }) => playNote({ noteName, octave }, instrument)}
    />
  </>
);

const Three = ({ instrument }) => {
  const [activePlayerIndex, setActivePlayerIndex] = useState(undefined);
  return (
    <>
      <HeaderText>
        Harmony
      </HeaderText>
      <SubHeader>
        Chords
      </SubHeader>
      <Paragraph>
        When three or more notes play at the same time they form a <b>chord</b>.
      </Paragraph>
      <Paragraph>
        🌸 Much like Intervals, chords that sound pleasant are called <b>consonant</b>.
      </Paragraph>
      <Paragraph>
        🧟 Chords that sound harsh or unpleasant are called <b>dissonant</b>.
      </Paragraph>
      <Paragraph>
        For example, we can add a note to the intervals used in this section to create a chord.
      </Paragraph>
      <PlayerBlock
        isPlaying={activePlayerIndex === 0}
        onClick={() => {
          setActivePlayerIndex(0);
          playNotes({
            notes: [
              { noteName: "C" },
              { noteName: "F#" },
              { noteName: "F" }
            ],
            instrument
          });
          setTimeout(() => setActivePlayerIndex(undefined), 400);
        }}
        text="Ugly 🧟 (C, F#, F)"
      />
      <PlayerBlock
        isPlaying={activePlayerIndex === 1}
        onClick={() => {
          setActivePlayerIndex(1);
          playNotes({
            notes: [
              { noteName: "C" },
              { noteName: "E" },
              { noteName: "G" }
            ],
            instrument
          });
          setTimeout(() => setActivePlayerIndex(undefined), 400);

        }}
        text="Beautiful 🌸 (C, E, G)"
      />
    </>
  );
};

const lessons = [
  One,
  Two,
  OneTwo,
  Three
];

export default function IntervalsAndChords(props) {
  const { index } = props;

  return (
    <div>
      {lessons[index](props)}
    </div>
  );
}
