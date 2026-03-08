
import React from "react";
import { storiesOf } from "@storybook/react";
import LoadingSpinner from "./LoadingSpinner";

const defaultProps = {};

storiesOf("LoadingSpinner", module)
  .addDecorator(story => (
    <div className="App">
      {story()}
    </div>
  ))
  .addParameters({ viewport: { defaultViewport: "iphone6" } })
  .add("Default", () => <LoadingSpinner {...defaultProps} />);
