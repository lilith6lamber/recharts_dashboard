import './index.scss';

import {VscArrowSwap} from "react-icons/vsc";
import {IoMdNotificationsOutline} from "react-icons/io";
import {FaSearch} from "react-icons/fa";
import {FiMail} from "react-icons/fi";

import avatar from '../../assets/avatar.jpg'

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar_panel">
                <div className="navbar_panel-avatar">
                    <img src={avatar} alt="avatar"/>
                </div>
                <div className="navbar_panel-info">
                    <h4 className="navbar_panel-info_name">Rose Reilly</h4>
                    <span className="navbar_panel-info_status">Online</span>
                </div>
            </div>
            <a className="navbar_btn" href="#">
                <span className="icon">
                      <VscArrowSwap/>
                </span>
                Quick Transactions
            </a>
            <ul className="navbar_info">
                <li className="navbar_info-item">
                    <a className="link" href="#">
                        <IoMdNotificationsOutline />
                    </a>
                </li>
                <li className="navbar_info-item">
                    <a className="link" href="#">
                        <FiMail />
                    </a>
                </li>
                <li className="navbar_info-item">
                    <form className="navbar_info-item_form" action="#" method="post">
                        <input className="field" type="search" placeholder="Search"/>
                        <button className="btn" type="submit">
                            <FaSearch />
                        </button>
                    </form>
                </li>
            </ul>
        </nav>
    )
}