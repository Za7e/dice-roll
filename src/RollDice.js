import react, { Component } from "react";
import Die from "./Die";
import "./RollDice.css";

class RollDice extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rolling: false,
            d1: "one",
            d2: "one"
        };
        this.rolling = this.rolling.bind(this);
        this.btnClick = this.btnClick.bind(this);
    }
    static defaultProps = {
        numbers: [0, "one", "two", "three", "four", "five", "six"]
    };
    rolling() {
        let num = (Math.floor(Math.random() * 6) + 1);
        return this.props.numbers[num];
    }
    btnClick() {
        this.setState({ rolling: true });
        this.setState({ d1: this.rolling(), d2: this.rolling() });
    }
    render() {
        return (
            <div className="container">
                <Die num={this.state.d1} />
                <Die num={this.state.d2} />
                <button className="btn" onClick={this.btnClick}>Roll Dice</button>
            </div>
        )
    }
}

export default RollDice