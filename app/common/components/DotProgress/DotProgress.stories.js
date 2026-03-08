
import React from "react";
import { storiesOf } from "@storybook/react";
import DotProgress from "./DotProgress";

const defaultProps = {};

storiesOf("DotProgress", module)
  .addDecorator(story => (
    <div className="App">
      {story()}
    </div>
  ))
  .addParameters({ viewport: { defaultViewport: "iphone6" } })
  .add("Default", () => <DotProgress {...defaultProps} />);
