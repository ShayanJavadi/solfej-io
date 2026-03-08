import React, { useEffect, useState } from "react";
import Block from "../../../common/components/Block/Block";
import HeaderText from "../../../common/components/HeaderText/HeaderText";
import Paragraph from "../../../common/components/Paragraph";
import PianoRollContainer from "../../../common/components/PianoRollContainer";
import SubHeader from "../../../common/components/SubHeader/SubHeader";
import playNote from "../../../util/noteUtils/playNote";

const One = ({ instrument }) => (
  <>
    <HeaderText>
      The Major Scale
    </HeaderText>
    <SubHeader>
      What is a scale? ⚖️🎹
    </SubHeader>
    <Paragraph>
      A scale is a selection of notes chosen from the available 12 notes.
    </Paragraph>
    <Paragraph>
      The most common scale is the <b>major scale</b>. The major scale has 7 notes in it.
    </Paragraph>
    <Paragraph>
      Every scale starts from a <b>root note</b>. This root note is arbitrary.
    </Paragraph>
    <Paragraph>
       For example, a C major scale has a root note of C.
    </Paragraph>
  </>
);

const Two = () => (
  <>
    <HeaderText>
      The Major Scale
    </HeaderText>
    <SubHeader>
      The Formula
    </SubHeader>
    <Paragraph>
      Each scale can be expressed in a generalized formula of whole/half steps.
    </Paragraph>
    <Paragraph>
      The formula to create a major scale is as follows:
    </Paragraph>
    <Block>
      <Paragraph isCentered>
        W W H W W W H
      </Paragraph>
    </Block>
    <Paragraph>
      Each W is a whole step. Each H is a half step.
    </Paragraph>

    <Paragraph>
      <b>Is this math? I'm confused 🤔!</b>
    </Paragraph>
    <Paragraph>
      Let's take a look at how we'd actually use this. It will make more sense with an example 👉
    </Paragraph>

  </>

);

const Three = ({ instrument  }) => {
  return (
    <>
      <HeaderText>
        The Major Scale
      </HeaderText>
      <SubHeader>
        C Major scale
      </SubHeader>
      <Paragraph>
        To create a C major scale we start at our root note <b className="yellow">C</b>.
      </Paragraph>
      <PianoRollContainer
        whiteList={["C4"]}
        whiteListHasOctaves
        highlightedNote="C4"
        notes={["C4", "C#4", "D4", "Eb4", "E4", "F4", "F#4", "G4", "Ab4", "A4", "Bb4", "B4", "C5"]}
        notesHaveOctaves
        isPresentational
        hideBlackKeyNames
        onKeyClick={({ noteName, octave }) => playNote({ noteName, octave }, instrument)}
      />
      <Paragraph>
        Now we use the major scale formula to get the rest of our notes. 👉
      </Paragraph>
    </>
  );
};

const Four = ({ instrument }) => {

  return (
    <>
      <HeaderText>
        The Major Scale
      </HeaderText>
      <SubHeader addBottomPadding>
        C Major scale (Continued)
      </SubHeader>
      <Paragraph>
        According to the formula our second note is a whole step <b className="yellow">(W)</b> higher than our root note.
      </Paragraph>
      <Paragraph>
        To get our second note of the scale we go a whole step (count two notes) higher from C, which gives us D.
      </Paragraph>
      <Block>
        <Paragraph isCentered>
          <b className="yellow">W</b> W H W W W H
        </Paragraph>
      </Block>
      <PianoRollContainer
        whiteList={["C4", "D4"]}
        whiteListHasOctaves
        highlightedNote="D4"
        notes={["C4", "C#4", "D4", "Eb4", "E4", "F4", "F#4", "G4", "Ab4", "A4", "Bb4", "B4", "C5"]}
        notesHaveOctaves
        isPresentational
        hideBlackKeyNames
        onKeyClick={({ noteName, octave }) => playNote({ noteName, octave }, instrument)}
      />
    </>
  );
};

