import { Component } from "react";

class PopUp extends Component {
    render() {
        return(
            <section id="popUp" className="popup overlay-dark fadeInDown">
                <h2 id="headerText" className="section-title text-center">Dear Guest,</h2>
                <p>You are invited</p>
                <p id="waitText"><i>Please wait...</i></p>
                <a id="openBtn">Open Invitation</a>
            </section>
        )
    }
}

export default PopUp;