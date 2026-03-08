
import React from "react";
import { storiesOf } from "@storybook/react";
import IntervalIdentificationScreen from "./IntervalIdentificationScreen";

const defaultProps = {};

storiesOf("IntervalIdentificationScreen", module)
  .addDecorator(story => (
    <div className="App">
      {story()}
    </div>
  ))
  .addParameters({ viewport: { defaultViewport: "iphone6" } })
  .add("Default", () => <IntervalIdentificationScreen {...defaultProps} />);
