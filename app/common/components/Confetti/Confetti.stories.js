
import React from "react";
import { storiesOf } from "@storybook/react";
import Confetti from "./Confetti";

const defaultProps = {};

storiesOf("Confetti", module)
  .addDecorator(story => (
    <div className="App">
      {story()}
    </div>
  ))
  .addParameters({ viewport: { defaultViewport: "iphone6" } })
  .add("Default", () => <Confetti {...defaultProps} />);
