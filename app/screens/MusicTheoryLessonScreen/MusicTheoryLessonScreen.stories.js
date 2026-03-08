
import React from "react";
import { storiesOf } from "@storybook/react";
import MusicTheoryLessonScreen from "./MusicTheoryLessonScreen";

const defaultProps = {};

storiesOf("MusicTheoryLessonScreen", module)
  .addDecorator(story => (
    <div className="App">
      {story()}
    </div>
  ))
  .addParameters({ viewport: { defaultViewport: "iphone6" } })
  .add("Default", () => <MusicTheoryLessonScreen {...defaultProps} />);
