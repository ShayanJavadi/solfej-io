const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const admin = require("firebase-admin");

if (!admin.apps.length) {
  const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://solfej-6af46.firebaseio.com",
  });
}

const db = admin.database();

async function setSubscriptionActive(uid, active) {
  await db.ref(`users/${uid}/stripeSubscriptionActive`).set(active);
}

async function getFirebaseUIDFromSubscription(subscriptionId) {
  const subscription = await stripe.subscriptions.retrieve(subscriptionId);
  return subscription.metadata.firebaseUID;
}

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  const sig = event.headers["stripe-signature"];
  let stripeEvent;

  try {
    stripeEvent = stripe.webhooks.constructEvent(
      event.body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (err) {
    console.error("Webhook signature verification failed:", err.message);
    return { statusCode: 400, body: `Webhook Error: ${err.message}` };
  }

  try {
    switch (stripeEvent.type) {
      case "checkout.session.completed": {
        const session = stripeEvent.data.object;
        const uid = session.metadata.firebaseUID;
        if (uid) {
          await setSubscriptionActive(uid, true);
        }
        break;
      }

      case "customer.subscription.updated": {
        const subscription = stripeEvent.data.object;
        const uid = subscription.metadata.firebaseUID;
        if (uid) {
          const isActive = ["active", "trialing"].includes(subscription.status);
          await setSubscriptionActive(uid, isActive);
        }
        break;
      }

      case "customer.subscription.deleted": {
        const subscription = stripeEvent.data.object;
        const uid = subscription.metadata.firebaseUID;
        if (uid) {
          await setSubscriptionActive(uid, false);
        }
        break;
      }

      default:
        console.log(`Unhandled event type: ${stripeEvent.type}`);
    }
  } catch (error) {
    console.error("Webhook handler error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Webhook handler failed" }),
    };
  }

  return { statusCode: 200, body: JSON.stringify({ received: true }) };
};
