
import React from "react";
import { storiesOf } from "@storybook/react";
import Screen from "./Screen";

const defaultProps = {};

storiesOf("Screen", module)
  .addDecorator(story => (
    <div className="App">
      {story()}
    </div>
  ))
  .addParameters({ viewport: { defaultViewport: "iphone6" } })
  .add("Default", () => <Screen {...defaultProps} />);
