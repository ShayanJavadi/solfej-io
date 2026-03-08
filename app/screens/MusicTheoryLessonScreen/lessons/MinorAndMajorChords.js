import React, { useState } from "react";
import HeaderText from "../../../common/components/HeaderText/HeaderText";
import SubHeader from "../../../common/components/SubHeader/SubHeader";
import Paragraph from "../../../common/components/Paragraph";
import Block from "../../../common/components/Block/Block";
import PlayerBlock from "../../../common/components/PlayerBlock/PlayerBlock";
import playNotes from "../../../util/noteUtils/playNotes";
import { TWELVE_TONE_NOTES } from "../../../common/consts/twelveToneConsts";
import PianoRollContainer from "../../../common/components/PianoRollContainer";
import playNote from "../../../util/noteUtils/playNote";

const One = ({ instrument }) => {
  const [activeLoopIndex, setActiveLoopIndex] = useState(undefined);

  return (
    <>
      <HeaderText>
        Minor & Major Chords
      </HeaderText>
      <SubHeader>
        Chords
      </SubHeader>
      <Paragraph>
        2 notes makes an interval.
      </Paragraph>
      <Paragraph>
        What happens if we play more than 2 notes at the same time? 🤔
      </Paragraph>
      <Paragraph>
        You get a <b>chord</b>!
      </Paragraph>
      <Paragraph>
        The most frequently encountered chords are <b>triads</b>.
      </Paragraph>
      <Paragraph>
        Here's an example:
      </Paragraph>
      <PlayerBlock
        isPlaying={activeLoopIndex === 0}
        onClick={() => {
          setActiveLoopIndex(0);
          playNotes({
            notes: [
              { noteName: "E" },
              { noteName: "G" },
              { noteName: "A" },
            ],
            instrument
          });
          setTimeout(() => setActiveLoopIndex(undefined), 400);

        }}
        text="Triad"
      />
    </>

  );
};

const Two = ({ instrument }) => {
  const [activeLoopIndex, setActiveLoopIndex] = useState(undefined);

  return (
    <>
      <HeaderText>
        Minor & Major Chords
      </HeaderText>
      <SubHeader>
        Triads
      </SubHeader>
      <Paragraph>
        These chords are called triads because they consist of three notes:
      </Paragraph>
      <Block>
        <Paragraph>
          👉 The root note
        </Paragraph>
        <Paragraph>
          👉 An interval a 3rd above the root note
        </Paragraph>
        <Paragraph>
          👉 An interval a 5th above the root note
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
        Minor & Major Chords
      </HeaderText>
      <SubHeader>
        C Major triad
      </SubHeader>
      <Paragraph>
        With that knowledge in mind, a C Major triad is made up of:
      </Paragraph>
      <Block>
        <Paragraph>
          👉 The root note <b>C</b>
        </Paragraph>
        <Paragraph>
          👉 The major 3rd (4 half steps) above C,  <b>E</b>
        </Paragraph>
        <Paragraph>
          👉 The perfect 5th (7 half steps) above C, <b>G</b>
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
              { noteName: "C" },
              { noteName: "E" },
              { noteName: "G" },
            ],
            instrument
          });
          setTimeout(() => setActiveLoopIndex(undefined), 400);

        }}
        text="C Major Triad"
      />

      <Paragraph>
        Visually it looks like:
      </Paragraph>
      <PianoRollContainer
        notes={TWELVE_TONE_NOTES}
        whiteList={["C", "E", "G"]}
        isPresentational
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
        Minor & Major Chords
      </HeaderText>
      <SubHeader>
        C Minor triad
      </SubHeader>
      <Paragraph>
        If we wanted a C minor triad, what would change?
      </Paragraph>
      <Paragraph>
        Then it would go like this:
      </Paragraph>
      <Block>
        <Paragraph>
          👉 The root note C
        </Paragraph>
        <Paragraph>
          👉 The minor 3rd (3 half steps) above C,  <b>E♭</b>
        </Paragraph>
        <Paragraph>
          👉 The perfect 5th (7 half steps) above C, <b>G</b>
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
              { noteName: "C" },
              { noteName: "Eb" },
              { noteName: "G" },
            ],
            instrument
          });
          setTimeout(() => setActiveLoopIndex(undefined), 400);

        }}
        text="C Minor Triad"
      />

      <Paragraph>
        Visually it looks like:
      </Paragraph>
      <PianoRollContainer
        notes={TWELVE_TONE_NOTES}
        whiteList={["C", "Eb", "G"]}
        isPresentational
        onKeyClick={noteName => playNote({ noteName }, instrument)}
      />
    </>
  );
};

const Five = () => (
  <>
    <HeaderText>
      Minor & Major Chords
    </HeaderText>
    <SubHeader>
      Chord naming
    </SubHeader>
    <Paragraph>
      From what we just learned we can infer that triads are named with the following formula:
    </Paragraph>
    <Block>
      <Paragraph>
        👉 The root note determines the first part of the name.
      </Paragraph>
      <Paragraph>
        👉 The 3rd interval determines the second part of the name.
      </Paragraph>
      <Paragraph>
        👉 So a triad with a root note of E and a major 3rd is an E major triad.
      </Paragraph>
    </Block>
    <Paragraph>
      ⚠️ Chord naming can be confusing. It's okay to not get the whole picture yet!
    </Paragraph>
    <Paragraph>
      We'll be breaking it down piece by piece for you 😊
    </Paragraph>
  </>
);

const lessons = [
  One,
  Two,
  Three,
  Four,
  Five
];

export default function MinorAndMajorChords(props) {
  const { index } = props;

  return (
    <div>
      {lessons[index](props)}
    </div>
  );
}
