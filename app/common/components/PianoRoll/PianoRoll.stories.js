
import React from "react";
import { storiesOf } from "@storybook/react";
import PianoRoll from "./PianoRoll";

const defaultProps = { };

storiesOf("PianoRoll", module)
  .addDecorator(story => (
    <div className="App">
      {story()}
    </div>
  ))
  .addParameters({ viewport: { defaultViewport: "iphone6" } })
  .add("Default", () => <PianoRoll {...defaultProps} />);
