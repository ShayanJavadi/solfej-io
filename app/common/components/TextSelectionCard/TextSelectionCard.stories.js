
import React from "react";
import { storiesOf } from "@storybook/react";
import TextSelectionCard from "./TextSelectionCard";

const defaultProps = {};

storiesOf("TextSelectionCard", module)
  .addDecorator(story => (
    <div className="App">
      {story()}
    </div>
  ))
  .addParameters({ viewport: { defaultViewport: "iphone6" } })
  .add("Default", () => <TextSelectionCard {...defaultProps} />);
