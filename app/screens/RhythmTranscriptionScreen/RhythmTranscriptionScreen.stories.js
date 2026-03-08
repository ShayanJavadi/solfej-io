
import React from "react";
import { storiesOf } from "@storybook/react";
import RhythmTranscriptionScreen from "./RhythmTranscriptionScreen";

const defaultProps = {};

storiesOf("RhythmTranscriptionScreen", module)
  .addDecorator(story => (
    <div className="App">
      {story()}
    </div>
  ))
  .addParameters({ viewport: { defaultViewport: "iphone6" } })
  .add("Default", () => <RhythmTranscriptionScreen {...defaultProps} />);
