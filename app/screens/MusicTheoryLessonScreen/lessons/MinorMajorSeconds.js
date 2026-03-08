import React, { useState } from "react";
import HeaderText from "../../../common/components/HeaderText/HeaderText";
import SubHeader from "../../../common/components/SubHeader/SubHeader";
import Paragraph from "../../../common/components/Paragraph";
import Block from "../../../common/components/Block/Block";
import PianoRollContainer from "../../../common/components/PianoRollContainer";
import playNote from "../../../util/noteUtils/playNote";
import { TWELVE_TONE_NOTES } from "../../../common/consts/twelveToneConsts";
import PlayerBlock from "../../../common/components/PlayerBlock/PlayerBlock";
import playNotes from "../../../util/noteUtils/playNotes";
import ImageContent from "../../../common/components/ImageContent/ImageContent";
import StepImage from "../../../assets/images/step.png";

const One = ({ instrument }) => (
  <>
    <HeaderText>
      Whole/Half Steps
    </HeaderText>
    <SubHeader>
      Baby Steps
    </SubHeader>
    <Paragraph>
      We learned that an interval is the distance between 2 notes.
    </Paragraph>
    <Paragraph>
      The two smallest intervals in our music system are whole steps and half steps.
    </Paragraph>
    <Paragraph>
      We can use whole/half steps to explain more complex subjects/intervals.
    </Paragraph>
    <ImageContent src={StepImage} />
  </>
);

const OneTwo = ({ instrument }) => (
  <>
    <HeaderText>
      Whole/Half Steps
    </HeaderText>
    <SubHeader>
      Half Steps
    </SubHeader>
    <Paragraph>
      A half step is the distance of 1 note. For example, C♯ is a half step away from C.
    </Paragraph>
    <PianoRollContainer
      notes={TWELVE_TONE_NOTES}
      isPresentational
      whiteList={["C", "C#"]}
      className
      onKeyClick={(noteName) => playNote({ noteName }, instrument)}
    />
  </>
);

const OneThree = ({ instrument }) => (
  <>
    <HeaderText>
      Whole/Half Steps
    </HeaderText>
    <SubHeader>
      Whole Steps
    </SubHeader>
    <Paragraph>
      A whole step is the distance of 2 notes (2 Half Steps). For example, D is a whole step away from C.
    </Paragraph>
    <PianoRollContainer
      notes={TWELVE_TONE_NOTES}
      isPresentational
      whiteList={["C", "D"]}
      className
      onKeyClick={(noteName) => playNote({ noteName }, instrument)}
    />
  </>
);

const Two = () => (
  <>
    <HeaderText>
      Whole/Half Steps
    </HeaderText>
    <SubHeader>
      Major & Minor 2nds
    </SubHeader>
    <Paragraph>
      Half steps are commonly referred to as <b>minor 2nds</b>.
    </Paragraph>
    <Paragraph>
      Whole steps are commonly referred to as <b>major 2nds</b>.
    </Paragraph>

    <Paragraph>
      💡 Tip: All minor intervals are 1 half step smaller than their major counterparts.
    </Paragraph>
    <Paragraph>
      Even if we haven't learned about 3rd intervals, we know that a minor 3rd is a half step less than a major 3rd.
    </Paragraph>
  </>
);

const Three = () => (
  <>
    <HeaderText>
      Whole/Half Steps
    </HeaderText>
    <SubHeader addBottomPadding>
      Major & Minor 2nds (Continued)
    </SubHeader>
    <Paragraph>
      <b>How do I know which name to use 🤔?</b>
    </Paragraph>
    <Paragraph>
      When speaking in terms of harmony (how things sound) we generally use the minor/major name.
    </Paragraph>
    <Paragraph>
      e.g. "That chord has a major 2nd in it."
    </Paragraph>
    <Paragraph>
      When speaking in more mathematical/note distance terms we generally use the whole/half step name.
    </Paragraph>
    <Paragraph>
      e.g. "A major 2nd is the distance of 2 half steps."
    </Paragraph>

  </>
);

const Four = ({ instrument }) => {
  const [activePlayerIndex, setActivePlayerIndex] = useState(undefined);

  return (
    <>
      <HeaderText>
        Whole/Half Steps
      </HeaderText>
      <SubHeader>
        Recognizing Minor 2nds
      </SubHeader>
      <Paragraph>
        A Minor 2nd is a sharply dissonant interval:
      </Paragraph>
      <Paragraph>
        It sounds like this:
      </Paragraph>
      <PlayerBlock
        isPlaying={activePlayerIndex === 0}
        onClick={() => {
          setActivePlayerIndex(0);
          playNotes({
            notes: [
              { noteName: "C" },
              { noteName: "C#" },
            ],
            instrument
          });
          setTimeout(() => setActivePlayerIndex(undefined), 400);

        }}
        text="Minor 2nd"
      />
      <SubHeader>
        Ways to recognize
      </SubHeader>
      <Paragraph>
        The first two notes of the following songs create a minor 2nd:
      </Paragraph>
      <Block>
        <Paragraph>
          👉 "Jaws Theme"
        </Paragraph>
        <Paragraph>
          👉 "Isn't She Lovely"
        </Paragraph>
        <Paragraph>
          👉 "Pink Panther Theme"
        </Paragraph>
      </Block>
      <Paragraph>
        💡Tip: These are called reference songs. Reference songs are used to quickly identify intervals.
      </Paragraph>
      <Paragraph>
         For example when you hear an interval that sounds like the Jaws Theme you can quickly conclude that it's a minor second.
      </Paragraph>
    </>
  );
};

const Five = ({ instrument }) => {
  const [activePlayerIndex, setActivePlayerIndex] = useState(undefined);

  return (
    <>
      <HeaderText>
        Whole/Half Steps
      </HeaderText>
      <SubHeader>
        Recognizing Major 2nds
      </SubHeader>
      <Paragraph>
        A Major 2nd is mildly dissonant interval:
      </Paragraph>
      <Paragraph>
        It sounds like this:
      </Paragraph>
      <PlayerBlock
        isPlaying={activePlayerIndex === 0}
        onClick={() => {
          setActivePlayerIndex(0);
          playNotes({
            notes: [
              { noteName: "C" },
              { noteName: "D" },
            ],
            instrument
          });
          setTimeout(() => setActivePlayerIndex(undefined), 400);

        }}
        text="Major 2nd"
      />
      <SubHeader>
        Ways to recognize
      </SubHeader>
      <Paragraph>
        The first two notes of the following songs create a major 2nd:
      </Paragraph>
      <Block>
        <Paragraph>
          👉 "Happy Birthday"
        </Paragraph>
        <Paragraph>
          👉 "Rudolph the Red-Nosed Reindeer"
        </Paragraph>
        <Paragraph>
          👉 "Silent Night"
        </Paragraph>
      </Block>
    </>
  );
};

const lessons = [
  One,
  OneTwo,
  OneThree,
  Two,
  Three,
  Four,
  Five
];

export default function MinorMajorSecond(props) {
  const { index } = props;

  return (
    <div>
      {lessons[index](props)}
    </div>
  );
}
