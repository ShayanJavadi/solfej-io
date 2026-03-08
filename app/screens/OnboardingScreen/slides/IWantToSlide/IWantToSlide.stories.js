
import React from "react";
import { storiesOf } from "@storybook/react";
import IWantToSlide from "./IWantToSlide";

const defaultProps = {};

storiesOf("IWantToSlide", module)
  .addDecorator(story => (
    <div className="App">
      {story()}
    </div>
  ))
  .addParameters({ viewport: { defaultViewport: "iphone6" } })
  .add("Default", () => <IWantToSlide {...defaultProps} />);
