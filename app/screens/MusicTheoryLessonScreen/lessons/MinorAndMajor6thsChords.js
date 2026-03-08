import React, { useState } from "react";
import HeaderText from "../../../common/components/HeaderText/HeaderText";
import SubHeader from "../../../common/components/SubHeader/SubHeader";
import Paragraph from "../../../common/components/Paragraph";
import Block from "../../../common/components/Block/Block";
import PlayerBlock from "../../../common/components/PlayerBlock/PlayerBlock";
import playNotes from "../../../util/noteUtils/playNotes";
import PianoRollContainer from "../../../common/components/PianoRollContainer";
import playNote from "../../../util/noteUtils/playNote";
import { TWELVE_TONE_NOTES } from "../../../common/consts/twelveToneConsts";

const One = ({ instrument }) => {
  const [activeLoopIndex, setActiveLoopIndex] = useState(undefined);

  return (
    <>
      <HeaderText>
        Minor & Major 6th Chords
      </HeaderText>
      <SubHeader>
        Minor 6th Chords
      </SubHeader>
      <Paragraph>
        We learned that triads are chords that are three notes.
      </Paragraph>
      <Paragraph>
        There's no limit on how many different notes a chord can have.
      </Paragraph>
      <Paragraph>
        What if we added a major 6th to a minor triad?
      </Paragraph>
      <Paragraph>
        You get a <b>minor 6th chord</b>!
      </Paragraph>
      <Paragraph>
        It sounds like this:
      </Paragraph>
      <PlayerBlock
        isPlaying={activeLoopIndex === 0}
        onClick={() => {
          setActiveLoopIndex(0);

          playNotes({
            notes: [
              { noteName: "C" },
              { noteName: "Eb" },
              { noteName: "G" },
              { noteName: "A" },
            ],
            instrument
          });
          setTimeout(() => setActiveLoopIndex(undefined), 400);

        }}
        text="Minor 6th Chord"
      />
      <Paragraph>
        Visually it looks like:
      </Paragraph>
      <PianoRollContainer
        notes={TWELVE_TONE_NOTES}
        whiteList={["C", "Eb", "G", "A"]}
        isPresentational
        onKeyClick={noteName => playNote({ noteName }, instrument)}
      />
    </>
  );
};

const Two = () => (
  <>
    <HeaderText>
      Minor & Major 6th Chords
    </HeaderText>
    <SubHeader>
      Minor 6th Chord Tonality
    </SubHeader>
    <Paragraph>
      You might have caught that a Minor 6th chord contains a <b>Major 6th</b> interval.
    </Paragraph>
    <Paragraph>
      This is because the minor triad in a minor 6th chord is what gives it the minor tonality, not the 6th interval.
    </Paragraph>

  </>
);

const Three = ({ instrument }) => {
  const [activeLoopIndex, setActiveLoopIndex] = useState(undefined);

  return (
    <>
      <HeaderText>
        Minor & Major 6th Chords
      </HeaderText>
      <SubHeader>
        Major 6th Chords
      </SubHeader>
      <Paragraph>
        We learned that a minor triad + a major 6th makes a minor 6th chord.
      </Paragraph>
      <Paragraph>
        What if we added a major 6th to a major triad?
      </Paragraph>
      <Paragraph>
        You get a <b>major 6th chord</b>!
      </Paragraph>
      <Paragraph>
        It sounds like this:
      </Paragraph>
      <PlayerBlock
        isPlaying={activeLoopIndex === 0}
        onClick={() => {
          setActiveLoopIndex(0);

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
        text="Major 6th Chord"
      />
      <Paragraph>
        Visually it looks like:
      </Paragraph>
      <PianoRollContainer
        notes={TWELVE_TONE_NOTES}
        whiteList={["C", "E", "G", "A"]}
        isPresentational
        onKeyClick={noteName => playNote({ noteName }, instrument)}
      />
    </>
  );
};

const lessons = [
  One,
  Two,
  Three,
];

export default function MinorAndMajor6thsChords(props) {
  const { index } = props;

  return (
    <div>
      {lessons[index](props)}
    </div>
  );
}
