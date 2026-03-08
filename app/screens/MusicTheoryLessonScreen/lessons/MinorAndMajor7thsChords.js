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
        Minor & Major 7th Chords
      </HeaderText>
      <SubHeader>
        Minor 7th Chords
      </SubHeader>
      <Paragraph>
        What happens if we add a minor 7th to a minor triad?
      </Paragraph>
      <Paragraph>
        You get a <b>minor 7th chord</b>!
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
              { noteName: "Bb" },
            ],
            instrument
          });
          setTimeout(() => setActiveLoopIndex(undefined), 400);

        }}
        text="Minor 7th Chord"
      />
      <Paragraph>
        Visually it looks like:
      </Paragraph>
      <PianoRollContainer
        notes={TWELVE_TONE_NOTES}
        whiteList={["C", "Eb", "G", "Bb"]}
        isPresentational
        onKeyClick={noteName => playNote({ noteName }, instrument)}
      />
    </>
  );
};

const Two = () => (
  <>
    <HeaderText>
      Minor & Major 7th Chords
    </HeaderText>
    <SubHeader>
      Minor 7th Chord Tonality
    </SubHeader>
    <Paragraph>
      Unlike minor/major 6th chords (where they both include a major 6th), minor 7th chords <b>DO</b> include a minor 7th 
    </Paragraph>
  </>
);

const Three = ({ instrument }) => {
  const [activeLoopIndex, setActiveLoopIndex] = useState(undefined);

  return (
    <>
      <HeaderText>
        Minor & Major 7th Chords
      </HeaderText>
      <SubHeader>
        Major 7th Chords
      </SubHeader>
      <Paragraph>
        We learned that a minor triad + a minor 7th makes a minor 7th chord.
      </Paragraph>
      <Paragraph>
        What happens if we add a major 7th to a major triad?
      </Paragraph>
      <Paragraph>
        You get a <b>major 7th chord</b>!
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
              { noteName: "B" },
            ],
            instrument
          });
          setTimeout(() => setActiveLoopIndex(undefined), 400);

        }}
        text="Major 7th Chord"
      />
      <Paragraph>
        Visually it looks like:
      </Paragraph>
      <PianoRollContainer
        notes={TWELVE_TONE_NOTES}
        whiteList={["C", "E", "G", "B"]}
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

export default function MinorAndMajor7thsChords(props) {
  const { index } = props;

  return (
    <div>
      {lessons[index](props)}
    </div>
  );
}
