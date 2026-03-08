
import React from "react";
import { storiesOf } from "@storybook/react";
import HeaderText from "./HeaderText";

const defaultProps = {};

storiesOf("HeaderText", module)
  .addDecorator(story => (
    <div className="App">
      {story()}
    </div>
  ))
  .addParameters({ viewport: { defaultViewport: "iphone6" } })
  .add("Default", () => <HeaderText {...defaultProps} />);
