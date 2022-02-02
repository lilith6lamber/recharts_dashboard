import {AreaChart, Area, Tooltip, ResponsiveContainer} from "recharts";

export default function Chart({data}) {
    return (
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
                <Tooltip wrapperClassName={"tooltip_wrapper"} labelClassName={"tooltip_wrapper-label"} />
                <Area
                    dataKey="Data 2"
                    type="monotone"
                    stroke="#ee3b3b"
                    fill="url(#colorview)"
                />
                <Area
                    dataKey="Data 1"
                    type="monotone"
                    stroke="#ee3b3b"
                    fill="url(#colorview)"
                />
            </AreaChart>
        </ResponsiveContainer>
    )
}