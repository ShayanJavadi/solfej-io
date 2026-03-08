
import React from "react";
import { storiesOf } from "@storybook/react";
import GetStartedScreen from "./GetStartedScreen";

const defaultProps = {};

storiesOf("GetStartedScreen", module)
  .addDecorator(story => (
    <div className="App">
      {story()}
    </div>
  ))
  .addParameters({ viewport: { defaultViewport: "iphone6" } })
  .add("Default", () => <GetStartedScreen {...defaultProps} />);
