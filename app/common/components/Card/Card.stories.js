
import React from "react";
import { storiesOf } from "@storybook/react";
import Card from "./Card";

const defaultProps = {};

storiesOf("Card", module)
  .addDecorator(story => (
    <div className="App">
      {story()}
    </div>
  ))
  .addParameters({ viewport: { defaultViewport: "iphone6" } })
  .add("Default", () => <Card {...defaultProps} />);
