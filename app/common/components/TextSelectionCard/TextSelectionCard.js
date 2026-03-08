
import React from "react";
import "./TextSelectionCard.scss";
import Card from "../Card";

export default function TextSelectionCard({
  backgroundColor, boxShadow, children, onClick, isDisabled
}) {
  return (
    <Card className="text-selection-card" style={{ backgroundColor, boxShadow, opacity: isDisabled && .3 }} onClick={isDisabled ? null : onClick}>
      <h2>{children}</h2>
    </Card>
  );
}
