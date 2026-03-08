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
        Dominant 7th Chord
      </HeaderText>
      <SubHeader>
        The formula
      </SubHeader>
      <Paragraph>
        We learned that a major chord consists of the root, a major 3rd, and a perfect 5th.
      </Paragraph>
      <Paragraph>
        What happens if we add a minor 7th to a major chord?
      </Paragraph>
      <Paragraph>
        You get a <b>Dominant 7th chord</b>!
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
              { noteName: "Bb" }
            ],
            instrument
          });
          setTimeout(() => setActiveLoopIndex(undefined), 400);

        }}
        text="Dominant 7th Chord"
      />
      <Paragraph>
        Visually it looks like:
      </Paragraph>
      <PianoRollContainer
        notes={TWELVE_TONE_NOTES}
        whiteList={["C", "E", "G", "Bb"]}
        isPresentational
        onKeyClick={noteName => playNote({ noteName }, instrument)}
      />
    </>
  );
};

const lessons = [
  One,
];

export default function Dominant7thChord(props) {
  const { index } = props;

  return (
    <div>
      {lessons[index](props)}
    </div>
  );
}
