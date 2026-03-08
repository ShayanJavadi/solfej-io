
import React from "react";
import { storiesOf } from "@storybook/react";
import SubscriptionScreen from "./SubscriptionScreen";

const defaultProps = {};

storiesOf("SubscriptionScreen", module)
  .addDecorator(story => (
    <div className="App">
      {story()}
    </div>
  ))
  .addParameters({ viewport: { defaultViewport: "iphone6" } })
  .add("Default", () => <SubscriptionScreen {...defaultProps} />);
