import { Component } from "react";

class Header extends Component {
    render() {
        return(
        <section className="header overlay-dark white-text" style={{backgroundImage: "url('./res/header.jpeg')"}}>
            <div className="lead" data-aos="fade-down" data-aos-duration="1500">The Wedding Of</div>
            <h1 style={{ fontFamily: 'Homemade Apple' }} data-aos="zoom-in" data-aos-duration="1500">Silvy & Febiana</h1>
            <div className="lead" data-aos="fade-up" data-aos-duration="1500">#WeAreMarried!</div>
            <p data-aos="fade-up" data-aos-duration="1900">21 . 08 . 2021</p>
        </section>
        );
    }
}

export default Header;