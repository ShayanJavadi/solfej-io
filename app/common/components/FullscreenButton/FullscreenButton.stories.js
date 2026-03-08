
import React from "react";
import { storiesOf } from "@storybook/react";
import FullscreenButton from "./FullscreenButton";

const defaultProps = {};

storiesOf("FullscreenButton", module)
  .addDecorator(story => (
    <div className="App">
      {story()}
    </div>
  ))
  .addParameters({ viewport: { defaultViewport: "iphone6" } })
  .add("Default", () => <FullscreenButton {...defaultProps} />);
