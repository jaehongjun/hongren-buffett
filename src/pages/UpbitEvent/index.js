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
            Axios.get('https://ccx.upbit.com/api/v1/marketing/event/detail?uuid=36cdd133-767a-4b08-8801-60128014035f').then(result => {

                // console.log(result.data) 
                const { data } = result


                if (data.currency !== "" && data.currency !== localStorage.getItem("currency")) {
                    console.log(data.currency, localStorage.getItem("currency"), data.currency !== localStorage.getItem("currency"));
                    localStorage.setItem('currency', data.currency);
                    console.log(data);
                    Axios.post(`${SERVER_URL}/v1/event-trade`, { market: data.market })
                }

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
