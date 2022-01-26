import './index.scss';
import {SiConvertio} from "react-icons/si";
import {Component} from "react";
import {StyledSelect} from "../Select";
import {BsThreeDots} from "react-icons/bs";

const apibase = 'https://api.coingecko.com/api/v3/';

class Converter extends Component {
    state = {
        base: 'btc',
        currenciesList: [],
        selectedCurrency: '',
        baseValue: 0,
        exchangeValue: 0,
        summary: 0
    }

    getCurrenciesList = () => {
        fetch(`${apibase}simple/supported_vs_currencies`)
            .then(response => response.json())
            .then(data => {
                this.setState({currenciesList: data, selectedCurrency: data[1]})
            })
            .catch(err => {
                console.error(err)
            })
    }

    getSelectedCurrency = (event) => {
        this.setState({selectedCurrency: event.target.value}, () => {
            this.getExchangeValue();
        })
    }

    getBaseValue = (event) => {
        this.setState({baseValue: event.target.value})
    }

    getExchangeValue = () => {
        fetch(`${apibase}exchange_rates`)
            .then(response => response.json())
            .then(data => {
                 for (let key in data.rates) {
                    if (this.state.selectedCurrency === key) {
                        this.setState({exchangeValue: data.rates[key].value})
                    } else if (this.state.base === key) {
                        this.setState({baseValue: data.rates[key].value})
                    }
                }
            })
            .catch(err => {
                console.error(err)
            })
    }

    calculate = () => {
        this.setState({summary: this.state.baseValue * this.state.exchangeValue})
    }

    componentDidMount() {
        this.getCurrenciesList();
        this.getExchangeValue();
    }

    render() {
        const {currenciesList, base, selectedCurrency, summary, exchangeValue} = this.state;
        return (
            <div className="converter">
                <div className="converter_info section-header">
                    <h4 className="converter_info-title">Converter</h4>
                    <a className="link link--circle" href="#">
                       <span className="icon">
                      <BsThreeDots/>
                 </span>
                    </a>
                </div>
                <div className="content">
                    <form className="converter_form" action="#" method="post">
                        <div className="converter_form-input">
                            <input
                                className="converter_form-field field"
                                type="number"
                                placeholder={base}
                                onChange={this.getBaseValue}
                            />
                            <StyledSelect
                                classNamePrefix="Select"
                                className="converter_form-select"
                                placeholder={base}
                            >
                            </StyledSelect>
                            <StyledSelect
                                classNamePrefix="Select"
                                className="converter_form-select"
                                placeholder={selectedCurrency}
                                onChange={this.getSelectedCurrency}
                                options={this.getExchangeValue}
                            >
                                {/*{*/}
                                {/*    currenciesList.map((item) => {*/}
                                {/*        if (item !== base) {*/}
                                {/*            return <option key={item} value={item}>{item}</option>*/}
                                {/*        }*/}
                                {/*    })*/}
                                {/*}*/}
                            </StyledSelect>
                        </div>
                        <div className="converter_form-output">
                            <button
                                className="btn"
                                type="button"
                                onClick={this.calculate}
                            >
                        <span className="icon">
                            <SiConvertio className="rotate" />
                        </span>
                                Convert
                            </button>
                            <div className="result">
                                <p className="result_summary">{summary}</p>
                                <p className="result_details">
                                    1 {base.toUpperCase()} = {exchangeValue} {selectedCurrency.toUpperCase()}
                                </p>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default Converter;