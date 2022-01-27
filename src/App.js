import {useWindowWidth} from '@react-hook/window-size'
import './scss/style.scss';
import Sidebar from "./components/Sidebar";
import DashboardApp from "./components/DashboardApp";

function App() {
    const windowWidth = useWindowWidth();
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
    )
}

export default App;
