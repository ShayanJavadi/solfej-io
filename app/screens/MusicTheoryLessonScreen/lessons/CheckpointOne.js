import React from "react";
import Experiment from "../../../assets/images/experiment.png";
import Block from "../../../common/components/Block/Block";
import HeaderText from "../../../common/components/HeaderText/HeaderText";
import ImageContent from "../../../common/components/ImageContent/ImageContent";
import Paragraph from "../../../common/components/Paragraph";
import SubHeader from "../../../common/components/SubHeader/SubHeader";

const One = ({ instrument }) => (
  <>
    <HeaderText>
      Turning music theory into music
    </HeaderText>
    <SubHeader addBottomPadding>
      Applying What You've Learned
    </SubHeader>
    <Paragraph>
      I encourage you to take some time and experiment with what you've learned so far.
    </Paragraph>
    <Paragraph>
      Remember that information is not knowledge.
    </Paragraph>
    <Paragraph>
      The only source of knowledge is experience!
    </Paragraph>
    <ImageContent src={Experiment} />
  </>
);

const Two = () => (
  <>
    <HeaderText>
      Checkpoint I
    </HeaderText>
    <SubHeader addBottomPadding>
     Break The Rules
    </SubHeader>
    <Paragraph>
      Here's some open ended questions for you to get started:
    </Paragraph>
    <Block>
      <Paragraph>
        👉 What happens if you add a note to the major scale?
      </Paragraph>
      <Paragraph>
        👉 How many cool ways can you rearrange the first four notes of the major scale?
      </Paragraph>
      <Paragraph>
        👉 What happens if you form a scale out of only whole steps?
      </Paragraph>
    </Block>

    <Paragraph>
      The possibilities are endless! Music theory is just that, a theory. Don't be afraid to break the rules 😊.
    </Paragraph>
  </>
);

const lessons = [
  One,
  Two
];

export default function CheckpointOne(props) {
  const { index } = props;

  return lessons[index](props);
}
