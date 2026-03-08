import React from "react";
import Paragraph from "../../Paragraph";

export default function NoteDistancesMinorMajor7ths(props) {
  return (
    <>
      {props.hintHeader}
      <Paragraph>
        A <b>minor 7th</b> is the distance of <b>10 note</b>.
        For example, Bb is a minor 7th above C.
      </Paragraph>
      <Paragraph>
        A <b>major 7th</b> is the distance of <b>11 notes</b>.
        For example, B is a major 7th above C.
      </Paragraph>
      {props.lessonsToReview}
    </>
  );
}
