
import React from "react";
import { storiesOf } from "@storybook/react";
import WelcomeSlide from "./WelcomeSlide";

const defaultProps = {};

storiesOf("WelcomeSlide", module)
  .addDecorator(story => (
    <div className="App">
      {story()}
    </div>
  ))
  .addParameters({ viewport: { defaultViewport: "iphone6" } })
  .add("Default", () => <WelcomeSlide {...defaultProps} />);
