import { Action, configureStore, ThunkAction, combineReducers } from "@reduxjs/toolkit";
import { createWrapper, HYDRATE } from "next-redux-wrapper";
import { counterSlice } from "../features/counterSlice";
import { kanyeSlice } from "../features/kanyeSlice";

export const reducer = (state, action) => {
  if (action.type === HYDRATE) {
    console.log("HYDRATE", action);
    return {
      ...state,
      ...action.payload,
    };
  }
  return combineReducers({
    [counterSlice.name]: counterSlice.reducer,
    [kanyeSlice.name]: kanyeSlice.reducer,
  })(state, action);
};

const store = () =>
  configureStore({
    reducer,
  });

export type AppStore = ReturnType<typeof store>;
export type AppDispatch = AppStore["dispatch"];
export type AppState = ReturnType<AppStore["getState"]>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action<string>>;

export const wrapper = createWrapper<AppStore>(store, {
  debug: process.env.NODE_ENV !== "production",
});
