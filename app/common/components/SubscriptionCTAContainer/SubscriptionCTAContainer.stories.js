
import React from "react";
import { storiesOf } from "@storybook/react";
import SubscriptionCTAContainer from "./SubscriptionCTAContainer";

const defaultProps = {};

storiesOf("SubscriptionCTAContainer", module)
  .addDecorator(story => (
    <div className="App">
      {story()}
    </div>
  ))
  .addParameters({ viewport: { defaultViewport: "iphone6" } })
  .add("Default", () => <SubscriptionCTAContainer {...defaultProps} />);
