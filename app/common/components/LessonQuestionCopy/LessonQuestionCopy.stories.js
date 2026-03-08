
import React from "react";
import { storiesOf } from "@storybook/react";
import LessonQuestionCopy from "./LessonQuestionCopy";

const defaultProps = {};

storiesOf("LessonQuestionCopy", module)
  .addDecorator(story => (
    <div className="App">
      {story()}
    </div>
  ))
  .addParameters({ viewport: { defaultViewport: "iphone6" } })
  .add("Default", () => <LessonQuestionCopy {...defaultProps} />);
