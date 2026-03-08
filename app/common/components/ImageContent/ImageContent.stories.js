
import React from "react";
import { storiesOf } from "@storybook/react";
import ImageContent from "./ImageContent";

const defaultProps = {};

storiesOf("ImageContent", module)
  .addDecorator(story => (
    <div className="App">
      {story()}
    </div>
  ))
  .addParameters({ viewport: { defaultViewport: "iphone6" } })
  .add("Default", () => <ImageContent {...defaultProps} />);
