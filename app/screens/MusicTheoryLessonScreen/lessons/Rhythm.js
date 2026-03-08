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
        Rhythm 
      </HeaderText>
      <SubHeader>
        What Is Rhythm? 🥁
      </SubHeader>
      <Paragraph>
        Rhythm is generally characterized by a regular recurrence or pattern of strong and weak <b>beats</b>
      </Paragraph>
      <Paragraph>
        A <b>beat</b> is the basic unit of time in music. It's often what you tap your foot to when listening to music.
      </Paragraph>
    </>
  );
};

const Two = ({ instrument, index }) => {
  return (
    <>
      <HeaderText>
        Rhythm
      </HeaderText>
      <SubHeader>
        Beats and Bars
      </SubHeader>
      <Paragraph>
        We learned that beats are the basic unit of time in music.
      </Paragraph>
      <Paragraph>
        A <b>bar</b> is a grouping of beats.
      </Paragraph>
      <Paragraph>
        One of most popular way of grouping beats is 4 beats per bar.
      </Paragraph>
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

export default function Rhythm(props) {
  const { index } = props;

  return (
    <div>
      {lessons[index](props)}
    </div>
  );
}
