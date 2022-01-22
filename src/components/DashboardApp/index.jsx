import './index.scss';
import Navbar from "../Navbar";
import Wallets from "../Wallets";

export default function DashboardApp() {
    return (
        <div className="app">
            <Navbar />
            <Wallets />
        </div>
    )
}