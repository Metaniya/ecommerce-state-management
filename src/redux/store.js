import { configureStore } from "@reduxjs/toolkit";

import {
  persistStore,
  persistReducer,
} from "redux-persist";

import storage from "redux-persist/es/storage";

import cartReducer from "./cartSlice";
import authReducer from "./authSlice";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  cart: cartReducer,
  auth: authReducer,
});

const persistConfig = {
  key: "root",
  storage: storage,
};

const persistedReducer = persistReducer(
  persistConfig,
  rootReducer
);

export const store = configureStore({
  reducer: persistedReducer,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor =
  persistStore(store);