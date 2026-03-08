
import React from "react";
import { storiesOf } from "@storybook/react";
import Paragraph from "./Paragraph";

const defaultProps = {};

storiesOf("Paragraph", module)
  .addDecorator(story => (
    <div className="App">
      {story()}
    </div>
  ))
  .addParameters({ viewport: { defaultViewport: "iphone6" } })
  .add("Default", () => <Paragraph {...defaultProps} />);
