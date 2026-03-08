
import React from "react";
import { storiesOf } from "@storybook/react";
import EnharmonicNotesExerciseScreen from "./EnharmonicNotesExerciseScreen";

const defaultProps = {};

storiesOf("EnharmonicNotesExerciseScreen", module)
  .addDecorator(story => (
    <div className="App">
      {story()}
    </div>
  ))
  .addParameters({ viewport: { defaultViewport: "iphone6" } })
  .add("Default", () => <EnharmonicNotesExerciseScreen {...defaultProps} />);
