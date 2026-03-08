
import React from "react";
import { storiesOf } from "@storybook/react";
import NoteDistancesExerciseScreen from "./NoteDistancesExerciseScreen";

const defaultProps = {};

storiesOf("NoteDistancesExerciseScreen", module)
  .addDecorator(story => (
    <div className="App">
      {story()}
    </div>
  ))
  .addParameters({ viewport: { defaultViewport: "iphone6" } })
  .add("Default", () => <NoteDistancesExerciseScreen {...defaultProps} />);
