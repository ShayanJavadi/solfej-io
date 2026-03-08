
import React from "react";
import { storiesOf } from "@storybook/react";
import CustomExerciseChooseCategoryScreen from "./CustomExerciseChooseCategoryScreen";

const defaultProps = {};

storiesOf("CustomExerciseChooseCategoryScreen", module)
  .addDecorator(story => (
    <div className="App">
      {story()}
    </div>
  ))
  .addParameters({ viewport: { defaultViewport: "iphone6" } })
  .add("Default", () => <CustomExerciseChooseCategoryScreen {...defaultProps} />);
