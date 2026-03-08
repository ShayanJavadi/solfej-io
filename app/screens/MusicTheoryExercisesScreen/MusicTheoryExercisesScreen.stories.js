
import React from "react";
import { storiesOf } from "@storybook/react";
import MusicTheoryExercisesScreen from "./MusicTheoryExercisesScreen";

const defaultProps = {};

storiesOf("MusicTheoryExercisesScreen", module)
  .addDecorator(story => (
    <div className="App">
      {story()}
    </div>
  ))
  .addParameters({ viewport: { defaultViewport: "iphone6" } })
  .add("Default", () => <MusicTheoryExercisesScreen {...defaultProps} />);
