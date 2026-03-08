
import React from "react";
import { storiesOf } from "@storybook/react";
import ChoicesContainer from "./ChoicesContainer";

const defaultProps = {};

storiesOf("ChoicesContainer", module)
  .addDecorator(story => (
    <div className="App">
      {story()}
    </div>
  ))
  .addParameters({ viewport: { defaultViewport: "iphone6" } })
  .add("Default", () => <ChoicesContainer {...defaultProps} />);
