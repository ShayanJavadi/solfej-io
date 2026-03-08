
import React from "react";
import { storiesOf } from "@storybook/react";
import SignUpScreen from "./SignUpScreen";

const defaultProps = {};

storiesOf("SignUpScreen", module)
  .addDecorator(story => (
    <div className="App">
      {story()}
    </div>
  ))
  .addParameters({ viewport: { defaultViewport: "iphone6" } })
  .add("Default", () => <SignUpScreen {...defaultProps} />);
