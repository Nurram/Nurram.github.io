import { Component } from "react";

class Agenda extends Component {
    render() {
        return(
            <section className="agenda text-center"
            style={{backgroundImage: "url('./res/agenda.jpg')"}}>
                <p data-aos="fade-down" data-aos-duration="1500">Saturday</p>
                <div className="date">
                    <h2 data-aos="fade-right" data-aos-duration="1500">21</h2>
                    <div className="month-year" data-aos="fade-left" data-aos-duration="1500">
                        <p>August</p>
                        <p>2021</p>
                    </div>
                </div>
                <h3 data-aos="fade-up" data-aos-duration="1500">Reception</h3>
                <p data-aos="fade-up" data-aos-duration="1500">11.00 - 12.30</p>
                <button id="addToCalendarBtn" data-aos="fade-up" data-aos-duration="1500">Add to calender</button>
                <p data-aos="fade-up" data-aos-duration="1500">IAIC Building</p>
                <div className="location" data-aos="fade-up" data-aos-duration="1500">
                    <p>Jalan Muktamar NU XXIX No.1, Cipakat, Cipasung,
                        Singaparna,
                        Cipakat, Kec. Singaparna, Tasikmalaya, Jawa Barat
                        46417</p>
                    <button id="openMap">Open Map</button>
                </div>
            </section>
        );
    }
}

export default Agenda;