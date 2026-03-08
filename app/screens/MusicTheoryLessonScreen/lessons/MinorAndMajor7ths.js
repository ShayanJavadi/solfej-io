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
        Minor & Major 7ths
      </HeaderText>
      <SubHeader>
        Minor 7th
      </SubHeader>
      <Paragraph>
        The <b>minor 7th</b> is an interval that can be consonant or dissonant depending on the context.
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
              { noteName: "Bb" },
            ],
            instrument
          });
          setTimeout(() => setActiveLoopIndex(undefined), 400);

        }}
        text="Minor 7th"
      />
      <Paragraph>
        A minor 7th is the distance of 10 half steps (10 notes).
      </Paragraph>
      <Paragraph>
        For example, C and Bb make a minor 7th together.
      </Paragraph>
      <PianoRollContainer
        notes={["C", "C#", "", "Eb", "", "F", "F#", "", "Ab", "", "Bb", ""]}
        whiteList={["C", "Bb"]}
        isPresentational
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
        Minor & Major 7ths
      </HeaderText>
      <SubHeader addBottomPadding>
        Ways to recognize minor 7th
      </SubHeader>
      <Paragraph>
        The first 2 notes of the following songs create a minor 7th:
      </Paragraph>
      <Block>
        <Paragraph>
          👉 "Star Trek Main Theme"
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
        Minor & Major 7ths
      </HeaderText>
      <SubHeader>
        Major 7th
      </SubHeader>
      <Paragraph>
        The <b>major 7th</b> is sharp dissonant interval. It's the interval right before the octave.
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
              { noteName: "B" },
            ],
            instrument
          });
          setTimeout(() => setActiveLoopIndex(undefined), 400);

        }}
        text="Major 7th"
      />
      <Paragraph>
        A major 7th is the distance of 11 half steps (11 notes).
      </Paragraph>
      <Paragraph>
        For example, C and B make a major 7th together.
      </Paragraph>
      <PianoRollContainer
        notes={["C", "C#", "", "Eb", "", "", "F#", "", "Ab", "", "Bb", "B"]}
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
        Minor & Major 7ths
      </HeaderText>
      <SubHeader addBottomPadding>
        Ways to recognize major 7ths
      </SubHeader>
      <Paragraph>
        The first 2 notes of the following songs create a major 7th:
      </Paragraph>
      <Block>
        <Paragraph>
          👉 "(Somewhere) Over The Rainbow"
        </Paragraph>
      </Block>
    </>
  );
};

const lessons = [
  One,
  Two,
  Three,
  Four,

];

export default function MinorAndMajor7ths(props) {
  const { index } = props;

  return (
    <div>
      {lessons[index](props)}
    </div>
  );
}
