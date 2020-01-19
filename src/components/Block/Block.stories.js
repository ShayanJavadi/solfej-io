
import React from "react";
import { storiesOf } from "@storybook/react";
import Block from "./Block";

const defaultProps = {};

storiesOf("Block", module)
  .addDecorator(story => (
    <div className="App">
      {story()}
    </div>
  ))
  .addParameters({ viewport: { defaultViewport: "iphone6" } })
  .add("Default", () => <Block {...defaultProps} />);
