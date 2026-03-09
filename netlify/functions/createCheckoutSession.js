const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const PRICE_MAP = {
  price_annual: process.env.STRIPE_PRICE_ANNUAL,
  price_three_month: process.env.STRIPE_PRICE_THREE_MONTH,
  price_monthly: process.env.STRIPE_PRICE_MONTHLY,
};

const TRIAL_ELIGIBLE = ["price_annual", "price_three_month"];

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  try {
    const { priceId, uid } = JSON.parse(event.body);

    if (!priceId || !uid) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Missing priceId or uid" }),
      };
    }

    const stripePriceId = PRICE_MAP[priceId];
    if (!stripePriceId) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Invalid priceId" }),
      };
    }

    const origin = event.headers.origin || "https://solfej.io";

    const sessionParams = {
      mode: "subscription",
      payment_method_types: ["card"],
      line_items: [{ price: stripePriceId, quantity: 1 }],
      success_url: `${origin}/app?checkout=success`,
      cancel_url: `${origin}/app/free-trial`,
      metadata: { firebaseUID: uid },
      subscription_data: {
        metadata: { firebaseUID: uid },
      },
    };

    if (TRIAL_ELIGIBLE.includes(priceId)) {
      sessionParams.subscription_data.trial_period_days = 7;
    }

    const session = await stripe.checkout.sessions.create(sessionParams);

    return {
      statusCode: 200,
      body: JSON.stringify({ url: session.url }),
    };
  } catch (error) {
    console.error("Checkout session error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
