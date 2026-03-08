import React, { useState } from "react";
import SubHeader from "../../../common/components/SubHeader/SubHeader";
import HeaderText from "../../../common/components/HeaderText/HeaderText";
import Paragraph from "../../../common/components/Paragraph";
import Block from "../../../common/components/Block/Block";
import { bold } from "ansi-colors";
import PianoRoll from "../../../common/components/PianoRoll";
import { TWELVE_TONE_NOTES } from "../../../common/consts/twelveToneConsts";
import PianoRollContainer from "../../../common/components/PianoRollContainer";
import playNote from "../../../util/noteUtils/playNote";
import PlayerBlock from "../../../common/components/PlayerBlock/PlayerBlock";
import playNotes from "../../../util/noteUtils/playNotes";

const Two = ({ instrument }) => {
  const [activeLoopIndex, setActiveLoopIndex] = useState(undefined);

  return (
    <>
      <HeaderText>
        Sharps and Flats
      </HeaderText>
      <SubHeader>
        ♯ and ♭
      </SubHeader>
      <Paragraph>
        A note can be in 3 different states.
      </Paragraph>
      <Block>
        <Paragraph>
          👉 Flat: A♭
        </Paragraph>
        <Paragraph>
          👉 Natural: A
        </Paragraph>
        <Paragraph>
          👉 Sharp: A♯
        </Paragraph>
      </Block>
      <Paragraph>
        Here's how each one sounds like
      </Paragraph>
      <PlayerBlock
        isPlaying={activeLoopIndex === 0}
        onClick={() => {
          setActiveLoopIndex(0);

          playNotes({
            notes: [
              { noteName: "Ab" },
            ],
            instrument
          });
          setTimeout(() => setActiveLoopIndex(undefined), 400);

        }}
        text="A♭"
      />
      <PlayerBlock
        isPlaying={activeLoopIndex === 1}
        onClick={() => {
          setActiveLoopIndex(1);
          playNotes({
            notes: [
              { noteName: "A" },
            ],
            instrument
          });
          setTimeout(() => setActiveLoopIndex(undefined), 400);

        }}
        text="A"
      />
      <PlayerBlock
        isPlaying={activeLoopIndex === 2}
        onClick={() => {
          setActiveLoopIndex(2);

          playNotes({
            notes: [
              { noteName: "A#" },
            ],
            instrument
          });
          setTimeout(() => setActiveLoopIndex(undefined), 400);

        }}
        text="A♯"
      />
    </>
  );
};

const Three = ({ instrument }) => {
  
  return (
    <>
      <HeaderText>
        Sharps and Flats
      </HeaderText>
      <SubHeader>
        ♯ and ♭ (Continued)
      </SubHeader>
      <Paragraph>
        <b>Naturals</b> are regular notes like A.
      </Paragraph>
      <Paragraph>
        <b>Sharps (Denoted with ♯)</b> are 1 note higher than the natural letter it uses.
      </Paragraph>
      <Block>
        <Paragraph isCentered>
          A♯ <b>(pronounced A sharp)</b> is 1 note higher than A
        </Paragraph>
      </Block>
      <Paragraph>
        <b>Flats (denoted with ♭)</b> are 1 note lower than the natural letter it uses.
      </Paragraph>
      <Block>
        <Paragraph isCentered>
          A♭ <b>(pronounced A flat)</b> is 1 note lower than A.
        </Paragraph>
      </Block>

    </>
  );
};

const Four = ({ instrument }) => (
  <>
    <HeaderText>
      Music Building Blocks
    </HeaderText>
    <SubHeader addBottomPadding>
      Musical Alphabet with ♯'s and ♭'s
    </SubHeader>
    <Paragraph>
      After taking the sharps and flats into account, our new musical alphabet becomes the following <b>12</b> notes:
    </Paragraph>
    <PianoRollContainer
      notes={["A3", "Bb3", "B3", "C4", "C#4", "D4", "Eb4", "E4", "F4", "F#4", "G4", "Ab4", ""]}
      notesHaveOctaves
      isPresentational
      pianoInstrument={instrument}
      onKeyClick={({ noteName, octave }) => playNote({ noteName, octave }, instrument)}
    />
    <Paragraph>
      <b>Wait what? where's C♭? 🤔?!</b>
    </Paragraph>
    <Paragraph>
      Don't worry It's there, it's B!
    </Paragraph>
  </>
);

const Five = ({ instrument }) => (
  <>
    <HeaderText>
      Sharps and Flats
    </HeaderText>
    <SubHeader>
      Enharmonic Equivalents
    </SubHeader>
    <Paragraph>
      In a musical context, an enharmonic equivalent is a note, or musical concept, that is equivalent to some other note, or musical concept.
    </Paragraph>
    <Paragraph>
      However they have different names.
 
    </Paragraph>
    <Block>
      <Paragraph>
        Therefore, C♭ is the enharmonic equivalent of B.
      </Paragraph>
    </Block>
  </>
);

const Six = ({ instrument }) => (
  <>
    <HeaderText>
      Sharps and Flats
    </HeaderText>
    <SubHeader addBottomPadding>
      Enharmonic Equivalents (Continued)
    </SubHeader>

    <Paragraph>
     C♭ is just one note lower than C.
    </Paragraph>
    <Paragraph>
       This is easily displayed on a piano.  What's one note lower than C on the piano? B!
    </Paragraph>
    <PianoRollContainer
      notes={["A3", "Bb3", "B3", "C4", "C#4", "D4", "Eb4", "E4", "F4", "F#4", "G4", "Ab4", "A4"]}
      notesHaveOctaves
      isPresentational
      hideBlackKeyNames
      whiteList={["C4", "B3"]}
      whiteListHasOctaves
      onKeyClick={({ noteName, octave }) => playNote({ noteName, octave }, instrument)}
    />
    <Paragraph>
      This also happens between E and F.
    </Paragraph>
    <Paragraph>
      Notice how F♭ is E.
    </Paragraph>
    <PianoRollContainer
      notes={["A3", "Bb3", "B3", "C4", "C#4", "D4", "Eb4", "E4", "F4", "F#4", "G4", "Ab4", "A4"]}
      notesHaveOctaves
      isPresentational
      hideBlackKeyNames
      whiteList={["E4", "F4"]}
      whiteListHasOctaves
      onKeyClick={({ noteName, octave }) => playNote({ noteName, octave }, instrument)}
    />
    <Paragraph>
      It's a bit confusing, but hang in there. It'll make more sense in the following lessons 😊.
    </Paragraph>
  </>
);

const lessons = [
  Two,
  Three,
  Four,
  Five,
  Six
];

export default function SharpsAndFlats(props) {
  const { index } = props;

  return lessons[index](props);
}
