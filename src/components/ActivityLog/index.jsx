import './index.scss';

import { BsThreeDots } from "react-icons/bs";

export default function ActivityLog() {
    const data = [
        {
            day: "Sun",
            date: "6/9 7:11pm",
            name: "Adobe Creative Suit Monthly Plan",
            statusCode: 2,
            type: "payment"
        },
        {
            day: "Fri",
            date: "6/7 1:11am",
            name: "Amazon Premium Card",
            statusCode: 4,
            type: "payment"
        },
        {
            day: "Mon",
            date: "6/3 3:07pm",
            name: "Sent Payment to Cleint X",
            statusCode: 3,
            type: "payment"
        },
        {
            day: "Thu",
            date: "5/30 3:00pm",
            name: "Changed Password",
            type: "Account",
        },
    ];

    function setStatus(item) {
        if (item.type === "payment") {
            switch (item.statusCode) {
                case 1: {
                    return "Sent"
                }
                case 2: {
                    return "Processing"
                }
                case 3: {
                    return "Paid"
                }
                case 4: {
                    return "Rejected"
                }
            }
        } else {
            return item.type
        }
    }

    return (
        <div className="activity">
            <div className="activity_info">
                <h4 className="activity_info-title">Activity</h4>
                <a className="link link--circle" href="#">
                        <span className="icon">
                        <BsThreeDots/>
                    </span>
                </a>
            </div>
            <ul className="activity_log">
                {
                    data.map((item) => {
                        const {day, name, date} = item;
                        return (
                            <li className="activity_log-item" key={name}>
                                <div className="timestamp">
                                    <h3 className="timestamp_weekday">{day}</h3>
                                    <span className="timestamp_date">{date}</span>
                                </div>
                                <div className="dot"></div>
                                <div className="details">
                                    <h5 className="details_title">{name}</h5>
                                    <span className={
                                        setStatus(item) ? "details_status " + setStatus(item).toLowerCase() : "details_status"}
                                    >
                                        {setStatus(item)}
                                    </span>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}