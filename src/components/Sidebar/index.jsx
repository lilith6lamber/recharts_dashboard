import './index.scss';
import {SiGoogleanalytics} from "react-icons/si";
import {BiNews, BiRocket} from "react-icons/bi";
import {FaWallet} from "react-icons/fa";
import {AiFillSetting, AiFillAppstore} from "react-icons/ai";
import {BsCashStack} from "react-icons/bs";
import {MdAccountCircle} from "react-icons/md";
import {CgMenuGridO} from "react-icons/cg";

import UserActionElements from "../UserActionElements";
import WeatherWidget from "../WeatherWidget";
import logo from '../../assets/logo.svg';
import { useTranslation } from 'react-i18next';

export default function Sidebar({windowWidth}) {
    const { t } = useTranslation();
    const links = [
        {
            title: t('nav.dashboard'),
            icon: SiGoogleanalytics,
        },
        {
            title:  t('nav.buy'),
            icon: AiFillAppstore,
        },
        {
            title:  t('nav.news'),
            icon: BiNews,
        },
        {
            title:  t('nav.send'),
            icon: BiRocket,
        },
        {
            title:  t('nav.deposit'),
            icon: BsCashStack,
        },
        {
            title:  t('nav.transactions'),
            icon: FaWallet,
        },
        {
            title:  t('nav.account'),
            icon: MdAccountCircle,
        },
        {
            title:  t('nav.settings'),
            icon: AiFillSetting,
        },
    ]

    function toggleShow() {
        document.querySelector('.sidebar_links').classList.toggle('show');
    }

    return (
        <div className="sidebar">
            <div className="sidebar_panel">
                <img className="sidebar_panel-logo" src={logo} alt="FinCheck"/>
                <h2 className="sidebar_panel-brand">Fin<span className="highlight">Check</span></h2>
                {windowWidth < 991.98 ? <UserActionElements/> : null}
                {windowWidth < 991.98 ?
                    <a className="sidebar_panel-trigger" href="#" onClick={toggleShow}>
                        <CgMenuGridO />
                    </a>
                    :
                    null
                }
            </div>
            <div
                className={windowWidth < 991.98 ? "sidebar_links offcanvas offcanvas-start" : "sidebar_links"}
            >
                <ul className="sidebar_links-menu">
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
                </ul>
            </div>
            {
                windowWidth < 991.98 ? null : <WeatherWidget/>
            }
        </div>
    )
}