
import React from "react";
import { storiesOf } from "@storybook/react";
import MusicTheoryScreen from "./MusicTheoryScreen";

const defaultProps = {};

storiesOf("MusicTheoryScreen", module)
  .addDecorator(story => (
    <div className="App">
      {story()}
    </div>
  ))
  .addParameters({ viewport: { defaultViewport: "iphone6" } })
  .add("Default", () => <MusicTheoryScreen {...defaultProps} />);
