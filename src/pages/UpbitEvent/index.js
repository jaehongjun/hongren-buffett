import React, { useState, useEffect, useCallback } from "react";
import Axios from 'axios'
import { SERVER_URL } from "../../constants";

const Main = () => {
    const [todayCoin, setTodayCoin] = useState('');
    const [startSwitch, setStartSwitch] = useState(false);

    const onClick = useCallback(() => {
        setStartSwitch(!startSwitch)
    }, [startSwitch])
    useEffect(() => {
        setInterval(() => {
            Axios.get('https://ccx.upbit.com/api/v1/marketing/events').then(result => {

                const { data: dataArray } = result

                dataArray.map((data) => {

                    if (data.currency !== "" && data.currency !== localStorage.getItem("currency") && data.currency !== "BTC") {
                        console.log(data.currency, localStorage.getItem("currency"), data.currency !== localStorage.getItem("currency"));
                        localStorage.setItem('currency', data.currency);
                        console.log(data);
                        Axios.post(`${SERVER_URL}/v1/event-trade`, { market: data.market })
                    }
                }
                )

            })
        }, 1000);
    }, [])
    return (
        <div>
            <button onClick={onClick}>{`Upbit Event ${String(
                startSwitch
            )}`}</button>
        </div>
    );
};

export default Main;
