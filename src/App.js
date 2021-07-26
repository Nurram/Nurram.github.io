import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
            <audio loop id="audio" src="public/res/song.mp3"></audio>

<section id="popUp" class="popup overlay-dark fadeInDown">
    <h2 id="headerText" class="section-title text-center">Dear Guest,</h2>
    <p>You are invited</p>
    <p id="waitText"><i>Please wait...</i></p>
    <a id="openBtn">Open Invitation</a>
</section>

<div id="wrapper" class="wrapper">
    <section class="header overlay-dark white-text" style="background-image: url('public/res/header.jpg');">
        <div class="lead" data-aos="fade-down" data-aos-duration="1500">The Wedding Of</div>
        <h1 data-aos="zoom-in" data-aos-duration="1500">Silvy & Febiana</h1>
        <div class="lead" data-aos="fade-up" data-aos-duration="1500">#We Are Married!</div>
        <p data-aos="fade-up" data-aos-duration="1900">21 . 08 . 2021</p>
    </section>

    <section class="meet" style="background-image: url('public/res/meet.jpg');">
        <h2 class="text-center section-title" data-aos="fade-down" data-aos-duration="1500">Our Story Started With
        </h2>
        <p class="text-center" data-aos="fade-down" data-aos-duration="1500">"Lorem ipsum dolor sit amet
            consectetur"
        </p>

        <article data-aos="fade-left" data-aos-duration="1500">
            <img src="public/res/treasurer.jpg"
                alt="">
            <div class="article-content">
                <h3 class="section-subtitle">Treasurer</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius quisquam molestiae inventore harum
                    magni
                    rerum. Culpa rerum temporibus odit dolore, porro, sed earum exercitationem perspiciatis suscipit
                    sapiente amet est iusto.</p>
            </div>
        </article>

        <article data-aos="fade-right" data-aos-duration="1500">
            <img src="public/res/backstreet.jpg"
                alt="">
            <div class="article-content">
                <h3 class="section-subtitle">Backstreet</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius quisquam molestiae inventore harum
                    magni
                    rerum. Culpa rerum temporibus odit dolore, porro, sed earum exercitationem perspiciatis suscipit
                    sapiente amet est iusto.</p>
            </div>
        </article>

        <article data-aos="fade-left" data-aos-duration="1500">
            <img src="public/res/gf.jpg"
                alt="">
            <div class="article-content">
                <h3 class="section-subtitle">"Would you like to be my girlfriend?"</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius quisquam molestiae inventore harum
                    magni
                    rerum. Culpa rerum temporibus odit dolore, porro, sed earum exercitationem perspiciatis suscipit
                    sapiente amet est iusto.</p>
            </div>
        </article>

        <article data-aos="fade-right" data-aos-duration="1500">
            <img src="public/res/propose.jpg"
                alt="">
            <div class="article-content">
                <h3 class="section-subtitle">"I have talked to your parents that i will propose you"</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius quisquam molestiae inventore harum
                    magni
                    rerum. Culpa rerum temporibus odit dolore, porro, sed earum exercitationem perspiciatis suscipit
                    sapiente amet est iusto.</p>
            </div>
        </article>
    </section>

    <section class="married"
        style="background-image: url(public/res/married.jpg);">
        <h2 class="section-title text-center" data-aos="fade-down" data-aos-duration="1500">We Are Getting Married
        </h2>
        <p class="text-center" data-aos="fade-down" data-aos-duration="1500">"Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Hic consectetur voluptas et ab
            ut. Dolorem maiores,
            illum suscipit quas perspiciatis."</br>Al-Qur'an 0:0</p>

        <div class="married-content" data-aos="fade-up" data-aos-duration="1500">
            <article class="couple">
                <img class="circle" src="public/res/kebo.jpg" alt="">
                <h3 class="section-subtitle text-center">Silvy Wahyuni, S.Sn.</h3>
                <p class="text-center">2nd daughter of</br>H. Jae Juarsa, S.Pd., M.Pd. and Hj. Ita Karnita, S.Pd.
                </p>
            </article>
            <h3 class="section-subtitle text-center">&</h3>
            <article class="couple">
                <img class="circle" src="public/res/pp.jpg" alt="">
                <h3 class="section-subtitle text-center">Febiana Nur Ramdani, S.Kom.</h3>
                <p class="text-center">1st son of</br>H. Adang Surahman, S.Kep.Ners. and Hj. Lilis Yulianti, S.ST.
                </p>
            </article>
        </div>
    </section>

    <section class="agenda text-center"
        style="background-image: url(public/res/agenda.jpg);">
        <p data-aos="fade-down" data-aos-duration="1500">Saturday</p>
        <div class="date">
            <h2 data-aos="fade-right" data-aos-duration="1500">21</h2>
            <div class="month-year" data-aos="fade-left" data-aos-duration="1500">
                <p>August</p>
                <p>2021</p>
            </div>
        </div>
        <h3 data-aos="fade-up" data-aos-duration="1500">Reception</h3>
        <p data-aos="fade-up" data-aos-duration="1500">11.00 - 12.30</p>
        <button id="addToCalendarBtn" data-aos="fade-up" data-aos-duration="1500">Add to calender</button>
        <p data-aos="fade-up" data-aos-duration="1500">IAIC Building</p>
        <div class="location" data-aos="fade-up" data-aos-duration="1500">
            <p>Jalan Muktamar NU XXIX No.1, Cipakat, Cipasung,
                Singaparna,
                Cipakat, Kec. Singaparna, Tasikmalaya, Jawa Barat
                46417</p>
            <button id="openMap">Open Map</button>
        </div>
    </section>

    <section class="pandemic overlay-dark"
        style="background-image: url(public/res/reminder.jpg);">

        <p class="text-center" data-aos="zoom-in" data-aos-duration="1500">"Due to pandemic covid-19 situation, our
            Reception is closed for invited guest
            only."<br>"
            However, we decided to host a live streaming for the Reception."</p>
    </section>

    <section class="comment overlay-dark"
        style="background-image: url(public/res/comment.jpg);">

        <div id="comment-content" class="comment-content">
            <h3 class="section-title text-center">Comment</h3>
            <form action="#" method="post">
                <input id="name" class="input" type="text" name="name" id="name" placeholder="Your name">
                <textarea id="comment" class="input" name="commentVal" id="commentVal" rows="5"
                    placeholder="Pray for us please"></textarea>
                <input id="submitBtn" class="input" type="button" value="Submit">
            </form>

            <div id="comment-list"></div>
        </div>
    </section>

    <footer>
        <p class="text-center">Created with <span>&hearts;</span> by the groom</p>
    </footer>
</div>
    </div>
  );
}

export default App;
