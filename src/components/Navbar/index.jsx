import './index.scss';

import {VscArrowSwap} from "react-icons/vsc";
import {BsDot} from "react-icons/bs";
import UserActionElements from "../UserActionElements";

import avatar from '../../assets/avatar.jpg'

export default function Navbar({windowWidth}) {
    return (
        <nav className="navbar">
            <div className="navbar_panel">
                <div className="navbar_panel-avatar">
                    <img src={avatar} alt="avatar"/>
                </div>
                <div className="navbar_panel-info">
                    <h4 className="navbar_panel-info_name">Rose Reilly</h4>
                    <span className="navbar_panel-info_status">
                        <span className="indicator">
                            <BsDot/>
                        </span>
                        <span className="text">Online</span>
                    </span>
                </div>
            </div>
            <a className="navbar_btn" href="#">
                <span className="icon">
                      <VscArrowSwap/>
                </span>
                Quick Transactions
            </a>
            {windowWidth > 991.98 ? <UserActionElements /> : null}
        </nav>
    )
}