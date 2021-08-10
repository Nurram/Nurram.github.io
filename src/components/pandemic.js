import { Component } from "react";

class Pandemic extends Component {
    render() {
        return(
            <section className="pandemic overlay-dark"
              style={{backgroundImage: "url('./res/reminder.jpeg')"}}>

                <p className="text-center" data-aos="zoom-in" data-aos-duration="1500">"Due to the COVID-19 pandemic, reception guests are requested to implement and comply with health protocols."<br></br></p>
                <div className="protocol"  data-aos="zoom-in" data-aos-duration="1500">
                    <div className="protocol-item">
                        <img src='./res/wash.png' alt="Wash hands icon"></img>
                        <p>Using Hand Sanitizer</p>
                    </div>
                    <div className="protocol-item">
                        <img src='./res/mask.png' alt="Wash hands icon"></img>
                        <p>Wearing mask</p>
                    </div>
                    <div className="protocol-item">
                        <img src='./res/distance.png' alt="Wash hands icon"></img>
                        <p>Social distancing</p>
                    </div>
                </div>
          </section>
        );
    }
}

export default Pandemic;