import { Component } from "react";

class Agenda extends Component {
    constructor(props) {
        super(props);

        this.state = {
            session: '11.00 - 12.30',
        }
    }
    
    getParameterByName(url = window.location.href) {
        const sessionRegex = new RegExp('[?&]session(=([^&#]*)|&|#|$)');
        const sessionResult = sessionRegex.exec(url) ?? ['&session=1', '=1', '1'];
        
        let session = decodeURIComponent(sessionResult[2].replace(/\+/g, ' '));
        if(session === '2') {
            session = '12.30 - 14.00';
        } else {
            session = '11.00 - 12.30';
        }

        this.setState({
            session: session,
        });
    }

    componentDidMount() {
        this.getParameterByName();
    }

    openMap() {
        window.open('https://www.google.com/maps/place/Institut+Agama+Islam+Cipasung/@-7.3496343,108.127125,15z/data=!4m5!3m4!1s0x0:0x9eb404166b256d11!8m2!3d-7.3496343!4d108.127125','_blank').focus();
    }

    addToCalendar() {
        var text = 'Silvy and Febiana Wedding';
        var date = '21082021'
        var location = 'Institut Agama Islam Cipasung'
        var googleCalendarUrl = `http://www.google.com/calendar/event?action=TEMPLATE&text=${text}&dates=${date}/${date}&location=${location}`;
        window.open(googleCalendarUrl).focus();
    }

    render() {
        return(
            <section className="agenda text-center"
            style={{backgroundImage: "url('./res/agenda.jpeg')"}}>
                <p data-aos="fade-down" data-aos-duration="1500">Saturday</p>
                <div className="date">
                    <h2 data-aos="fade-right" data-aos-duration="1500">21</h2>
                    <div className="month-year" data-aos="fade-left" data-aos-duration="1500">
                        <p>August</p>
                        <p>2021</p>
                    </div>
                </div>
                <h3 data-aos="fade-up" data-aos-duration="1500">Reception</h3>
                <p data-aos="fade-up" data-aos-duration="1500">{ this.state.session }</p>
                <button id="addToCalendarBtn" data-aos="fade-up" data-aos-duration="1500" 
                onClick={this.addToCalendar}>Add to calender</button>
                <p data-aos="fade-up" data-aos-duration="1500">IAIC Building</p>
                <div className="location" data-aos="fade-up" data-aos-duration="1500">
                    <p>Jalan Muktamar NU XXIX No.1, Cipakat, Cipasung,
                        Singaparna,
                        Cipakat, Kec. Singaparna, Tasikmalaya, Jawa Barat
                        46417</p>
                    <button onClick={this.openMap}>Open Map</button>
                </div>
            </section>
        );
    }
}

export default Agenda;