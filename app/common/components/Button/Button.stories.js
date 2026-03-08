
import React from "react";
import { storiesOf } from "@storybook/react";
import Button from "./Button";

const defaultProps = {};

storiesOf("Button", module)
  .addDecorator(story => (
    <div className="App">
      {story()}
    </div>
  ))
  .addParameters({ viewport: { defaultViewport: "iphone6" } })
  .add("Default", () => <Button {...defaultProps} />);
