
import React from "react";
import { storiesOf } from "@storybook/react";
import ChordQualityScreen from "./ChordQualityScreen";

const defaultProps = {};

storiesOf("ChordQualityScreen", module)
  .addDecorator(story => (
    <div className="App">
      {story()}
    </div>
  ))
  .addParameters({ viewport: { defaultViewport: "iphone6" } })
  .add("Default", () => <ChordQualityScreen {...defaultProps} />);
