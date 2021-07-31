import { Component } from "react";

class Meet extends Component {
    render() {
        return(
            <section className="meet" style={{backgroundImage: "url('./res/meet.jpg')"}}>
              <h2 className="text-center section-title" data-aos="fade-down" data-aos-duration="1500">Our Story Started With
              </h2>
              <p className="text-center" data-aos="fade-down" data-aos-duration="1500">"Lorem ipsum dolor sit amet
                  consectetur"
              </p>

              <article data-aos="fade-left" data-aos-duration="1500">
                  <img src="./res/treasurer.jpg"
                      alt=""></img>
                  <div className="article-content">
                      <h3 className="section-subtitle">Treasurer</h3>
                      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius quisquam molestiae inventore harum
                          magni
                          rerum. Culpa rerum temporibus odit dolore, porro, sed earum exercitationem perspiciatis suscipit
                          sapiente amet est iusto.</p>
                  </div>
              </article>

              <article data-aos="fade-right" data-aos-duration="1500">
                  <img src="./res/backstreet.jpg"
                      alt=""></img>
                  <div className="article-content">
                      <h3 className="section-subtitle">Backstreet</h3>
                      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius quisquam molestiae inventore harum
                          magni
                          rerum. Culpa rerum temporibus odit dolore, porro, sed earum exercitationem perspiciatis suscipit
                          sapiente amet est iusto.</p>
                  </div>
              </article>

              <article data-aos="fade-left" data-aos-duration="1500">
                  <img src="./res/gf.jpg"
                      alt=""></img>
                  <div className="article-content">
                      <h3 className="section-subtitle">"Would you like to be my girlfriend?"</h3>
                      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius quisquam molestiae inventore harum
                          magni
                          rerum. Culpa rerum temporibus odit dolore, porro, sed earum exercitationem perspiciatis suscipit
                          sapiente amet est iusto.</p>
                  </div>
              </article>

              <article data-aos="fade-right" data-aos-duration="1500">
                  <img src="./res/propose.jpg"
                      alt=""></img>
                  <div className="article-content">
                      <h3 className="section-subtitle">"I have talked to your parents that i will propose you"</h3>
                      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius quisquam molestiae inventore harum
                          magni
                          rerum. Culpa rerum temporibus odit dolore, porro, sed earum exercitationem perspiciatis suscipit
                          sapiente amet est iusto.</p>
                  </div>
              </article>
          </section>
        );
    }
}

export default Meet;