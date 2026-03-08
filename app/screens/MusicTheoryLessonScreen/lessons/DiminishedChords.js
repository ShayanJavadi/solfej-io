import React, { useState } from "react";
import HeaderText from "../../../common/components/HeaderText/HeaderText";
import SubHeader from "../../../common/components/SubHeader/SubHeader";
import Paragraph from "../../../common/components/Paragraph";
import Block from "../../../common/components/Block/Block";
import PlayerBlock from "../../../common/components/PlayerBlock/PlayerBlock";
import playNotes from "../../../util/noteUtils/playNotes";
import PianoRollContainer from "../../../common/components/PianoRollContainer";
import playNote from "../../../util/noteUtils/playNote";

const One = ({ instrument }) => {
  const [activeLoopIndex, setActiveLoopIndex] = useState(undefined);

  return (
    <>
      <HeaderText>
        The Diminished Chord
      </HeaderText>
      <SubHeader>
        Spooky triad!
      </SubHeader>
      <Paragraph>
        We learned that minor triads have a perfect 5th in them.
      </Paragraph>
      <Paragraph>
        But what if we replace that 5th with a tritone? 🤔
      </Paragraph>
      <Paragraph>
        You get a <b>diminished triad</b>!
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
            ],
            instrument
          });
          setTimeout(() => setActiveLoopIndex(undefined), 400);

        }}
        text="Dimished Triad"
      />
    </>
  );
};

const Two = () => (
  <>
    <HeaderText>
      The Diminished Chord
    </HeaderText>
    <SubHeader>
      Diminished Triad
    </SubHeader>
    <Paragraph>
      Like the other 2 triads we learned about, diminished triads are made up of 3 parts:
    </Paragraph>
    <Block>
      <Paragraph>
        👉 The root note
      </Paragraph>
      <Paragraph>
        👉 A minor 3rd
      </Paragraph>
      <Paragraph>
        👉 A tritone (no perfect 5th!)
      </Paragraph>
    </Block>
  </>
);

const Three = ({ instrument }) => {
  const [activeLoopIndex, setActiveLoopIndex] = useState(undefined);

  return (
    <>
      <HeaderText>
        The Diminished Chord
      </HeaderText>
      <SubHeader>
        B Dimished Triad
      </SubHeader>
      <Paragraph>
        With that knowledge in mind, a B diminished triad is made up of:
      </Paragraph>
      <Block>
        <Paragraph>
          👉 The root note <b>B</b>
        </Paragraph>
        <Paragraph>
          👉 The minor 3rd (3 half steps) above B, <b>D</b>
        </Paragraph>
        <Paragraph>
          👉 The tritone (6 half steps) above B, <b>F</b>
        </Paragraph>
      </Block>
      <Paragraph>
        Here's what it sounds like:
      </Paragraph>
      <PlayerBlock
        isPlaying={activeLoopIndex === 0}
        onClick={() => {
          setActiveLoopIndex(0);
          playNotes({
            notes: [
              { noteName: "B" },
              { noteName: "D" },
              { noteName: "F" },
            ],
            instrument
          });
          setTimeout(() => setActiveLoopIndex(undefined), 400);

        }}
        text="B Diminished Triad"
      />

      <Paragraph>
        Visually it looks like:
      </Paragraph>
      <PianoRollContainer
        notes={["B2","C3", "C#3", "D3", "Eb3", "E3", "F3", "F#3", "G3", "Ab3", "A3", "Bb3"]}
        whiteList={["B2", "D3", "F3"]}
        isPresentational
        onKeyClick={({ noteName, octave }) => playNote({ noteName, octave }, instrument)}
        notesHaveOctaves
        whiteListHasOctaves
      />
    </>
  );
};

const lessons = [
  One,
  Two,
  Three,
];

export default function DiminishedChords(props) {
  const { index } = props;

  return (
    <div>
      {lessons[index](props)}
    </div>
  );
}
