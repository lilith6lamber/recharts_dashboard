import './index.scss';

import {AreaChart, Area, Tooltip, ResponsiveContainer} from "recharts";

const data = [
    {
        data2: 2000,
        data1: 2400,
    },
    {
        data2: 4000,
        data1: 1398,
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
        data2: 11390,
        data1: 3800,
    },
    {
        data2: 3490,
        data1: 4300,
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
        </div>
    )
}