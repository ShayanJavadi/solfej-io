
import React from "react";
import { storiesOf } from "@storybook/react";
import PlayerBlock from "./PlayerBlock";

const defaultProps = {};

storiesOf("PlayerBlock", module)
  .addDecorator(story => (
    <div className="App">
      {story()}
    </div>
  ))
  .addParameters({ viewport: { defaultViewport: "iphone6" } })
  .add("Default", () => <PlayerBlock {...defaultProps} />);
