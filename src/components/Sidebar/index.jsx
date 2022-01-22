import './index.scss';
import {SiGoogleanalytics} from "react-icons/si";
import {BiNews, BiRocket} from "react-icons/bi";
import {FaWallet} from "react-icons/fa";
import {AiFillSetting, AiFillAppstore} from "react-icons/ai";
import {BsCashStack} from "react-icons/bs";
import {MdAccountCircle} from "react-icons/md";

export default function Sidebar() {

    const links = [
        {
            title: "Dashboard",
            icon: SiGoogleanalytics,
        },
        {
            title: "Buy / Cell",
            icon: AiFillAppstore,
        },
        {
            title: "News",
            icon: BiNews,
        },
        {
            title: "Send Money",
            icon: BiRocket,
        },
        {
            title: "Deposit",
            icon: BsCashStack,
        },
        {
            title: "Transactions",
            icon: FaWallet,
        },
        {
            title: "Account",
            icon: MdAccountCircle,
        },
        {
            title: "Settings",
            icon: AiFillSetting,
        },
    ]

    return (
        <div className="sidebar">
            <div className="sidebar_brand">
                <h2 className="sidebar_brand-name">Fin<span className="highlight">Check</span></h2>
            </div>
            <ul className="sidebar_links">
                {
                    links.map((link) => {
                        const {title} = link;

                        return <li key={title.toLowerCase()} className="sidebar_links-item">
                            <a className="link" href="#">
                                <span className="icon">
                                   {<link.icon />}
                                </span>
                                {title}
                            </a>
                        </li>
                    })
                }
            </ul>
        </div>
    )
}