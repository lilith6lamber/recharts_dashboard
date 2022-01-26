import './index.scss';
import {SiGoogleanalytics} from "react-icons/si";
import {BiNews, BiRocket} from "react-icons/bi";
import {FaWallet} from "react-icons/fa";
import {AiFillSetting, AiFillAppstore} from "react-icons/ai";
import {BsCashStack} from "react-icons/bs";
import {MdAccountCircle} from "react-icons/md";
import {CgMenuGridO} from "react-icons/cg";
import {Offcanvas, OffcanvasBody} from "react-bootstrap";
import {useState} from "react";
import UserActionElements from "../UserActionElements";

export default function Sidebar({windowWidth}) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const toggleShow = () => setShow((s) => !s);

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
            <div className="sidebar_panel">
                <h2 className="sidebar_panel-brand">Fin<span className="highlight">Check</span></h2>
                {windowWidth < 991.98 ? <UserActionElements/> : null}
                <a className="sidebar_panel-trigger" href="#" onClick={toggleShow}>
                    <CgMenuGridO />
                </a>
            </div>
            <Offcanvas
                className="sidebar_links"
                placement="start"
                show={show}
                onHide={handleClose}
            >
                <OffcanvasBody as="ul" className="sidebar_links-menu">
                    {
                        links.map((link) => {
                            const {title} = link;

                            return <li key={title.toLowerCase()} className="sidebar_links-menu_item">
                                <a className="link" href="#">
                                <span className="icon">
                                   {<link.icon />}
                                </span>
                                    {title}
                                </a>
                            </li>
                        })
                    }
                </OffcanvasBody>
            </Offcanvas>
        </div>
    )
}