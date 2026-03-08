
import React from "react";
import { storiesOf } from "@storybook/react";
import LoadingOverlay from "./LoadingOverlay";

const defaultProps = {};

storiesOf("LoadingOverlay", module)
  .addDecorator(story => (
    <div className="App">
      {story()}
    </div>
  ))
  .addParameters({ viewport: { defaultViewport: "iphone6" } })
  .add("Default", () => <LoadingOverlay {...defaultProps} />);
