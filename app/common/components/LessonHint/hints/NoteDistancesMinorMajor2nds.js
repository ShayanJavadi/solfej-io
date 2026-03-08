import React from "react";
import Paragraph from "../../Paragraph";

export default function NoteDistancesMinorMajor2nds(props) {
  return (
    <>
      {props.hintHeader}
      <Paragraph>
        A <b>minor 2nd</b> is the distance of <b>1 note</b>.
        For example, F is a minor 2nd above E.
      </Paragraph>
      <Paragraph>
        A <b>major 2nd</b> is the distance of <b>2 notes</b>.
        For example, F# is a major 2nd above E.
      </Paragraph>
      {props.lessonsToReview}
    </>
  );
}
