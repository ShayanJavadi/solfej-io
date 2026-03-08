
import React from "react";
import { storiesOf } from "@storybook/react";
import SubHeader from "./SubHeader";

const defaultProps = {};

storiesOf("SubHeader", module)
  .addDecorator(story => (
    <div className="App">
      {story()}
    </div>
  ))
  .addParameters({ viewport: { defaultViewport: "iphone6" } })
  .add("Default", () => <SubHeader {...defaultProps} />);
