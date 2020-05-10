import React, { useState, useEffect } from "react";
import SocketHook from "../../hooks/SocketHook";

const Main = () => {
  const [socketSwitch, setSocketSwitch] = useState(false);
  SocketHook(socketSwitch);

  const socketHandler = () => {
    setSocketSwitch(!socketSwitch);
  };

  return (
    <div>
      <button onClick={socketHandler}>{`Socket 스위치 ${String(
        socketSwitch
      )}`}</button>
    </div>
  );
};

export default Main;
