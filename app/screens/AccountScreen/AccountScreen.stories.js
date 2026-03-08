
import React from "react";
import { storiesOf } from "@storybook/react";
import AccountScreen from "./AccountScreen";

const defaultProps = {};

storiesOf("AccountScreen", module)
  .addDecorator(story => (
    <div className="App">
      {story()}
    </div>
  ))
  .addParameters({ viewport: { defaultViewport: "iphone6" } })
  .add("Default", () => <AccountScreen {...defaultProps} />);
