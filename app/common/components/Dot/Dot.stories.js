
import React from "react";
import { storiesOf } from "@storybook/react";
import Dot from "./Dot";

const defaultProps = {};

storiesOf("Dot", module)
  .addDecorator(story => (
    <div className="App">
      {story()}
    </div>
  ))
  .addParameters({ viewport: { defaultViewport: "iphone6" } })
  .add("Default", () => <Dot {...defaultProps} />);
