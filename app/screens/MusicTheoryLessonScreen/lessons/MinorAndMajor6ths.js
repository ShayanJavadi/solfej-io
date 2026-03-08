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
        Minor & Major 6ths
      </HeaderText>
      <SubHeader>
        Minor 6th
      </SubHeader>
      <Paragraph>
        The <b> minor 6th</b> is an interval that can be consonant or dissonant depending on the context.
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
              { noteName: "Ab" },
            ],
            instrument
          });
          setTimeout(() => setActiveLoopIndex(undefined), 400);

        }}
        text="Minor 6th"
      />
      <Paragraph>
        A minor 6th is the distance of 8 half steps (8 notes).
      </Paragraph>
      <Paragraph>
        For example, C and Ab make a minor 6th together.
      </Paragraph>
      <PianoRollContainer
        notes={["C", "C#", "", "Eb", "", "F", "F#", "", "Ab", "", "Bb", ""]}
        whiteList={["C", "Ab"]}
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
        Minor & Major 6ths
      </HeaderText>
      <SubHeader addBottomPadding>
        Ways to recognize minor 6th
      </SubHeader>
      <Paragraph>
        The first 2 notes of the following songs create a minor 6th:
      </Paragraph>
      <Block>
        <Paragraph>
          👉 "The Entertainer"
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
        Minor & Major 6ths
      </HeaderText>
      <SubHeader>
        Major 6th
      </SubHeader>
      <Paragraph>
        The <b>major 6th</b> is an airy and open sounding interval.
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
              { noteName: "A" },
            ],
            instrument
          });
          setTimeout(() => setActiveLoopIndex(undefined), 400);

        }}
        text="Major 6th"
      />
      <Paragraph>
        A major 6th is the distance of 9 half steps (9 notes).
      </Paragraph>
      <Paragraph>
        For example, C and A make a major 6th together.
      </Paragraph>
      <PianoRollContainer
        notes={["C", "C#", "", "Eb", "", "", "F#", "", "Ab", "A", "Bb", ""]}
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
        Minor & Major 6ths
      </HeaderText>
      <SubHeader addBottomPadding>
        Ways to recognize major 6ths
      </SubHeader>
      <Paragraph>
        The first 2 notes of the following songs create a major 6th:
      </Paragraph>
      <Block>
        <Paragraph>
          👉 "NBC Theme Song"
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

export default function MinorAndMajor6ths(props) {
  const { index } = props;

  return (
    <div>
      {lessons[index](props)}
    </div>
  );
}
