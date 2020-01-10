
import React from "react";
import { storiesOf } from "@storybook/react";
import PianoRollContainer from "./PianoRollContainer";

const defaultProps = {};

storiesOf("PianoRollContainer", module)
  .addDecorator(story => (
    <div className="App">
      {story()}
    </div>
  ))
  .addParameters({ viewport: { defaultViewport: "iphone6" } })
  .add("Default", () => <PianoRollContainer {...defaultProps} />);
