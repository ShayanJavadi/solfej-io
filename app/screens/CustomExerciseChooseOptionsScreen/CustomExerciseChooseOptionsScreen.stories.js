
import React from "react";
import { storiesOf } from "@storybook/react";
import CustomExerciseChooseOptionsScreen from "./CustomExerciseChooseOptionsScreen";

const defaultProps = {};

storiesOf("CustomExerciseChooseOptionsScreen", module)
  .addDecorator(story => (
    <div className="App">
      {story()}
    </div>
  ))
  .addParameters({ viewport: { defaultViewport: "iphone6" } })
  .add("Default", () => <CustomExerciseChooseOptionsScreen {...defaultProps} />);
