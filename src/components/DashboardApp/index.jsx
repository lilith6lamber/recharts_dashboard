import './index.scss';
import Navbar from "../Navbar";
import Wallets from "../Wallets";
import Expenses from "../Expenses";
import Transactions from "../Transactions";
import Overview from "../Overview";
import ActivityLog from "../ActivityLog";
import Converter from "../Converter";

export default function DashboardApp() {
    return (
        <div className="app">
            <Navbar />
            <div className="app_grid">
                <div className="app_grid-block">
                    <Wallets />
                    <Converter />
                    <Expenses />
                    <Transactions />
                </div>
                <div className="app_grid-block">
                    <Overview />
                    <ActivityLog />
                </div>
            </div>
        </div>
    )
}