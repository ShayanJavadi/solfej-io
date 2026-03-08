
import React from "react";
import { storiesOf } from "@storybook/react";
import Container from "./Container";

const defaultProps = {};

storiesOf("Container", module)
  .addDecorator(story => (
    <div className="App">
      {story()}
    </div>
  ))
  .addParameters({ viewport: { defaultViewport: "iphone6" } })
  .add("Default", () => <Container {...defaultProps} />);
