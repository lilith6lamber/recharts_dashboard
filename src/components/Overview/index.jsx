import './index.scss';

import {AreaChart, Area, Tooltip, ResponsiveContainer} from "recharts";

const data = [
    {
        data2: 1500,
        data1: 2400,
    },
    {
        data2: 15500,
        data1: 7421,
    },
    {
        data2: 5000,
        data1: 12800,
    },
    {
        data2: 8780,
        data1: 3908,
    },
    {
        data2: 9890,
        data1: 4800,
    },
    {
        data2: 5769,
        data1: 3800,
    },
    {
        data2: 3490,
        data1: 4300,
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
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart
                        width={500}
                        height={400}
                        data={data}
                        margin={{top: 10}}
                    >
                        <defs>
                            <linearGradient
                                id="colorview"
                                x1="0"
                                y1="0"
                                x2="0"
                                y2="1"
                            >
                                <stop offset="30%" stopColor="#ff4d6d" stopOpacity={0.4} />
                                <stop offset="85%" stopColor="#ff4d6d11" stopOpacity={0.2} />
                            </linearGradient>
                        </defs>
                        <Tooltip />
                        <Area
                            dataKey="data2"
                            type="monotone"
                            stroke="#ee3b3b"
                            fill="url(#colorview)"
                        />
                        <Area
                            dataKey="data1"
                            type="monotone"
                            stroke="#ee3b3b"
                            fill="url(#colorview)"
                        />
                    </AreaChart>
                </ResponsiveContainer>
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