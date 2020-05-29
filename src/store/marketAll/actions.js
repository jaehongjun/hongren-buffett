import { createActionTypes, createActions } from "../createStore";

export const GET_MARKET_ALL = "GET_MARKET_ALL";
export const GET_MARKET_ALL_TYPES = createActionTypes(GET_MARKET_ALL);
export const GET_MARKET_ALL_ACTIONS = createActions(GET_MARKET_ALL);
