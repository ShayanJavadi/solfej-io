import { routerMiddleware } from "connected-react-router";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/analytics";
import { createBrowserHistory } from "history";
import { getFirebase } from "react-redux-firebase";
import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import rootReducer from "./reducers";

const firebaseConfig = {
  apiKey: "AIzaSyDWd1kjECGs0aBfV30yQACAFwDGMGPRp6Q",
  authDomain: "solfej-6af46.firebaseapp.com",
  databaseURL: "https://solfej-6af46.firebaseio.com",
  projectId: "solfej-6af46",
  storageBucket: "solfej-6af46.appspot.com",
  messagingSenderId: "254397733603",
  appId: "1:254397733603:web:9cb35236ac122f683e03d6",
  measurementId: "G-RFMCQZ0S8Q"
};

// Guard against double-init when Gatsby hot-reloads
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const history = createBrowserHistory({ basename: "/app" });

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["customExercises"]
};

const persistedReducer = persistReducer(persistConfig, rootReducer(history));

const store = createStore(
  persistedReducer,
  {},
  compose(
    applyMiddleware(
      routerMiddleware(history),
      thunk.withExtraArgument({ getFirebase })
    )
  )
);

export const persistor = persistStore(store);

const firebaseProviderConfig = {
  userProfile: "users",
};

export const firebaseProviderProps = {
  firebase,
  config: firebaseProviderConfig,
  dispatch: store.dispatch,
};

export default store;
