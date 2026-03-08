
import React from "react";
import { storiesOf } from "@storybook/react";
import LessonCard from "./LessonCard";

const fullWidthProps = { 
  title: "Ear Training 101",
  description: "Listen and identify the played note based on a reference note",
  badges: [],
  isFullWidth: true
};

const halfWidthProps = {
  title: "Ear Training 101",
  description: "Listen and identify the played note based on a reference note",
  badges: [],
  isFullWidth: false
};

storiesOf("LessonCard", module)
  .addDecorator(story => (
    <div className="App" style={{ backgroundColor: "#f1f1f1", display: "flex", justifyContent: "center", alignItems: "center" }}>
      {story()}
    </div>
  ))
  .addParameters({ viewport: { defaultViewport: "iphone6" } })
  .add("full width", () => <LessonCard {...fullWidthProps} />)
  .add("half width", () => <LessonCard {...halfWidthProps} />);
