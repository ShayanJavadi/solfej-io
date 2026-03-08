
import React from "react";
import { storiesOf } from "@storybook/react";
import MusicianLevelSlide from "./MusicianLevelSlide";

const defaultProps = {};

storiesOf("MusicianLevelSlide", module)
  .addDecorator(story => (
    <div className="App">
      {story()}
    </div>
  ))
  .addParameters({ viewport: { defaultViewport: "iphone6" } })
  .add("Default", () => <MusicianLevelSlide {...defaultProps} />);
