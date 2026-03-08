import React, { useState } from "react";
import Tone from "tone";
import HeaderText from "../../../common/components/HeaderText/HeaderText";
import SubHeader from "../../../common/components/SubHeader/SubHeader";
import Paragraph from "../../../common/components/Paragraph";
import Block from "../../../common/components/Block/Block";
import PlayerBlock from "../../../common/components/PlayerBlock/PlayerBlock";
import { TWELVE_TONE_NOTES } from "../../../common/consts/twelveToneConsts";
import PianoRollContainer from "../../../common/components/PianoRollContainer";
import playNote from "../../../util/noteUtils/playNote";
import playNotes from "../../../util/noteUtils/playNotes";

const One = () => (
  <>
    <HeaderText>
      Minor/Major 3rd
    </HeaderText>
    <SubHeader>
      Two common Intervals
    </SubHeader>
    <Paragraph>
      In the next lessons we'll learn more about intervals.
    </Paragraph>
    <Paragraph>
      We'll then tie this knowledge back to chords and the major scale.
    </Paragraph>
    <Block>
      <Paragraph isCentered>
        🥳 congrats on making it this far!
      </Paragraph>
    </Block>
    <Paragraph>
      Let's get started with the minor 3rd 👉
    </Paragraph>

  </>
);

const Two = ({ instrument }) => {
  const [activeLoopIndex, setActiveLoopIndex] = useState(undefined);

  return (
    <>
      <HeaderText>
        Minor/Major 3rd
      </HeaderText>
      <SubHeader>
        Minor 3rd
      </SubHeader>
      <Paragraph>
        The <b> minor 3rd</b> is a mildly consonant interval.
      </Paragraph>
      <Paragraph>
        It sounds like this:
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
              { noteName: "Eb" },
            ],
            instrument
          });
          setTimeout(() => setActiveLoopIndex(undefined), 400);

        }}
        text="Minor 3rd"
      />
      <Paragraph>
        A minor 3rd is the distance of 3 half steps (3 notes).
      </Paragraph>
      <Paragraph>
        For example C and E♭ make a minor 3rd together.
      </Paragraph>
      <PianoRollContainer
        notes={["C", "C#", "", "Eb", "", "", "F#", "", "Ab", "", "Bb", ""]}
        whiteList={["C", "Eb"]}
        isPresentational
        onKeyClick={noteName => playNote({ noteName }, instrument)}
      />
    </>
  );
};

const Three = ({ instrument }) => {
  const [activeLoopIndex, setActiveLoopIndex] = useState(undefined);

  return (
    <>
      <HeaderText>
        Minor/Major 3rd
      </HeaderText>
      <SubHeader addBottomPadding>
        Ways to recognize minor 3rds
      </SubHeader>
      <Paragraph>
        The first two notes of the following songs create a major 3rd:
      </Paragraph>
      <Block>
        <Paragraph>
          👉 Greensleeves"
        </Paragraph>
      </Block>
    </>
  );
};

const Four = ({ instrument }) => {
  const [activeLoopIndex, setActiveLoopIndex] = useState(undefined);

  return (
    <>
      <HeaderText>
        Minor/Major 3rd
      </HeaderText>
      <SubHeader>
        Major 3rd
      </SubHeader>
      <Paragraph>
        The <b> major 3rd</b> is a consonant and happy sounding interval.
      </Paragraph>
      <Paragraph>
        It sounds like this:
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
            ],
            instrument
          });
          setTimeout(() => setActiveLoopIndex(undefined), 400);

        }}
        text="Major 3rd"
      />
      <Paragraph>
        A major 3rd is the distance of 4 half steps (4 notes).
      </Paragraph>
      <Paragraph>
        For example C and E make a major 3rd together.
      </Paragraph>
      <PianoRollContainer
        notes={["C", "C#", "", "Eb", "E", "", "F#", "", "Ab", "", "Bb", ""]}
        isPresentational
        hideBlackKeyNames
        onKeyClick={noteName => playNote({ noteName }, instrument)}
      />
    </>
  );
};

const Five = ({ instrument }) => {
  const [activeLoopIndex, setActiveLoopIndex] = useState(undefined);

  return (
    <>
      <HeaderText>
        Minor/Major 3rd
      </HeaderText>
      <SubHeader addBottomPadding>
        Ways to recognize major 3rds
      </SubHeader>
      <Paragraph>
        The first two notes of the following songs create a major 3rd:
      </Paragraph>
      <Block>
        <Paragraph>
          👉 "When the Saints Go Marching In"
        </Paragraph>
        <Paragraph>
          👉 "Kumbaya"
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
  Five,
];

export default function ExtendedChords(props) {
  const { index } = props;

  return (
    <div>
      {lessons[index](props)}
    </div>
  );
}
