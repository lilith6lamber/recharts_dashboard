import Wallet from "../Wallet";
import {useState} from "react";

import './index.scss';
import {BsThreeDots} from "react-icons/bs";
import {RiAddCircleLine} from "react-icons/ri";
import {AiOutlineEdit, AiOutlineSave} from "react-icons/ai";
import wallet1 from '../../assets/walletusd.svg';
import wallet2 from '../../assets/walleteur.svg';
import wallet3 from '../../assets/walletgbp.svg';


const walletsData = [
    {
        name: "BTC (Bitcoin) USD",
        balance: "1777.10",
        exchange: 0,
        image: wallet1,
        base: "btc",
        id: "usd",
    },
    {
        name: "BTC (Bitcoin) EUR",
        balance: "4251.51",
        exchange: 0,
        image: wallet2,
        base: "btc",
        id: "eur"
    },
    {
        name: "BTC (Bitcoin) GBP",
        balance: "105.19",
        exchange: 0,
        image: wallet3,
        base: "btc",
        id: "gbp"
    }
];

export default function Wallets() {
    const [isEditing, changeStatus] = useState(false);

    function handleEdit() {
        changeStatus(!isEditing);
    }

    return (
        <div className="wallets">
            <div className="wallets_info section-header">
                <h4 className="wallets_info-title">Wallets
                    {
                        isEditing ?
                            <span className="icon" id="walletsSaveTrigger" onClick={handleEdit}>
                                <AiOutlineSave/>
                            </span>
                            :
                            <span className="icon" id="walletsEditTrigger" onClick={handleEdit}>
                                <AiOutlineEdit/>
                            </span>
                    }
                </h4>
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
                            exchange,
                        } = item;
                        return (
                            <Wallet
                                key={name}
                                name={name}
                                balance={balance}
                                exchange={exchange}
                                image={image}
                                id={id}
                                base={base}
                            />
                        )
                    })
                }
                <li key="walletNew" className="wallets_list-item walletNew">
                    <a className="link" href="#">
                        <RiAddCircleLine className="icon"/>
                    </a>
                </li>
            </ul>
        </div>
    )
}
