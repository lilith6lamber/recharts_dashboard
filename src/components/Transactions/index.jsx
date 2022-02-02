import './index.scss';

import Chart from "../Chart";

const data = [
    {
        "Data 2": 2000,
        "Data 1": 2400,
    },
    {
        "Data 2": 4000,
        "Data 1": 1398,
    },
    {
        "Data 2": 5000,
        "Data 1": 12800,
    },
    {
        "Data 2": 8780,
        "Data 1": 3908,
    },
    {
        "Data 2": 9890,
        "Data 1": 4800,
    },
    {
        "Data 2": 11390,
        "Data 1": 3800,
    },
    {
        "Data 2": 3490,
        "Data 1": 4300,
    },
];

export default function Transactions() {
    return (
        <div className="transactions">
            <div className="transactions_info">
                <h3 className="transactions_info-title">Transactions</h3>
                <div className="transactions_info-detailed">
                    <div className="transactions_info-detailed_block">
                        <h5 className="title">You bought: </h5>
                        <span className="value">$140,74.01</span>
                    </div>
                    <div className="transactions_info-detailed_block">
                        <h5 className="title">You sold: </h5>
                        <span className="value">$347,735,011.14</span>
                    </div>
                </div>
            </div>
            <div className="transactions_details">
                <div className="transactions_details-block">
                    <h4 className="transactions_details-block_title">Statistics</h4>
                    <h4 className="transactions_details-block_subtitle">Up to 50%</h4>
                </div>
                <div className="transactions_details-block">
                    <button className="transactions_details-block_btn">Year</button>
                    <button className="transactions_details-block_btn">Month</button>
                </div>
            </div>
            <div className="transactions_visualizer">
                <Chart data={data} />
            </div>
        </div>
    )
}