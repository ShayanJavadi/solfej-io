import React from "react";
import HeaderText from "../../../common/components/HeaderText/HeaderText";
import SubHeader from "../../../common/components/SubHeader/SubHeader";
import Paragraph from "../../../common/components/Paragraph";
import Block from "../../../common/components/Block/Block";

const One = () => (
  <>
    <HeaderText>
      Intervals Review
    </HeaderText>
    <SubHeader>
      What we've learned so far
    </SubHeader>
    <Paragraph>
      Here's all the intervals that have been covered:
    </Paragraph>
    <Block>
      <Paragraph>
        👉 Minor 2nds
      </Paragraph>
      <Paragraph>
        👉 Major 2nds
      </Paragraph>

      <Paragraph>
        👉 Minor 3rds
      </Paragraph>

      <Paragraph>
        👉 Major 3rds
      </Paragraph>

      <Paragraph>
        👉 Perfect 4ths
      </Paragraph>
      <Paragraph>
        👉 Perfect 5ths
      </Paragraph>
    </Block>
  </>
);

const Two = () => (
  <>
    <HeaderText>
       Intervals Review
    </HeaderText>
    <SubHeader>
       What we've learned so far
    </SubHeader>
    <Paragraph>
      Congratulations! You've made so much progress! 🥳🎉
    </Paragraph>
    <Paragraph>
      The next quiz will test your knowledge on the intervals that have been covered!
    </Paragraph>
    <Paragraph>
      Now would be a good time to go back and review everything we've learned on intervals. 😉
    </Paragraph>
  </>
);

const lessons = [
  One,
  Two,
];

export default function IntervalsReview(props) {
  const { index } = props;

  return (
    <div>
      {lessons[index]()}
    </div>
  );
}
