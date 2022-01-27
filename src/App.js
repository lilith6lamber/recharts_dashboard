import {Component} from "react";
import './scss/style.scss';
import Sidebar from "./components/Sidebar";
import DashboardApp from "./components/DashboardApp";

class App extends Component {
    state = {
        windowWidth: window.innerWidth
    }

    updateWidth() {
        this.setState({windowWidth: window.innerWidth})
    }

    componentDidMount() {
        this.updateWidth();
    }

    render () {
        const {windowWidth} = this.state;
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
}

export default App;
