import React from "react";
import { storiesOf } from "@storybook/react";
import NoteButton from "./NoteButton";

const defaultProps = {
  noteName: "Ab", size: 200 
};

const activeProps = {
  noteName: "Ab", size: 200, isActive: true
};

storiesOf("NoteButton", module)
  .addDecorator(story => (
    <div className="App">
      {story()}
    </div>
  ))
  .addParameters({ viewport: { defaultViewport: "iphone6" } })
  .add("Default", () => <NoteButton {...defaultProps} />)
  .add("Active", () => <NoteButton {...activeProps} />);