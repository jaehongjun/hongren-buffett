import { STACK_TRADE, TRADE_COIN_SAVE, INIT_TRADE } from "./actions";
import { saveStoreStackMaximum } from "../../constants";

const initialState = {
  detect: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case STACK_TRADE: {
      let pushData;
      if (state.detect[action.payload.code] === undefined) {
        pushData = [action.payload];
      } else {
        if (
          state.detect[action.payload.code].length === saveStoreStackMaximum
        ) {
          state.detect[action.payload.code].shift();
        }
        pushData = state.detect[action.payload.code].concat(action.payload);
      }
      return {
        ...state,
        detect: { ...state.detect, [action.payload.code]: pushData },
      };
    }
    case TRADE_COIN_SAVE:
      return {
        ...state,
        tradeCoin: action.payload,
      };
    case INIT_TRADE:
      return {
        ...initialState,
      };

    default:
      return state;
  }
};

export default reducer;
