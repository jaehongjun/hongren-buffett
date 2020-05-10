import {
  checkSelfTradePrice,
  checkSelfTrade,
  checkTodayRise,
} from "./constants";

export const buyCheckFilter = (list) => {
  const priceCheck = list.filter((item) => {
    return (
      item.trade_price * item.trade_volume < checkSelfTradePrice &&
      (item.trade_price / item.prev_closing_price - 1) * 100 < checkTodayRise
    );
  });
  if (priceCheck.length < checkSelfTrade) return false;
  return true;
};
