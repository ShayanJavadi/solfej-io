
import React from "react";
import { storiesOf } from "@storybook/react";
import Modal from "./Modal";

const defaultProps = {};

storiesOf("Modal", module)
  .addDecorator(story => (
    <div className="App">
      {story()}
    </div>
  ))
  .addParameters({ viewport: { defaultViewport: "iphone6" } })
  .add("Default", () => <Modal {...defaultProps} />);
