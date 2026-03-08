import React, { useState } from "react";
import Block from "../../../common/components/Block/Block";
import HeaderText from "../../../common/components/HeaderText/HeaderText";
import Paragraph from "../../../common/components/Paragraph";
import SubHeader from "../../../common/components/SubHeader/SubHeader";
import playNotes from "../../../util/noteUtils/playNotes";
import PlayerBlock from "../../../common/components/PlayerBlock/PlayerBlock";

const One = ({ instrument }) => {
  const [activeLoopIndex, setActiveLoopIndex] = useState(undefined);

  return (
    <>
      <HeaderText>
        The Tritone
      </HeaderText>
      <SubHeader>
        The Simpsons
      </SubHeader>
      <Paragraph>
        The <b>tritone</b> is the distance of 6 half steps (6 notes).
      </Paragraph>
      <Paragraph>
        A tritone is a dissonant and evil sounding interval.
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
              { noteName: "F#" },
            ],
            instrument
          });
          setTimeout(() => setActiveLoopIndex(undefined), 400);

        }}
        text="Tritone"
      />
      <SubHeader>
        Ways to recognize
      </SubHeader>
      <Paragraph>
        The first two notes of the following songs create a tritone:
      </Paragraph>
      <Block>
        <Paragraph>
          👉 "Simpsons Theme" "THE-SIIIIMP-sons"
        </Paragraph>
      </Block>
    </>
  );
};

const Two = () => (
  <>
    <HeaderText>
      The Tritone
    </HeaderText>
    <SubHeader>
      Usage
    </SubHeader>
    <Paragraph>
     The tritone is commonly used in Jazz and Blues 🎷 (which we will get to in the later chapters).
    </Paragraph>
    <Paragraph>
      It's also widely used in Metal music.
    </Paragraph>
    <SubHeader>
      Evil Interval
    </SubHeader>
    <Paragraph>
      🚫 Legend says that the tritone was banned to use in medieval times.
    </Paragraph>
    <Paragraph>
      (Most historians agree that it probably wasn't though 🤷).
    </Paragraph>
  </>
);

const lessons = [
  One,
  Two,
];

export default function TritoneInterval(props) {
  const { index } = props;

  return (
    <div>
      {lessons[index](props)}
    </div>
  );
}
