import React from "react";
import Paragraph from "../../Paragraph";

export default function NoteDistancesPerfect4thsAnd5ths(props) {
  return (
    <>
      {props.hintHeader}
      <Paragraph>
        A <b>perfect 4th</b> is the distance of <b>5 notes</b>.
        For example, F is a perfect 4th above C.
      </Paragraph>
      <Paragraph>
        A <b>perfect 5th</b> is the distance of <b>7 notes</b>.
        For example, G is a perfect 5th above C.
      </Paragraph>
      {props.lessonsToReview}
    </>
  );
}
