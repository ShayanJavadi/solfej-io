import React from "react";
import Paragraph from "../../Paragraph";

export default function NoteDistancesMinorMajor6ths(props) {
  return (
    <>
      {props.hintHeader}
      <Paragraph>
        A <b>minor 6th</b> is the distance of <b>8 note</b>.
        For example, Ab is a minor 6th above C.
      </Paragraph>
      <Paragraph>
        A <b>major 6th</b> is the distance of <b>9 notes</b>.
        For example, A is a major 6th above C.
      </Paragraph>
      {props.lessonsToReview}
    </>
  );
}
