
import React from "react";
import { storiesOf } from "@storybook/react";
import ReminderSlide from "./ReminderSlide";

const defaultProps = {};

storiesOf("ReminderSlide", module)
  .addDecorator(story => (
    <div className="App">
      {story()}
    </div>
  ))
  .addParameters({ viewport: { defaultViewport: "iphone6" } })
  .add("Default", () => <ReminderSlide {...defaultProps} />);
