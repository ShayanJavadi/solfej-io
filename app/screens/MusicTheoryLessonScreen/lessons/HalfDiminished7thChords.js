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
        Half Diminished 7th Chords
      </HeaderText>
      <SubHeader>
        The formula
      </SubHeader>
      <Paragraph>
        We learned that a diminished chord consists of the root, a minor 3rd, and a tritone.
      </Paragraph>
      <Paragraph>
        What happens if we add a minor 7th to a diminished chord?
      </Paragraph>
      <Paragraph>
        You get a <b>Half Diminished 7th Chord</b>!
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
              { noteName: "F#" },
              { noteName: "Bb" }
            ],
            instrument
          });
          setTimeout(() => setActiveLoopIndex(undefined), 400);

        }}
        text="Half Diminished 7th Chord"
      />
      <Paragraph>
        Visually it looks like:
      </Paragraph>
      <PianoRollContainer
        notes={TWELVE_TONE_NOTES}
        whiteList={["C", "E", "F#", "Bb"]}
        isPresentational
        onKeyClick={noteName => playNote({ noteName }, instrument)}
      />
    </>
  );
};

const Two = () => (
  <>
    <HeaderText>
      Half Diminished 7th Chords
    </HeaderText>
    <SubHeader>
      Other Names
    </SubHeader>
    <Paragraph>
      The half diminished 7th chord is also commonly referred to as the following:
    </Paragraph>
    <Paragraph>
      <ul>
        <li>half-diminished chord</li>
        <li>minor seventh flat five chord/(m7b5)</li>
      </ul>
    </Paragraph>
  </>
);

const lessons = [
  One,
  Two,
];

export default function HalfDiminished7thChords(props) {
  const { index } = props;

  return (
    <div>
      {lessons[index](props)}
    </div>
  );
}
