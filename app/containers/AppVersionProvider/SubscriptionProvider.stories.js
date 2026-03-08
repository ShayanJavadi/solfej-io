
import React from "react";
import { storiesOf } from "@storybook/react";
import SubscriptionProvider from "./SubscriptionProvider";

const defaultProps = {};

storiesOf("SubscriptionProvider", module)
  .addDecorator(story => (
    <div className="App">
      {story()}
    </div>
  ))
  .addParameters({ viewport: { defaultViewport: "iphone6" } })
  .add("Default", () => <SubscriptionProvider {...defaultProps} />);
