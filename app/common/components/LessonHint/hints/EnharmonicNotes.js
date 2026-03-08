import React from "react";
import Paragraph from "../../Paragraph";

export default function EnharmonicNotes(props) {
  return (
    <>
      {props.hintHeader}
      <Paragraph>
        <li>Two notes are <b>enharmonic</b> if they are the same.</li>
        <li>For example, Cb is the enharmonic equivalent of B.</li>
      </Paragraph>
      {props.lessonsToReview}
    </>
  );
}
