
import React from "react";
import { storiesOf } from "@storybook/react";
import CustomExerciseChooseSubCategoryScreen from "./CustomExerciseChooseSubCategoryScreen";

const defaultProps = {};

storiesOf("CustomExerciseChooseSubCategoryScreen", module)
  .addDecorator(story => (
    <div className="App">
      {story()}
    </div>
  ))
  .addParameters({ viewport: { defaultViewport: "iphone6" } })
  .add("Default", () => <CustomExerciseChooseSubCategoryScreen {...defaultProps} />);
