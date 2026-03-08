
import React from "react";
import { storiesOf } from "@storybook/react";
import Streak from "./Streak";

const defaultProps = {};

storiesOf("Streak", module)
  .addDecorator(story => (
    <div className="App">
      {story()}
    </div>
  ))
  .addParameters({ viewport: { defaultViewport: "iphone6" } })
  .add("Default", () => <Streak {...defaultProps} />);