const Five = ({ instrument }) => (
  <>
    <HeaderText>
      The Major Scale
    </HeaderText>
    <SubHeader addBottomPadding>
      C Major scale (Continued)
    </SubHeader>
    <Paragraph>
      We move up 1 letter in the formula and now we're at the second W.
    </Paragraph>
    <Paragraph>
      To continue we go a whole step higher from our last note D to get the third note of the scale E.
    </Paragraph>
    <Block>
      <Paragraph isCentered>
        W <b className="yellow">W</b> H W W W H
      </Paragraph>
    </Block>
    <PianoRollContainer
      whiteList={["C4", "D4", "E4"]}
      whiteListHasOctaves
      highlightedNote="E4"
      notes={["C4", "C#4", "D4", "Eb4", "E4", "F4", "F#4", "G4", "Ab4", "A4", "Bb4", "B4", "C5"]}
      notesHaveOctaves
      isPresentational
      hideBlackKeyNames
      onKeyClick={({ noteName, octave }) => playNote({ noteName, octave }, instrument)}

    />
  </>
);

const Six = ({ instrument }) => {
  const [activePlayerIndex, setActivePlayerIndex] = useState(2);
  const indexes = [1, 2, 3, 4, 5, 6];
  const formula = ["W", "W", "H", "W", "W", "W", "H"];

  useEffect(() => {
    const timer = setTimeout(() => {
      setActivePlayerIndex(activePlayerIndex === indexes.length - 1 ? 0 : activePlayerIndex + 1);
    }, 500);
    return () => clearTimeout(timer);
  }, [activePlayerIndex]);

  const getWhiteListNotes = activePlayerIndex => {
    switch (activePlayerIndex) {
    case 0:
      return ["C4", "D4", "E4",];
      break;
    case 1:
      return ["C4", "D4", "E4", "F4"];
      break;
    case 2:
      return ["C4", "D4", "E4", "F4", "G4"];
      break;
    case 3:
      return ["C4", "D4", "E4", "F4", "G4", "A4"];
      break;
    case 4:
      return ["C4", "D4", "E4", "F4", "G4", "A4", "B4"];
      break;
    case 5:
      return ["C4", "D4", "E4", "F4", "G4", "A4", "B4", "C5"];
      break;
    default:
      break;
    }
  };

  return (
    <>
      <HeaderText>
        The Major Scale
      </HeaderText>
      <SubHeader addBottomPadding>
        C Major scale (Continued)
      </SubHeader>
      <Paragraph>
        We now continue through the formula till we reach our root note completing the scale.
      </Paragraph>
      <Block>
        <Paragraph isCentered>
          {
            formula.map((step, index) => (
              index === indexes[activePlayerIndex] ?
                <b className="yellow" key={Math.random()}>{`${step} `}</b> :
                <span key={Math.random()}>{`${step} `}</span>
            ))
          }
        </Paragraph>
      </Block>
      <PianoRollContainer
        whiteList={getWhiteListNotes(activePlayerIndex)}
        whiteListHasOctaves
        notes={["C4", "C#4", "D4", "Eb4", "E4", "F4", "F#4", "G4", "Ab4", "A4", "Bb4", "B4", "C5"]}
        notesHaveOctaves
        highlightedNote={getWhiteListNotes(activePlayerIndex)[activePlayerIndex + 2]}
        isPresentational
        hideBlackKeyNames
        onKeyClick={({ noteName, octave }) => playNote({ noteName, octave }, instrument)}
      />
    </>
  );
};

const Seven = ({ instrument }) => (
  <>
    <HeaderText>
      The Major Scale
    </HeaderText>
    <SubHeader>
      White Keys
    </SubHeader>
    <Paragraph>
      Once we're done going through the formula we're left with:
    </Paragraph>
    <PianoRollContainer
      notes={["C4", "C#4", "D4", "Eb4", "E4", "F4", "F#4", "G4", "Ab4", "A4", "Bb4", "B4", "C5"]}
      notesHaveOctaves
      isPresentational
      hideBlackKeyNames
      onKeyClick={({ noteName, octave }) => playNote({ noteName, octave }, instrument)}
    />
    <Paragraph>
      C major includes all the white keys of the piano. It includes no sharps or flats!
    </Paragraph>
    <Paragraph>
      Don't worry if this is all still new or confusing! In the following lessons we'll learn about practical uses of a scale 😊
    </Paragraph>
  </>
);

const lessons = [
  One,
  Two,
  Three,
  Four,
  Five,
  Six,
  Seven
];

export default function MajorScale(props) {
  const { index } = props;

  return (
    <div>
      {lessons[index](props)}
    </div>
  );
}
