
import React from "react";
import { storiesOf } from "@storybook/react";
import QuizScreen from "./QuizScreen";

const defaultProps = {};

storiesOf("QuizScreen", module)
  .addDecorator(story => (
    <div className="App">
      {story()}
    </div>
  ))
  .addParameters({ viewport: { defaultViewport: "iphone6" } })
  .add("Default", () => <QuizScreen {...defaultProps} />);
