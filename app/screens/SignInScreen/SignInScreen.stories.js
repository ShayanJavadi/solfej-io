
import React from "react";
import { storiesOf } from "@storybook/react";
import SignInScreen from "./SignInScreen";

const defaultProps = {};

storiesOf("SignInScreen", module)
  .addDecorator(story => (
    <div className="App">
      {story()}
    </div>
  ))
  .addParameters({ viewport: { defaultViewport: "iphone6" } })
  .add("Default", () => <SignInScreen {...defaultProps} />);
