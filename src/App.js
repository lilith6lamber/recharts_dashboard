import './scss/style.scss';
import Sidebar from "./components/Sidebar";
import DashboardApp from "./components/DashboardApp";

function App() {
    return (
        <>
            <div className="dashboard">
                <Sidebar />
                <DashboardApp />
            </div>
            <div className="shape shape--1"></div>
            <div className="shape shape--2"></div>
            <div className="shape shape--3"></div>
        </>
    );
}

export default App;
