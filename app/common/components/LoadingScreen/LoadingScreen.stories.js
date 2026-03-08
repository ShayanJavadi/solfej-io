
import React from "react";
import { storiesOf } from "@storybook/react";
import LoadingScreen from "./LoadingScreen";

const defaultProps = {};

storiesOf("LoadingScreen", module)
  .addDecorator(story => (
    <div className="App">
      {story()}
    </div>
  ))
  .addParameters({ viewport: { defaultViewport: "iphone6" } })
  .add("Default", () => <LoadingScreen {...defaultProps} />);
