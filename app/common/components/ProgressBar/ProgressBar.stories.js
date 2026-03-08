
import React from "react";
import { storiesOf } from "@storybook/react";
import ProgressBar from "./ProgressBar";

const defaultProps = { percentageFilled: 30 };

storiesOf("ProgressBar", module)
  .addDecorator(story => (
    <div className="App">
      {story()}
    </div>
  ))
  .addParameters({ viewport: { defaultViewport: "iphone6" } })
  .add("Default", () => <ProgressBar {...defaultProps} />);
