
import React from "react";
import { storiesOf } from "@storybook/react";
import SectionHeader from "./SectionHeader";

const defaultProps = {};

storiesOf("SectionHeader", module)
  .addDecorator(story => (
    <div className="App">
      {story()}
    </div>
  ))
  .addParameters({ viewport: { defaultViewport: "iphone6" } })
  .add("Default", () => <SectionHeader {...defaultProps} />);
