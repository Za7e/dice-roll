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
        setTimeout(() => {
            this.setState({ rolling: false });
        }, 1000);
    }
    render() {
        return (
            <div className="RollDice">
                <Die num={this.state.d1} rolling={this.state.rolling} />
                <Die num={this.state.d2} rolling={this.state.rolling} />
                <button className="RollDice-button" onClick={this.btnClick} disabled={this.state.rolling}>
                    {this.state.rolling ? "Rolling..." : "Roll Dice"}
                </button>
            </div>
        )
    }
}

export default RollDice