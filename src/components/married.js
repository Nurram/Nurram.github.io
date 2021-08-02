import { Component } from "react";

class Married extends Component {
    render() {
        return(
            <section className="married"
              style={{backgroundImage: "url('./res/married.jpeg')"}}>
              <h2 className="section-title text-center" data-aos="fade-down" data-aos-duration="1500">We Are Getting Married
              </h2>
              <p className="text-center" data-aos="fade-down" data-aos-duration="1500">"Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Hic consectetur voluptas et ab
                  ut. Dolorem maiores,
                  illum suscipit quas perspiciatis."<br></br>Al-Qur'an 0:0</p>

              <div className="married-content" data-aos="fade-up" data-aos-duration="1500">
                  <article className="couple">
                      <img className="circle" src="./res/kebo.jpeg" alt=""></img>
                      <h3 className="section-subtitle text-center">Silvy Wahyuni, S.Sn.</h3>
                      <p className="text-center">2nd daughter of<br></br>H. Jae Juarsa, S.Pd., M.Pd. and Hj. Ita Karnita, S.Pd.
                      </p>
                  </article>
                  <h3 className="section-subtitle text-center">&</h3>
                  <article className="couple">
                      <img className="circle" src="./res/pp.jpeg" alt=""></img>
                      <h3 className="section-subtitle text-center">Febiana Nur Ramdani, S.Kom.</h3>
                      <p className="text-center">1st son of<br></br>H. Adang Surahman, S.Kep.Ners. and Hj. Lilis Yulianti, S.ST.
                      </p>
                  </article>
              </div>
          </section>
        );
    }
}

export default Married;