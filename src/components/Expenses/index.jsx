import './index.scss';

import {BsThreeDots} from "react-icons/bs";
import amazon from '../../assets/expenseLogo1.png';
import spotify from '../../assets/expenseLogo2.png';
import netflix from '../../assets/expenseLogo3.png';
import adobe from '../../assets/expenseLogo4.png';
import itunes from '../../assets/expenseLogo5.png';
import airbnb from '../../assets/expenseLogo6.png';
import google from '../../assets/expenseLogo7.png';

export default function Expenses() {
    const expensesDB = [
        {
            id: "amazon",
            img: amazon,
            moneySpent: "-$5K"
        },
        {
            id: "spotify",
            img: spotify,
            moneySpent: "-$40"
        },
        {
            id: "netflix",
            img: netflix,
            moneySpent: "-$1K"
        },
        {
            id: "adobe",
            img: adobe,
            moneySpent: "-$20K"
        },
        {
            id: "itunes",
            img: itunes,
            moneySpent: "-$64"
        },
        {
            id: "airbnb",
            img: airbnb,
            moneySpent: "-$150"
        },
        {
            id: "google",
            img: google,
            moneySpent: "-$70"
        }
    ]

    return (
        <div className="expenses">
            <div className="expenses_info">
                <h4 className="expenses_info-title">Expenses</h4>
                <a className="link link--circle" href="#">
                        <span className="icon">
                        <BsThreeDots/>
                    </span>
                </a>
            </div>
            <ul className="expenses_list">
                {
                    expensesDB.map((item) => {
                        const {id, img, moneySpent} = item;
                        return (
                            <li key={id} className="expenses_list-item">
                                <a className="expenses_list-item_wrapper link" href="#">
                                    <span className="media">
                                        <img src={img} alt="id"/>
                                    </span>
                                    <span className="main">
                                        <span className="main_title">{id}</span>
                                        <span className="main_total">{moneySpent}</span>
                                    </span>
                                </a>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}