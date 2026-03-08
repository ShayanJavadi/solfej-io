
import React from "react";
import { storiesOf } from "@storybook/react";
import LessonCategoryTile from "./LessonCategoryTile";
import { primary } from "../../consts/colors";

const defaultProps = {
  title: "Ear Trainig",
  backgroundColor: primary
};

storiesOf("LessonCategoryTile", module)
  .addDecorator(story => (
    <div className="App">
      {story()}
    </div>
  ))
  .addParameters({ viewport: { defaultViewport: "iphone6" } })
  .add("Default", () => <LessonCategoryTile {...defaultProps} />);
