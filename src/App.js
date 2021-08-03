import PopUp from './components/popUp';
import Header from './components/header';
import Meet from './components/meet';
import Married from './components/married';
import Agenda from './components/agenda';
import Pandemic from './components/pandemic';
import Comment from './components/comment';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <audio id="audio" src="./res/song.mp3"></audio>
      <PopUp/>

      <div id="wrapper" className="wrapper">
        <Header/>
        <Meet/>
        <Married/>
        <Agenda/>
        <Pandemic/>
        <Comment/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
