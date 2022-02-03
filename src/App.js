import {useWindowWidth} from '@react-hook/window-size'
import './scss/style.scss';
import Sidebar from "./components/Sidebar";
import DashboardApp from "./components/DashboardApp";

import Lottie from "lottie-react";
import bubbles from './assets/bubbles.json';

import { useTranslation, Trans } from 'react-i18next';

function App() {
    const { t } = useTranslation();
    const windowWidth = useWindowWidth();

    return (
        <>
            <div className="dashboard">
                <div className="dashboard_bg">
                    <Lottie animationData={bubbles}
                            loop="loop"
                            autoplay="autoplay"
                            width="100%"
                            height="100%"
                    />
                </div>
                <Sidebar windowWidth={windowWidth}/>
                <DashboardApp windowWidth={windowWidth} />
            </div>
            <p>
                <Trans i18nKey="description.part1">
                    Edit <code>src/App.js</code> and save to reload.
                </Trans>
            </p>
        </>
    )
}

export default App;
