
import React from "react";
import { storiesOf } from "@storybook/react";
import OnboardingScreen from "./OnboardingScreen";

const defaultProps = {};

storiesOf("OnboardingScreen", module)
  .addDecorator(story => (
    <div className="App">
      {story()}
    </div>
  ))
  .addParameters({ viewport: { defaultViewport: "iphone6" } })
  .add("Default", () => <OnboardingScreen {...defaultProps} />);
