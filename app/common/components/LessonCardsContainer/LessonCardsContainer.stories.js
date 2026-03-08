
import React from "react";
import { storiesOf } from "@storybook/react";
import LessonCardsContainer from "./LessonCardsContainer";

const defaultProps = {};

storiesOf("LessonCardsContainer", module)
  .addDecorator(story => (
    <div className="App">
      {story()}
    </div>
  ))
  .addParameters({ viewport: { defaultViewport: "iphone6" } })
  .add("Default", () => <LessonCardsContainer {...defaultProps} />);
