import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  STACK_TRADE_ACTIONS,
  TRADE_COIN_SAVE_ACTIONS,
  INIT_TRADE_ACTIONS,
  GO_TO_SHOPING_ACTIONS,
} from "../store/detect/actions";
import { DETECT_COIN_LIST } from "../constants";
import { buyCheckFilter } from "../utils";

const SocketHook = (socketSwitch) => {
  const dispatch = useDispatch();
  const { detect, tradeCoin } = useSelector((state) => state.detect);
  const [trade, setTrade] = useState();
  const [blob, setBlob] = useState(false);

  const reader = new FileReader();
  reader.addEventListener("loadend", (e) => {
    const text = e.srcElement.result;
    setTrade(text);
  });

  useEffect(() => {
    const subscribe = [
      { ticket: "DETECT_TICKET_TEST_JJH" },
      { type: "trade", codes: DETECT_COIN_LIST },
    ];

    const ws = new WebSocket("wss://api.upbit.com/websocket/v1");
    ws.binaryType = "blob";

    ws.onopen = () => {
      socketSwitch && ws.send(JSON.stringify(subscribe));
    };
    ws.onmessage = (event) => {
      setBlob(event.data);
    };
    ws.onclose = () => {
      ws.close();
    };

    setInterval(() => {
      dispatch(INIT_TRADE_ACTIONS());
    }, 1000 * 60 * 10);

    return () => {
      ws.close();
    };
  }, [dispatch, socketSwitch]);

  useEffect(() => {
    if (trade) {
      const result = JSON.parse(trade);
      dispatch(STACK_TRADE_ACTIONS(result));
      dispatch(TRADE_COIN_SAVE_ACTIONS(result.code));
    }
  }, [dispatch, trade]);

  useEffect(() => {
    if (blob) {
      reader.readAsText(blob);
    }
  }, [blob, reader]);

  useEffect(() => {
    if (detect[tradeCoin]) {
      if (buyCheckFilter(detect[tradeCoin])) {
        if (!JSON.parse(localStorage.getItem(detect[tradeCoin][0].code))) {
          console.log(detect[tradeCoin][0].code);

          localStorage.setItem(
            detect[tradeCoin][0].code,
            JSON.stringify(detect[tradeCoin][0])
          );

          dispatch(GO_TO_SHOPING_ACTIONS.INDEX(detect[tradeCoin][0]));
        }
      }
    }
  }, [detect, dispatch, tradeCoin]);

  return detect;
};

export default SocketHook;
