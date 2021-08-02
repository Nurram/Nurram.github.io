import { Component } from "react";

class Pandemic extends Component {
    render() {
        return(
            <section className="pandemic overlay-dark"
              style={{backgroundImage: "url('./res/reminder.jpeg')"}}>

              <p className="text-center" data-aos="zoom-in" data-aos-duration="1500">"Due to pandemic covid-19 situation, our
                  Reception is closed for invited guest
                  only."<br></br>"
                  However, we decided to host a live streaming for the Reception."</p>
          </section>
        );
    }
}

export default Pandemic;