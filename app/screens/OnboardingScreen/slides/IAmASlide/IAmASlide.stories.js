
import React from "react";
import { storiesOf } from "@storybook/react";
import IAmASlide from "./IAmASlide";

const defaultProps = {};

storiesOf("IAmASlide", module)
  .addDecorator(story => (
    <div className="App">
      {story()}
    </div>
  ))
  .addParameters({ viewport: { defaultViewport: "iphone6" } })
  .add("Default", () => <IAmASlide {...defaultProps} />);
