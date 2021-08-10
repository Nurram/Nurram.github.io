import React from "react";
import AOS from 'aos';

class PopUp extends React.Component {
    
    constructor(props) {
        super(props);
        this.openBtnRef = React.createRef();
        this.waitTxtRef = React.createRef();

        this.state = {
            recipient: '',
        }
    }

    getParameterByName(url = window.location.href) {
        const regex = new RegExp('[?&]untuk(=([^&#]*)|&|#|$)'), 
        results = regex.exec(url) ?? ['?untuk=Guest','=Guest','Guest'];

        if (!results) return null;
        if (!results[2]) return '';
        
        let destination =  decodeURIComponent(results[2].replace(/\+/g, ' '));
        this.setState({
            recipient: `Dear ${destination},`,
        });
    }

    playMusic() {
        const audio = document.getElementById('audio');
        audio.play();

        const popUp = document.getElementById('popUp');
        popUp.removeAttribute('data-aos')
        popUp.classList.remove('fadeInDown');
        popUp.style.display = 'none';

        document.getElementById('wrapper').style.display = 'block';
        document.body.style.overflowY = 'auto';

        AOS.init();
    }

    componentDidMount() {
        this.getParameterByName();
        window.addEventListener('load', () => {
            const openBtn = this.openBtnRef.current;
            openBtn.style.display = 'inline-block';

            const waitText = this.waitTxtRef.current;
            waitText.style.display = 'none';
        });
    }

    render() {
        return(
            <section id="popUp" className="popup overlay-dark fadeInDown">
                <h2 className="text-center" style={{ fontSize: '1.6rem'}}>{this.state.recipient}</h2>
                <p>You are invited</p>
                <p>To the Wedding Celebration of</p>
                <p style={{ fontSize: '2rem', fontFamily: 'Homemade Apple' }}>Silvy & Febiana</p>
                <p ref={this.waitTxtRef}><i>Please wait...</i></p>
                <a ref={this.openBtnRef} onClick={this.playMusic} style={{ textDecoration: 'none', position: 'absolute', bottom: '14rem' }}>Open Invitation</a>
            </section>
        )
    }
}

export default PopUp;