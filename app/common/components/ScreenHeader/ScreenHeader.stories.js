
import React from "react";
import { storiesOf } from "@storybook/react";
import ScreenHeader from "./ScreenHeader";

const defaultProps = {
  title: "Solfej",
  subText: "Lorem Ipsum Bume Pro Axe",
  backgroundColor: "#FFB5B5",
  hasWhiteText: true
};

storiesOf("ScreenHeader", module)
  .addDecorator(story => (
    <div className="App">
      {story()}
    </div>
  ))
  .addParameters({ viewport: { defaultViewport: "iphone6" } })
  .add("Default", () => <ScreenHeader {...defaultProps} />);
