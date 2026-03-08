
import React from "react";
import { storiesOf } from "@storybook/react";
import Pill from "./Pill";

const defaultProps = {};

storiesOf("Pill", module)
  .addDecorator(story => (
    <div className="App">
      {story()}
    </div>
  ))
  .addParameters({ viewport: { defaultViewport: "iphone6" } })
  .add("Default", () => <Pill {...defaultProps} />);
