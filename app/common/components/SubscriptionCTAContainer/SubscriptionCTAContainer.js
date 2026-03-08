
import React from "react";
import classNames from "classnames";
import "./SubscriptionCTAContainer.scss";
import Card from "../Card";
import { SUBSCRIPTION_CAROUSEL_SCREEN_MODAL } from "../../consts/routes";
import Button from "../Button/Button";

export default function SubscriptionCTAContainer({ onClick, addMarginTop }) {
  const classes = classNames("subscription-ctacontainer", addMarginTop && "add-margin-top");
  
  return (
    <div className={classes}>
      <Card>
        <h2 style={{ fontSize: 20 }}>Unlock all lessons </h2>
        <Button
          isTextCentered
          isSuccess
          text="TRY FOR FREE"
          onClick={onClick}
        />
      </Card>
    </div>
  );
}
