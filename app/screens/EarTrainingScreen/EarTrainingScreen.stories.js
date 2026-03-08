
import React from "react";
import { storiesOf } from "@storybook/react";
import EarTrainingScreen from "./EarTrainingScreen";

const defaultProps = {};

storiesOf("EarTrainingScreen", module)
  .addDecorator(story => (
    <div className="App">
      {story()}
    </div>
  ))
  .addParameters({ viewport: { defaultViewport: "iphone6" } })
  .add("Default", () => <EarTrainingScreen {...defaultProps} />);
