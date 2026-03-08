
import React from "react";
import { storiesOf } from "@storybook/react";
import TabNavigatorProvider from "./TabNavigatorProvider";

const defaultProps = {};

storiesOf("TabNavigatorProvider", module)
  .addDecorator(story => (
    <div className="App">
      {story()}
    </div>
  ))
  .addParameters({ viewport: { defaultViewport: "iphone6" } })
  .add("Default", () => <TabNavigatorProvider {...defaultProps} />);
