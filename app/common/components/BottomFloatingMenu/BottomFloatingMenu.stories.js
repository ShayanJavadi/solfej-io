
import React from "react";
import { storiesOf } from "@storybook/react";
import BottomFloatingMenu from "./BottomFloatingMenu";

const defaultProps = {};

storiesOf("BottomFloatingMenu", module)
  .addDecorator(story => (
    <div className="App">
      {story()}
    </div>
  ))
  .addParameters({ viewport: { defaultViewport: "iphone6" } })
  .add("Default", () => <BottomFloatingMenu {...defaultProps} />);
