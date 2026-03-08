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
        Dotted Notes
      </HeaderText>
      <SubHeader>
        What Is a Dotted Note?
      </SubHeader>
      <Paragraph>
        A dotted note is a note with a small dot written after it. like so:
      </Paragraph>
      <Paragraph flexCentered>
        <span className="notes-font">q.</span>
      </Paragraph>
      <Paragraph>
        The dot adds a length of half the original note.
      </Paragraph>
      <Paragraph>
        This means that the following is true:
      </Paragraph>
      <Block>

        <Paragraph flexCentered>
          <span className="notes-font">h. = h + q</span>
        </Paragraph>

        <Paragraph flexCentered>
          <span className="notes-font">q. = q + e</span>
        </Paragraph>
      </Block>
    </>
  );
};

const Two = ({ instrument, index }) => {
  let loops = useLoop();

  const [activeLoopIndex, setActiveLoopIndex] = useState(undefined);

  return (
    <>
      <HeaderText>
        Dotted Notes
      </HeaderText>
      <SubHeader>
        Audible Comparisons
      </SubHeader>
      <Paragraph>
        Here are audible comparisons of dotted and regular notes:
      </Paragraph>
      <PlayerBlock
        isPlaying={activeLoopIndex === 0}
        onClick={() => {
          const loopFunction = () => createLoop("C4", "4n", "4n", instrument);
          onLoopClick(loops, activeLoopIndex, 0, loopFunction, setActiveLoopIndex);
        }}
        text="Regular Quarter Notes"
      />
      <PlayerBlock
        isPlaying={activeLoopIndex === 1}
        onClick={() => {
          const loopFunction = () => createLoop("C4", "4n.", "4n.", instrument);
          onLoopClick(loops, activeLoopIndex, 1, loopFunction, setActiveLoopIndex);
        }}
        text="Dotted Quarter Notes"
      />
      <PlayerBlock
        isPlaying={activeLoopIndex === 2}
        onClick={() => {
          const loopFunction = () => createLoop("C4", "8n", "8n", instrument);
          onLoopClick(loops, activeLoopIndex, 2, loopFunction, setActiveLoopIndex);
        }}
        text="Regular Eighth Note"
      />
      <PlayerBlock
        isPlaying={activeLoopIndex === 3}
        onClick={() => {
          const loopFunction = () => createLoop("C4", "8n.", "8n.", instrument);
          onLoopClick(loops, activeLoopIndex, 3, loopFunction, setActiveLoopIndex);
        }}
        text="Dotted Eighth Note"
      />
    </>
  );
};

const Three = ({ instrument, index }) => {
  let loops = useLoop();

  const [activeLoopIndex, setActiveLoopIndex] = useState(undefined);
  Tone.Transport.bpm.value = 130;

  return (
    <>
      <HeaderText>
        Rhythm
      </HeaderText>
      <SubHeader>
        Tempo
      </SubHeader>
      <Paragraph>
        Tempo is how fast or slow a piece of music is.
      </Paragraph>
      <Paragraph>
        Tempo is measured in beats per minute. Higher tempos are "faster".
      </Paragraph>
      <Paragraph>
        Beats per minute is usually abbreviated as <b>bpm</b>.
      </Paragraph>
      <Paragraph>
        Here's some audible examples of tempo:
      </Paragraph>
      <PlayerBlock
        isPlaying={activeLoopIndex === 1}
        onClick={() => {
          const loopFunction = () => createLoop("C4", "2n", "2n", instrument);
          onLoopClick(loops, activeLoopIndex, 1, loopFunction, setActiveLoopIndex);
        }}
        text="65 bpm"
      />
      <PlayerBlock
        isPlaying={activeLoopIndex === 2}
        onClick={() => {
          const loopFunction = () => createLoop("C4", "4n", "4n", instrument);
          onLoopClick(loops, activeLoopIndex, 2, loopFunction, setActiveLoopIndex);
        }}
        text="130 bpm"
      />
    </>
  );
};

const lessons = [
  One,
  Two,
  Three
];

export default function DottedNotes(props) {
  const { index } = props;

  return (
    <div>
      {lessons[index](props)}
    </div>
  );
}
