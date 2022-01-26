import {GrUpdate} from "react-icons/gr";
import {useDrag} from 'react-dnd';

export default function Wallet(props) {
    const {
        name,
        balance,
        exchange,
        image,
        id,
        base,
        setBalance
    } = props;

    return (
        <li key={name} className="wallets_list-item">
            <div className="wallets_list-item_wrapper link">
                <a className="updateTrigger" href="#">
                    <GrUpdate
                        onClick={setBalance}
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
                                        <span className="highlight">{id}</span>{exchange}
                                  </span>
                            </span>
                      </span>
            </div>
        </li>
    )
}