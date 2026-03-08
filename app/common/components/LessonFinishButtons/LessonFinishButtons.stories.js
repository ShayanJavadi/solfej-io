
import React from "react";
import { storiesOf } from "@storybook/react";
import LessonFinishButtons from "./LessonFinishButtons";

const defaultProps = {};

storiesOf("LessonFinishButtons", module)
  .addDecorator(story => (
    <div className="App">
      {story()}
    </div>
  ))
  .addParameters({ viewport: { defaultViewport: "iphone6" } })
  .add("Default", () => <LessonFinishButtons {...defaultProps} />);
