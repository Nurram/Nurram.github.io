import { Component } from "react";

class Meet extends Component {
    render() {
        return(
            <section className="meet" style={{backgroundImage: "url('./res/meet.jpeg')"}}>
              <h2 className="text-center section-title" data-aos="fade-down" data-aos-duration="1500">Our Story Started With
              </h2>
              <p className="text-center" data-aos="fade-down" data-aos-duration="1500">"Kamu bendahara 1 juga ya?"
              </p>

              <article data-aos="fade-left" data-aos-duration="1500">
                  <img src="./res/treasurer.jpeg"
                      alt=""></img>
                  <div className="article-content white-text">
                      <h3 className="section-subtitle">Treasurer</h3>
                      <p>Our story begins when we first met as treasurers in a student organization when we were still in high school.</p>
                  </div>
              </article>

              <article data-aos="fade-right" data-aos-duration="1500">
                  <img src="./res/backstreet.jpeg"
                      alt=""></img>
                  <div className="article-content white-text">
                      <h3 className="section-subtitle">Backstreet</h3>
                      <p>We continue to communicate until we feel comfortable and harbor feelings for each other and keep it hidden.</p>
                  </div>
              </article>

              <article data-aos="fade-left" data-aos-duration="1500">
                  <img src="./res/gf.jpeg"
                      alt=""></img>
                  <div className="article-content white-text">
                      <h3 className="section-subtitle">"Would you like to be my girlfriend?"</h3>
                      <p>At the time of high school graduation, Febiana ventured to express his feelings by saying: "Viw, let's date!" and Silvy accepted Febiana's feelings.</p>
                  </div>
              </article>

              <article data-aos="fade-right" data-aos-duration="1500">
                  <img src="./res/propose.jpeg"
                      alt=""></img>
                  <div className="article-content white-text">
                      <h3 className="section-subtitle">"I have talked to your parents that i will propose you"</h3>
                      <p>5 years have passed, Febiana decides and tells silvy's parents that he will propose silvy in december and tells silvy that he has spoken to her mother to propose to her.</p>
                  </div>
              </article>
          </section>
        );
    }
}

export default Meet;