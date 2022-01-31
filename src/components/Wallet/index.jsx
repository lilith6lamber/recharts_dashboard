import {FiRefreshCcw} from "react-icons/fi";
import {useDrag} from 'react-dnd';
import {useState, useEffect} from "react";


export default function Wallet(props){
    const {id, balance, name, exchange, image, base} = props;
    const [exchangeBalance, updateExchange] = useState(exchange)

    function updateBalance() {
        fetch(`https://api.coingecko.com/api/v3/exchange_rates`)
            .then(response => response.json())
            .then(data => {
                for (let key in data.rates) {
                    if (key === id) {
                        let value = data.rates[key].value;
                        updateExchange(() => {
                            return (value * parseFloat(balance)).toFixed(2)
                        })
                    }
                }
            })
            .catch(err => {
                console.error(err);
            })
    }

    useEffect(() => {
        updateBalance();
    })

    return (
        <li key={name} className="wallets_list-item">
            <div className="wallets_list-item_wrapper link">
                <a className="updateTrigger" href="#">
                    <FiRefreshCcw
                        onClick={updateBalance}
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
                                        <span className="highlight">{id}</span>{exchangeBalance}
                                  </span>
                            </span>
                      </span>
            </div>
        </li>
    )
}
