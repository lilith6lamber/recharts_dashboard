import {Component} from "react";

import './index.scss';

import {BsThreeDots} from "react-icons/bs";
import wallet1 from '../../assets/wallet1.png';
import wallet2 from '../../assets/wallet2.png';

class Wallets extends Component {
    state = {
        wallets: [
            {
                name: "BTC (Bitcoin) USD",
                balance: "1777.10",
                usd: 0,
                image: wallet1,
                id: "usd"
            },
            {
                name: "BTC (Bitcoin) EUR",
                balance: "4251.51",
                eur: 0,
                image: wallet2,
                id: "eur"
            },
        ]
    }

    updateBalance = () => {
        this.state.wallets.map((wallet) => {
            const {balance, id} = wallet;
            return fetch(`https://api.coingecko.com/api/v3/exchange_rates`)
                .then(response => response.json())
                .then(data => {
                    for (let key in data.rates) {
                        if (key === id) {
                            let value = data.rates[key].value;
                            for (let key in wallet) {
                                if (key === id) {
                                    this.setState(() => {wallet[key] = (value * parseFloat(balance)).toFixed(2)})
                                }
                            }
                        }
                    }
                })
                .catch(err => {
                    console.error(err);
                })
        })
    }

    componentDidMount() {
        this.updateBalance();
    }

    render() {
        return (
            <div className="wallets">
                <div className="wallets_info">
                    <h4 className="wallets_info-title">Wallets</h4>
                    <span className="icon">
                        <BsThreeDots/>
                    </span>
                </div>
                <ul className="wallets_list">
                    {
                        this.state.wallets.map((wallet) => {
                            const {image, name, balance} = wallet;
                            return (
                                <li className="wallets_list-item">
                                    <div className="media">
                                        <img src={image} alt="icon"/>
                                    </div>
                                    <div className="main">
                                        <h3 className="main_title">{name}</h3>
                                        <div className="main_balance">
                                            <h4 className="main_balance-title">Balance</h4>
                                            <span className="main_balance-total">{balance}</span>
                                        </div>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default Wallets;