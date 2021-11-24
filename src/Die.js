import react, { Component } from "react";
import './Die.css'

class Die extends Component {
    render() {
        let diceName = this.props.num;
        return (
            <i className={"die fas fa-dice-" + diceName}></i >
        )
    }
}

export default Die