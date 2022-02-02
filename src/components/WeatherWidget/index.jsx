import './index.scss';
import {Component} from "react";
import {BsWind} from 'react-icons/bs';
import {FiRefreshCcw} from "react-icons/fi";
import Preloader from "../Preloader";
import {addZero} from "../../helpers/helpers";
import temp from "../../assets/temp.svg"
import codes from '../../database/codes.json';
import {f_unit, weekdays} from "../../helpers/helpers";

// const API_KEY = process.env.OW_API_KEY;
const API_KEY = "";

const defaultPosition = {
    lat: 40.763485134564945,
    lon: -73.98312126886398
}

class WeatherWidget extends Component {
    state = {
        isLoading: false,
        code: "US",
        name: "United States",
        city: "NY",
        weather: {},
        units: "metric",
        currentDate: "",
        ...defaultPosition
    }

    setWeatherData = (data) => {
        this.setState({
            weather: {
                main: data.weather[0].main,
                icon: data.weather[0].icon,
                wind: data.wind.speed,
                temp: data.main.temp,
                tempFeelsLike: data.main.feels_like,
            }
        })
    }

    setCurrentDate = () => {
        let weekdayNum = new Date().getDay();
        let weekday = weekdays[weekdayNum];
        let date = addZero(new Date().getDate());
        let month = addZero(new Date().getMonth() + 1);
        let year = new Date().getFullYear();
        this.setState({currentDate: `${weekday}, ${date}.${month}.${year}`})
    }

    getCurrentWeather = () => {
        this.setState({isLoading: true})
        navigator.geolocation.getCurrentPosition(success, error);

        function success(position) {
            const userPosition = {
                lat: position.coords.latitude,
                lon: position.coords.longitude
            }
            localStorage.setItem('userPosition', JSON.stringify(userPosition));
            return userPosition;
        }

        function error(err) {
            console.warn(`ERROR(${err.code}): ${err.message}`);
            return defaultPosition;
        }

        if (localStorage.getItem('userPosition')) {
            let coords = JSON.parse(localStorage.getItem('userPosition'));
            fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&units=${this.state.units}&appid=${API_KEY}`)
                .then(response => response.json())
                .then(data => {
                    this.setState({code: data.sys.country, city: data.name}, () => {
                        for (let key in codes) {
                            if (this.state.code.toLowerCase() === key) {
                                this.setState({name: codes[key]})
                                break;
                            }
                        }
                        for (let i = 0; i < f_unit.length; i++) {
                            if(this.state.code.toLowerCase() !== f_unit[i]) {
                                this.setState({units: "metric"})
                                break;
                            }
                        }
                    })
                    this.setWeatherData(data);
                    this.setState({isLoading: false})
                    console.log(data)
                })
                .catch(err => console.error(err));
        } else {
            fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${defaultPosition.lat}&lon=${defaultPosition.lon}&appid=${API_KEY}`)
                .then(response => response.json())
                .then(data => {
                    this.setWeatherData(data);
                })
                .catch(err => console.error(err));
        }
    }

    updateWeather = () => {
        this.setState({isLoading: true})
        setTimeout(() => this.getCurrentWeather(), 1000)
    }

    componentDidMount() {
        this.getCurrentWeather();
        this.setCurrentDate();
    }

    render() {
        const {name, code, city, weather, isLoading, units, currentDate} = this.state;
        return (
            <div className="weather">
                <h4 className="weather_header section-header">Weather
                    <span className="icon">
                        <FiRefreshCcw onClick={this.updateWeather}/>
                    </span>
                </h4>
                {isLoading ?
                    <Preloader status={isLoading}/>
                    :
                    <div className={isLoading ? "weather_widget hidden" : "weather_widget"}>
                        <div className="weather_widget-country">
                            <img className="weather_widget-country_flag"
                                 src={`https://flagcdn.com/32x24/${code.toLowerCase()}.png`}
                                 alt={name}
                            />
                            <h3 className="weather_widget-country_name">{name}, {city}</h3>
                        </div>
                        <div className="weather_widget-date">
                            <span className="weather_widget-date">{currentDate}</span>
                        </div>
                        <div className="weather_widget-main">
                            <div className="general block">
                                <img className="general_icon"
                                     src={`http://openweathermap.org/img/wn/${weather.icon}@2x.png`}
                                     alt="icon"
                                />
                                <h4 className="general_title">{weather.main}</h4>
                            </div>
                            <div className="wind block">
                            <span className="wind_icon">
                                <BsWind/>
                                {Math.round(weather.wind) > 0 ? `${Math.round(weather.wind)} m/s` : 'Calm'}
                            </span>
                            </div>
                            <div className="temp block">
                            <span className="temp_icon">
                                <img src={temp} alt="icon"/>
                            </span>
                                {Math.round(weather.temp)} {units === "metric" ? "°C" : "°F"}
                            </div>
                        </div>
                    </div>
                }
            </div>
        )
    }
}

export default WeatherWidget;