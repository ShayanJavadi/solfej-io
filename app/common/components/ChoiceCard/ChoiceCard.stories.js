
import React from "react";
import { storiesOf } from "@storybook/react";
import ChoiceCard from "./ChoiceCard";

const defaultProps = {};

storiesOf("ChoiceCard", module)
  .addDecorator(story => (
    <div className="App">
      {story()}
    </div>
  ))
  .addParameters({ viewport: { defaultViewport: "iphone6" } })
  .add("Default", () => <ChoiceCard {...defaultProps} />);
