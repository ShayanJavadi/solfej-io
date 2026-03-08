import React from "react";
import { storiesOf } from "@storybook/react";
import Header from "./Header";

const defaultProps = {
  headerLeftNode: <p>hi</p>, headerRightNode: <p>bye</p> 
};

storiesOf("Header", module)
  .addDecorator(story => (
    <div className="App">
      {story()}
    </div>
  ))
  .addParameters({ viewport: { defaultViewport: "iphone6" } })
  .add("Default", () => <Header {...defaultProps} />);