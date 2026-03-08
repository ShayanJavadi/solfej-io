import React from "react";
import Paragraph from "../../Paragraph";

export default function NoteDistancesMinorMajor3rds(props) {
  return (
    <>
      {props.hintHeader}
      <Paragraph>
        A <b>minor 3rd</b> is the distance of <b>3 notes</b>.
        For example, Eb is a minor 3rd above C.
      </Paragraph>
      <Paragraph>
        A <b>major 3rd</b> is the distance of <b>4 notes</b>.
        For example, E is a major 3rd above C.
      </Paragraph>
      {props.lessonsToReview}
    </>
  );
}
