import React, { useState, useEffect } from "react";
import Tone from "tone";
import halfNote from "../../../assets/images/half-note.png";
import quarterNote from "../../../assets/images/quarter-note.png";
import sixteenthNote from "../../../assets/images/sixteenth-note.png";
import wholeNote from "../../../assets/images/whole-note.png";
import Block from "../../../common/components/Block/Block";
import HeaderText from "../../../common/components/HeaderText/HeaderText";
import Paragraph from "../../../common/components/Paragraph";
import PlayerBlock from "../../../common/components/PlayerBlock/PlayerBlock";
import SubHeader from "../../../common/components/SubHeader/SubHeader";
import useLoop from "../../../common/hooks/useLoop";
import createLoop from "../../../util/tone/createLoop";
import onLoopClick from "../../../util/tone/onLoopClick";

const One = () => {
  return (
    <>
      <HeaderText>
        Note Durations
      </HeaderText>
      <SubHeader>
        Some Symbols
      </SubHeader>
      <Paragraph>
        Note duration is how long a note lasts after it is played
      </Paragraph>
      <Paragraph>
        Note durations are broken down into 4 different main symbols.
      </Paragraph>
      <Block>
        <Paragraph spaceBetween>
          👉 Whole Note: <img src={wholeNote} />
        </Paragraph>
        <Paragraph spaceBetween>
        👉 Half Note: <img src={halfNote} style={{
            position: "relative",
            left: "7px",
          }}  />
        </Paragraph>
        <Paragraph spaceBetween>
        👉 Quarter Note: <img src={quarterNote} />
        </Paragraph>
        <Paragraph spaceBetween>
        👉 8th Note: <img src={sixteenthNote} />
        </Paragraph>
      </Block>
      <Paragraph>
        As you can tell from the name each note duration is half the duration of the last one. In other words:
      </Paragraph>
      <Block>
        <Paragraph isCentered flexCentered>
          <span className="inline-content width"><img src={wholeNote} /></span>
          <span className="inline-content pad width">=</span>
          <span className="inline-content width"><img src={halfNote} /> + <img src={halfNote} /></span>
        </Paragraph>
        <Paragraph isCentered flexCentered>
          <span className="inline-content width"><img src={halfNote} /></span>
          <span className="inline-content pad width">=</span>
          <span className="inline-content width"><img src={quarterNote} /> + <img src={quarterNote} /></span>
        </Paragraph>
        <Paragraph isCentered flexCentered>
          <span className="inline-content width"><img src={quarterNote} /></span>
          <span className="inline-content pad width">=</span>
          <span className="inline-content width"><img src={sixteenthNote} /> + <img src={sixteenthNote} /></span>
        </Paragraph>
      </Block>
      <Paragraph>
        We'll provide interactive examples in the next page to help internalize this. 😊
      </Paragraph>
    </>
  );
};

const Two = ({ instrument, index }) => {
  let loops = useLoop();

  const [activeLoopIndex, setActiveLoopIndex] = useState(undefined);

  return (
    <>
      <HeaderText>
        Note Durations
      </HeaderText>
      <SubHeader>
        Audible Examples
      </SubHeader>
      <Paragraph>
        Here are audible examples (in descending order) for each note duration we learned about. Play each one to get a feel for them.
      </Paragraph>
      <PlayerBlock
        isPlaying={activeLoopIndex === 0}
        onClick={() => {
          const loopFunction = () => createLoop("C4", "1n", "1n", instrument);
          onLoopClick(loops, activeLoopIndex, 0, loopFunction, setActiveLoopIndex);
        }}
        text="Whole Note"
      />
      <PlayerBlock
        isPlaying={activeLoopIndex === 1}
        onClick={() => {
          const loopFunction = () => createLoop("C4", "2n", "2n", instrument);
          onLoopClick(loops, activeLoopIndex, 1, loopFunction, setActiveLoopIndex);
        }}
        text="Half Note"
      />
      <PlayerBlock
        isPlaying={activeLoopIndex === 2}
        onClick={() => {
          const loopFunction = () => createLoop("C4", "4n", "4n", instrument);
          onLoopClick(loops, activeLoopIndex, 2, loopFunction, setActiveLoopIndex);
        }}
        text="Quarter Note"
      />
      <PlayerBlock
        isPlaying={activeLoopIndex === 3}
        onClick={() => {
          const loopFunction = () => createLoop("C4", "8n", "8n", instrument);
          onLoopClick(loops, activeLoopIndex, 3, loopFunction, setActiveLoopIndex);
        }}
        text="8th Note"
      />
      <Paragraph>
        Notice how it gets twice as fast each time?
      </Paragraph>
    </>
  );
};

const Three = () => (
  <>
    <HeaderText>
      Rhythm
    </HeaderText>
    <SubHeader>
      Time Signature
    </SubHeader>
    <Paragraph>
      The time signature of a piece dictates how many beats are in a bar, and what the note value of a beat is.
    </Paragraph>
    <Paragraph>
      Time signatures are written as such:
    </Paragraph>
    <Paragraph flexCentered>
      <span className="notes-font">$4</span>
    </Paragraph>
    <Paragraph>
      The top number is how many beats are in each bar
    </Paragraph>
    <Paragraph>
      The bottom number is how long a beat is. The bottom number is usually a power of 2.
    </Paragraph>
    <Paragraph>
      For instance in the above case there are 4 quarter notes per bar.
    </Paragraph>
    <Paragraph>
      And the following is 3 quarter notes per bar.
    </Paragraph>
    <Paragraph flexCentered>
      <span className="notes-font">#4</span>
    </Paragraph>

  </>
);

const lessons = [
  One,
  Two,
  Three
];

export default function NoteDurations(props) {
  const { index } = props;
  
  return (
    <div>
      {lessons[index](props)}
    </div>
  );
}
