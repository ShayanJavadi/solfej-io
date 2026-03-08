
import React from "react";
import { storiesOf } from "@storybook/react";
import LessonScore from "./LessonScore";

const defaultProps = {};

storiesOf("LessonScore", module)
  .addDecorator(story => (
    <div className="App">
      {story()}
    </div>
  ))
  .addParameters({ viewport: { defaultViewport: "iphone6" } })
  .add("Default", () => <LessonScore {...defaultProps} />);
