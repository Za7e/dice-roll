import react, { Component } from "react";
import './Die.css'

class Die extends Component {
    render() {
        let diceName = "fas fa-dice-" + this.props.num;
        return (
            <i className={`Die ${diceName} ${this.props.rolling && "shake"}`}></i >
        )
    }
}

export default Die