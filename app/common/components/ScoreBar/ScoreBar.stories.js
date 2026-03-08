import React from "react";
import { storiesOf } from "@storybook/react";
import ScoreBar from "./ScoreBar";

const defaultProps = {
  correct: 5,
  total: 10
};

storiesOf("ScoreBar", module)
  .addDecorator(story => (
    <div className="App" style={{ height: 50 }}>
      {story()}
    </div>
  ))
  .addParameters({ viewport: { defaultViewport: "iphone6" } })
  .add("Default", () => <ScoreBar {...defaultProps} />);