import './index.scss';
import {Component} from "react";

const apibase = 'https://api.coingecko.com/api/v3/';

class Calculator extends Component {
    state = {
        base: 'btc',
        currenciesList: [],
        selectedCurrency: ''
    }

    getCurrenciesList = () => {
        fetch(`${apibase}simple/supported_vs_currencies`)
            .then(response => response.json())
            .then(data => {
                this.setState({currenciesList: data})
            })
    }

    getSelectedCurrency = () => {

    }

    componentDidMount() {
        this.getCurrenciesList();
    }

    render() {
        const {currenciesList, base} = this.state;
        return (
            <div className="calculator">
                <h4 className="calculator_header">Calculator</h4>
                <form className="calculator_form" action="#" method="post">
                    <div className="calculator_form-group">
                        <input className="calculator_form-field" type="text" placeholder={base} />
                        <select className="calculator_form-select" disabled>
                            <option value={base} selected>{base}</option>
                        </select>
                    </div>
                    <div className="calculator_form-group">
                        <input className="calculator_form-field" type="text" placeholder=""/>
                        <select className="calculator_form-select" onSelect={this.getSelectedCurrency}>
                            {
                                currenciesList.map((item) => {
                                    if (item !== base) {
                                        return <option value={item}>{item}</option>
                                    }
                                })
                            }
                        </select>
                    </div>
                </form>
            </div>
        )
    }
}

export default Calculator;