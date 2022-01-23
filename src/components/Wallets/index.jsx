import {Component} from "react";

import './index.scss';

import {BsThreeDots} from "react-icons/bs";
import {GrUpdate} from "react-icons/gr";
import wallet1 from '../../assets/wallet1.png';
import wallet2 from '../../assets/wallet2.png';

class Wallets extends Component {
    state = {
        wallets: [
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
        ],

        requestProcessed: false,
    }

    updateBalance = () => {
        this.state.wallets.map((wallet) => {
            const {balance, id} = wallet;

                return fetch(`https://api.coingecko.com/api/v3/exchange_rates`)
                    .then(response => response.json())
                    .then(data => {
                        let {requestProcessed} = this.state;
                        for (let key in data.rates) {
                            if (key === id) {
                                let value = data.rates[key].value;
                                this.state.wallets.forEach((el) => {
                                    this.setState(() => {
                                        el.exchange = (value * parseFloat(balance)).toFixed(2)
                                    })
                                })
                                localStorage.setItem(key, wallet.exchange)
                            }
                        }
                    })
                    .catch(err => {
                        console.error(err);
                    })

        })
    }

    refreshBalance = (event) => {
        let key = event.target.dataset.target;
        localStorage.removeItem(key);
    }

    componentDidMount = () => {
        console.log('mount')
        this.updateBalance();
    }

    componentDidUpdate = () => {
        this.updateBalance();
    }

    render() {
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
                        this.state.wallets.map((wallet) => {
                            const {image, name, balance, exchange, base, id} = wallet;
                            return (
                                <li key={name} className="wallets_list-item">
                                    <div className="wallets_list-item_wrapper link">
                                        <a className="updateTrigger" href="#">
                                            <GrUpdate
                                                onClick={this.refreshBalance}
                                                data-target={id}
                                            />
                                        </a>
                                        <span className="media">
                                            <img src={image} alt="icon"/>
                                        </span>
                                        <span className="main">
                                            <span className="main_title">{name}</span>
                                            <span className="main_balance">
                                                <span className="main_balance-title">Balance</span>
                                                <span className="main_balance-total">
                                                    <span className="highlight">{base}</span>{balance}
                                                </span>
                                            </span>
                                            <span className="main_balance main_balance--exchange">
                                                <span className="main_balance-title">Exchange</span>
                                                <span className="main_balance-total">
                                                    <span className="highlight">{id}</span>{localStorage.getItem(id) ? localStorage.getItem(id) : 0}
                                                </span>
                                            </span>
                                        </span>
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