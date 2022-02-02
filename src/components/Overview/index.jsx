import './index.scss';

import Chart from "../Chart";

const data = [
    {
        "Data 2": 1500,
        "Data 1": 2400,
    },
    {
        "Data 2": 15500,
        "Data 1": 7421,
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
        "Data 2": 5769,
        "Data 1": 3800,
    },
    {
        "Data 2": 3490,
        "Data 1": 4300,
    },
];

export default function Overview() {
    return (
        <div className="overview">
            <div className="overview_header">
                <h3 className="overview_header-title">Overview</h3>
                <div className="overview_header-triggers">
                    <button className="overview_header-triggers_btn">Month</button>
                    <button className="overview_header-triggers_btn">Year</button>
                </div>
            </div>
            <div className="overview_info">
                <div className="block">
                    <div className="overview_info-outer">
                        <h4 className="overview_info-outer_total">Total Balance</h4>
                    </div>
                    <div className="overview_info-inner">
                        <h4 className="overview_info-inner_title">USD</h4>
                        <span className="overview_info-inner_total">17.3M</span>
                    </div>
                </div>
                <div className="block">
                    <div className="overview_info-outer">
                        <h4 className="overview_info-outer_total">Revenue</h4>
                    </div>
                    <div className="overview_info-inner">
                        <h4 className="overview_info-inner_title">USD</h4>
                        <span className="overview_info-inner_total">14K</span>
                    </div>
                </div>
            </div>
            <div className="overview_visualizer">
                <Chart data={data} />
            </div>
            <div className="overview_insights">
                <div className="overview_insights-item">
                    <h4 className="title">Invoices</h4>
                    <div className="main">
                        <span className="main_total">34</span>
                        <h4 className="main_title">Unpaid</h4>
                    </div>
                </div>
                <div className="overview_insights-item">
                    <h4 className="title">Transactions</h4>
                    <div className="main">
                        <span className="main_total">737</span>
                        <h4 className="main_title">Completed</h4>
                    </div>
                </div>
            </div>
            <div className="overview_expand">
                <button className="overview_expand-btn">Expand Chart</button>
            </div>
        </div>
    )
}