import {useState} from "react";
import './scss/style.scss';
import Sidebar from "./components/Sidebar";
import DashboardApp from "./components/DashboardApp";

function App() {
    const [windowWidth, updateWidth] = useState(0);

    window.addEventListener('resize', () => {
        updateWidth(() => window.innerWidth)
    })

    return (
        <>
            <div className="dashboard">
                <Sidebar windowWidth={windowWidth} />
                <DashboardApp windowWidth={windowWidth} />
            </div>
            <div className="shape shape--1"></div>
            <div className="shape shape--2"></div>
            <div className="shape shape--3"></div>
        </>
    );
}

export default App;
