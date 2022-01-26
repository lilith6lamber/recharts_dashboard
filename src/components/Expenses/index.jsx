import './index.scss';

import {BsThreeDots} from "react-icons/bs";
import amazon from '../../assets/amazon.svg';
import spotify from '../../assets/spotify.svg';
import netflix from '../../assets/netflix.svg';
import adobe from '../../assets/creative-cloud.svg';
import itunes from '../../assets/itunes.svg';
import airbnb from '../../assets/airbnb.svg';
import google from '../../assets/search.svg';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';

export default function Expenses() {
    const expensesDB = [
        {
            id: "Amazon",
            img: amazon,
            moneySpent: "-$5K"
        },
        {
            id: "Spotify",
            img: spotify,
            moneySpent: "-$40"
        },
        {
            id: "Netflix",
            img: netflix,
            moneySpent: "-$1K"
        },
        {
            id: "Adobe",
            img: adobe,
            moneySpent: "-$20K"
        },
        {
            id: "iTunes",
            img: itunes,
            moneySpent: "-$64"
        },
        {
            id: "Airbnb",
            img: airbnb,
            moneySpent: "-$150"
        },
        {
            id: "Google",
            img: google,
            moneySpent: "-$70"
        }
    ]

    return (
        <div className="expenses">
            <div className="expenses_info section-header">
                <h4 className="expenses_info-title">Expenses</h4>
                <a className="link link--circle" href="#">
                        <span className="icon">
                        <BsThreeDots/>
                    </span>
                </a>
            </div>
            <Swiper className="expenses_list"
                    slidesPerView={4}
                    breakpoints={{
                        767.98: {
                            width: 767.98,
                            slidesPerView: 5,
                            spaceBetween: 10,
                        },
                    }}
            >
                {
                    expensesDB.map((item) => {
                        const {id, img, moneySpent} = item;
                        return (
                            <SwiperSlide key={id} className="expenses_list-item">
                                <a className="expenses_list-item_wrapper link" href="#">
                                    <span className="media">
                                        <img src={img} alt="id"/>
                                    </span>
                                    <span className="main">
                                        <span className="main_title">{id}</span>
                                        <span className="main_total">{moneySpent}</span>
                                    </span>
                                </a>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </div>
    )
}