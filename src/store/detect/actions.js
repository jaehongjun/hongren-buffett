import { createActionTypes, createActions } from "../createStore";

export const STACK_TRADE = "STACK_TRADE";
export const STACK_TRADE_ACTIONS = (payload) => {
  return { type: STACK_TRADE, payload };
};
export const TRADE_COIN_SAVE = "TRADE_COIN_SAVE";
export const TRADE_COIN_SAVE_ACTIONS = (payload) => {
  return { type: TRADE_COIN_SAVE, payload };
};
export const INIT_TRADE = "INIT_TRADE";
export const INIT_TRADE_ACTIONS = () => {
  return { type: INIT_TRADE };
};

export const GO_TO_SHOPING = "GO_TO_SHOPING";
export const GO_TO_SHOPING_TYPES = createActionTypes(GO_TO_SHOPING);
export const GO_TO_SHOPING_ACTIONS = createActions(GO_TO_SHOPING);
