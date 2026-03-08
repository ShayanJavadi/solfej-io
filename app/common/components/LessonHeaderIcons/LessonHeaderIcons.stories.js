
import React from "react";
import { storiesOf } from "@storybook/react";
import LessonHeaderIcons from "./LessonHeaderIcons";

const defaultProps = {};

storiesOf("LessonHeaderIcons", module)
  .addDecorator(story => (
    <div className="App">
      {story()}
    </div>
  ))
  .addParameters({ viewport: { defaultViewport: "iphone6" } })
  .add("Default", () => <LessonHeaderIcons {...defaultProps} />);
