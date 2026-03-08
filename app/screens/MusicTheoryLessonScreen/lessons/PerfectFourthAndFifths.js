import React, { useState } from "react";
import Tone from "tone";
import HeaderText from "../../../common/components/HeaderText/HeaderText";
import SubHeader from "../../../common/components/SubHeader/SubHeader";
import Paragraph from "../../../common/components/Paragraph";
import Block from "../../../common/components/Block/Block";
import playNote from "../../../util/noteUtils/playNote";
import playNotes from "../../../util/noteUtils/playNotes";
import PlayerBlock from "../../../common/components/PlayerBlock/PlayerBlock";
import PianoRollContainer from "../../../common/components/PianoRollContainer";

const One = ({ instrument }) => {
  const [activeLoopIndex, setActiveLoopIndex] = useState(undefined);

  return (
    <>
      <HeaderText>
        Perfect Fourth And Fifths
      </HeaderText>
      <SubHeader>
        Perfect 4th
      </SubHeader>
      <Paragraph>
        The <b> perfect 4th</b> is an interval that can be consonant or dissonant depending on the context.
      </Paragraph>
      <Paragraph>
        It sounds like this:
      </Paragraph>
      <PlayerBlock
        isPlaying={activeLoopIndex === 0}
        onClick={() => {
          setActiveLoopIndex(0);
          Tone.Transport.cancel(0);

          playNotes({
            notes: [
              { noteName: "C" },
              { noteName: "F" },
            ],
            instrument
          });
          setTimeout(() => setActiveLoopIndex(undefined), 400);

        }}
        text="Perfect 4th"
      />
      <Paragraph>
        A perfect 4th is the distance of 5 half steps (5 notes).
      </Paragraph>
      <Paragraph>
        For example, C and F make a perfect 4th together.
      </Paragraph>
      <PianoRollContainer
        notes={["C", "C#", "", "Eb", "", "F", "F#", "", "Ab", "", "Bb", ""]}
        isPresentational
        hideBlackKeyNames
        onKeyClick={noteName => playNote({ noteName }, instrument)}
      />
    </>
  );
};

const Two = ({ instrument }) => {
  const [activeLoopIndex, setActiveLoopIndex] = useState(undefined);

  return (
    <>
      <HeaderText>
        Perfect Fourth And Fifths
      </HeaderText>
      <SubHeader addBottomPadding>
        Ways to recognize perfect 4th
      </SubHeader>
      <Paragraph>
        The first 2 notes of the following songs create a perfect 4th:
      </Paragraph>
      <Block>
        <Paragraph>
          👉 "Wedding Song"
        </Paragraph>
      </Block>
    </>
  );
};
    
const Three = ({ instrument }) => {
  const [activeLoopIndex, setActiveLoopIndex] = useState(undefined);

  return (
    <>
      <HeaderText>
        Perfect Fourth And Fifths
      </HeaderText>
      <SubHeader>
        Perfect 5th
      </SubHeader>
      <Paragraph>
        The <b> perfect 5th</b> is a consonant and victorious sounding interval.
      </Paragraph>
      <Paragraph>
        It sounds like this:
      </Paragraph>
      <PlayerBlock
        isPlaying={activeLoopIndex === 0}
        onClick={() => {
          setActiveLoopIndex(0);
          Tone.Transport.cancel(0);

          playNotes({
            notes: [
              { noteName: "C" },
              { noteName: "G" },
            ],
            instrument
          });
          setTimeout(() => setActiveLoopIndex(undefined), 400);

        }}
        text="Perfect 5th"
      />
      <Paragraph>
        A perfect 5th is the distance of 7 half steps (7 notes).
      </Paragraph>
      <Paragraph>
        For example, C and G make a perfect 5th together.
      </Paragraph>
      <PianoRollContainer
        notes={["C", "C#", "", "Eb", "", "", "F#", "G", "Ab", "", "Bb", ""]}
        isPresentational
        hideBlackKeyNames
        onKeyClick={noteName => playNote({ noteName }, instrument)}
      />
    </>
  );
};

const Four = ({ instrument }) => {
  const [activeLoopIndex, setActiveLoopIndex] = useState(undefined);

  return (
    <>
      <HeaderText>
        Perfect Fourth And Fifths
      </HeaderText>
      <SubHeader addBottomPadding>
        Ways to recognize perfect 5ths
      </SubHeader>
      <Paragraph>
        The first 2 notes of the following songs create a perfect 5th:
      </Paragraph>
      <Block>
        <Paragraph>
          👉 "Star Wars Theme Song"
        </Paragraph>
      </Block>
    </>
  );
};

const lessons = [
  One,
  Two,
  Three,
  Four
];

export default function PerfectFourthAndFifths(props) {
  const { index } = props;

  return (
    <div>
      {lessons[index](props)}
    </div>
  );
}
