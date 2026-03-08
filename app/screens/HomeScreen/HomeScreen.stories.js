
import React from "react";
import { storiesOf } from "@storybook/react";
import HomeScreen from "./HomeScreen";

const defaultProps = {};

storiesOf("HomeScreen", module)
  .addDecorator(story => (
    <div className="App">
      {story()}
    </div>
  ))
  .addParameters({ viewport: { defaultViewport: "iphone6" } })
  .add("Default", () => <HomeScreen {...defaultProps} />);
