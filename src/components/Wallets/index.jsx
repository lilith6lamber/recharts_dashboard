import {useDrag} from 'react-dnd'
import {useLayoutEffect, useState, useEffect} from "react";
import Wallet from "../Wallet";

import './index.scss';

import {BsThreeDots} from "react-icons/bs";

import wallet1 from '../../assets/wallet1.png';
import wallet2 from '../../assets/wallet2.png';
import data from "bootstrap/js/src/dom/data";

export default function Wallets() {
    const [walletsData, setData] = useState([
        {
            name: "BTC (Bitcoin) USD",
            balance: "1777.10",
            exchange: 0,
            image: wallet1,
            id: "usd",
            base: "btc"
        },
        {
            name: "BTC (Bitcoin) EUR",
            balance: "4251.51",
            exchange: 0,
            image: wallet2,
            id: "eur",
            base: "btc"
        },
    ]);

    function setBalance(id, balance) {
        fetch(`https://api.coingecko.com/api/v3/exchange_rates`)
            .then(response => response.json())
            .then(data => {
                for (let key in data.rates) {
                    if (key === id) {
                        let value = data.rates[key].value;
                        let exchangeValue = (value * parseFloat(balance)).toFixed(2);
                        localStorage.setItem(key, exchangeValue);
                    }
                }
            })
            .catch(err => {
                console.error(err);
            })
    }

    return (
        <div className="wallets">
            <div className="wallets_info">
                <h4 className="wallets_info-title">Wallets</h4>
                <a className="link link--circle" href="#">
                       <span className="icon">
                      <BsThreeDots/>
                 </span>
                </a>
            </div>
            <ul className="wallets_list">
                {
                    walletsData.map((item) => {
                        const {
                            name,
                            balance,
                            image,
                            id,
                            base,
                        } = item;
                        setBalance(id, balance);
                        return (
                            <Wallet
                                key={name}
                                name={name}
                                balance={balance}
                                exchange={localStorage.getItem(id)}
                                image={image}
                                id={id}
                                base={base}
                                // onClick={() => setBalance(id, balance)}
                            />
                        )
                    })
                }
            </ul>
        </div>
    )
}
