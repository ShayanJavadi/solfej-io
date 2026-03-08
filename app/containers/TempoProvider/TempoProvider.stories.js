
import React from "react";
import { storiesOf } from "@storybook/react";
import TempoProvider from "./TempoProvider";

const defaultProps = {};

storiesOf("TempoProvider", module)
  .addDecorator(story => (
    <div className="App">
      {story()}
    </div>
  ))
  .addParameters({ viewport: { defaultViewport: "iphone6" } })
  .add("Default", () => <TempoProvider {...defaultProps} />);
