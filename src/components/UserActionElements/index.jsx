import './index.scss';
import {IoMdNotificationsOutline} from "react-icons/io";
import {FiMail} from "react-icons/fi";
import {AiOutlineSearch} from "react-icons/ai";

function UserActionElements() {
    return (
        <ul className="navbar_info">
            <li className="navbar_info-item navbar_info-item--notification">
                <a className="link" href="#">
                    <IoMdNotificationsOutline />
                </a>
            </li>
            <li className="navbar_info-item navbar_info-item--message">
                <a className="link" href="#">
                    <FiMail />
                </a>
            </li>
            <li className="navbar_info-item">
                <form className="navbar_info-item_form" action="#" method="post">
                    <input className="field" type="search" placeholder="Search"/>
                    <button className="btn" type="submit">
                        <AiOutlineSearch />
                    </button>
                </form>
            </li>
        </ul>
    )
}

export default UserActionElements;