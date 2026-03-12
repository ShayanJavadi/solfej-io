
import classNames from "classnames";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { MdClose } from "react-icons/md";
import Button from "../../common/components/Button/Button";
import HeaderText from "../../common/components/HeaderText";
import Pill from '../../common/components/Pill/Pill';
import Screen from "../../common/components/Screen/Screen";
import { HOME_SCREEN } from "../../common/consts/routes";
import config from "../../config";
import pricing1 from "./pricing-1.png";
import pricing2 from "./pricing-2.png";
import pricing3 from "./pricing-3.png";
import "./SubscriptionScreen.scss";
import { secondary } from '../../common/consts/colors';
import { TOS, PRIVACY_POLICY } from '../../common/consts/outboundLinks';
import { logPlanSelected, logCheckoutStarted, logCheckoutError, logCheckoutAbandoned } from "../../common/consts/analytics";

const { subscriptions } = config;

const STRIPE_PRICES = {
  annual: { label: "12 month plan", price: "$89.99", monthlyPrice: "$7.50", trialText: "1 week free trial", savingsText: "BEST VALUE! - Save 63%" },
  threeMonth: { label: "3 month plan", price: "$47.99", monthlyPrice: "$15.99", trialText: "1 week free trial", savingsText: "Save 20%" },
  monthly: { label: "1 month plan", price: "$19.99", monthlyPrice: "$19.99" },
};

const renderHeader = (props) => (
  <div className="header-container">
    <div
      onClick={
        () => {
          logCheckoutAbandoned("subscription_closed");
          props.isModal ?
            props.history.goBack() :
            props.history.push(HOME_SCREEN);
        }
      }
      className="close-button-container"
    >
      <MdClose
        size={22}
        color="#555"
      />
    </div>
    <HeaderText>
      GET FULL ACCESS
    </HeaderText>
  </div>
);

const renderCopy = () => (
  <div className="copy-container">
    <div className="copy-line">
      <div className="image-container">
        <img src={pricing1} alt="" />
      </div>
      <div className="text-container"><span>Unlimited access to over <b>80 interactive lessons</b> + new ones each month.</span></div>
    </div>
    <div className="copy-line">
      <div className="image-container">
        <img src={pricing2} alt="" />
      </div>
      <div className="text-container"><span><b>Become a better musician</b> - Learn music theory, ear training, and  rhythm.</span></div>
    </div>
    <div className="copy-line">
      <div className="image-container">
        <img src={pricing3} alt="" />
      </div>
      <div className="text-container"><span>See results faster through <b>daily personalized lessons</b>.</span></div>
    </div>
  </div>
);

const PLAN_IDS = ['price_annual', 'price_three_month', 'price_monthly'];

const RenderPricePlans = (selectedPrice, setSelectedPrice) => {
  const plans = [STRIPE_PRICES.annual, STRIPE_PRICES.threeMonth, STRIPE_PRICES.monthly];

  return (
    <div className="price-plans-container">
      {plans.map((plan, index) => (
        <div
          key={index}
          className={classNames("price-plan", selectedPrice === index && "active")}
          onClick={() => { logPlanSelected(PLAN_IDS[index]); setSelectedPrice(index); }}
        >
          {plan.savingsText && (
            <div className="deal-header">
              {plan.savingsText}
            </div>
          )}
          <div className="price-copy-container">
            <div className="price-plan-left">
              <h1>{plan.label}</h1>
              {plan.trialText && (
                <Pill
                  text={plan.trialText}
                  color={secondary}
                />
              )}
            </div>
            <div className="price-plan-right">
              <p className="total-price">{plan.price}</p>
              <p className="monthly-price">{plan.monthlyPrice} / month</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const renderButtons = (selectedPrice, auth) => {
  const plans = [STRIPE_PRICES.annual, STRIPE_PRICES.threeMonth, STRIPE_PRICES.monthly];
  const plan = plans[selectedPrice];

  const getPriceCopy = () => {
    if (selectedPrice === 0) return `Then ${plan.price} per year`;
    if (selectedPrice === 1) return `Then ${plan.price} per 3 months`;
    return '';
  };

  const handleSubscribe = async () => {
    try {
      const priceIds = ['price_annual', 'price_three_month', 'price_monthly'];
      logCheckoutStarted(priceIds[selectedPrice], plan.price);
      const response = await fetch('/.netlify/functions/createCheckoutSession', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          priceId: priceIds[selectedPrice],
          uid: auth.uid,
        }),
      });
      const { url } = await response.json();
      if (url) {
        window.location.href = url;
      }
    } catch (e) {
      logCheckoutError(e.message);
      console.error('Failed to create checkout session:', e);
    }
  };

  return (
    <div className="buttons-container">
      <div className={classNames("trial-copy", selectedPrice === 2 && "monthly")}>
        {selectedPrice !== 2 && <p className="bold">Start your 1 week free trial</p>}
        <p>{getPriceCopy()}</p>
      </div>
      <Button
        className="subscribe-button"
        text={selectedPrice === 2 ? "Subscribe Now" : "Try free and subscribe"}
        isTextCentered
        isSuccess
        onClick={handleSubscribe}
      />
    </div>
  );
};

const renderTos = () => (
  <div className="tos-container">
    <a href={TOS}>Terms & Conditions</a>
    <span>&bull;</span>
    <a href={PRIVACY_POLICY}>Privacy Policy</a>
  </div>
);

export default function SubscriptionScreen(props) {
  const [selectedPrice, setSelectedPrice] = useState(0);
  const { auth } = useSelector(({ firebase }) => ({
    auth: firebase.auth,
  }));

  return (
    <Screen className={classNames("subscription-screen", props.isModal && "is-modal")}>
      {renderHeader(props)}
      {renderCopy()}
      {RenderPricePlans(selectedPrice, setSelectedPrice)}
      {renderButtons(selectedPrice, auth)}
      {renderTos()}
    </Screen>
  );
}
