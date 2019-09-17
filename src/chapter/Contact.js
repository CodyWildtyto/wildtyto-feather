import React from 'react';
import Wheel from './../factory/Wheel';
import Svg from './../factory/Svg';
import iconGithub from './../image/nav-github-icon.svg';
import iconLinkedin from './../image/nav-linkedin-icon.svg';
import iconMail from './../image/nav-mail-icon.svg';
import './Contact.css';

export default class Contact extends React.Component {

    constructor(_props) {

        super(_props);
        this.state = {
                isBottom: false
            };
        Wheel.add( () => {
                const _isBottom = ( window.scrollY > this.state.footerElement.offsetTop );
                if ( this.state.isBottom === _isBottom ) return;
                this.setState({
                        isBottom: _isBottom
                    });
            } );

    }


    componentDidMount() {

        this.setState({
                footerElement: document.querySelector("footer#Contact")
            });
        Svg.exchange("#Contact .iconGithub img");
        Svg.exchange("#Contact .iconLinkedin img");
        Svg.exchange("#Contact .iconMail img");

    }

    render() {

        return (
                <footer id="Contact">
                    <h2>Thank You</h2>
                    <p>
                        <a className="iconGithub" href="https://github.com/Wildtyto" target="_blank" rel="noopener noreferrer">
                            <img src={ iconGithub } alt="nav-github-icon" />
                        </a>
                        <a className="iconLinkedin" href="https://www.linkedin.com/in/wildtyto/" target="_blank" rel="noopener noreferrer">
                            <img src={ iconLinkedin } alt="nav-linkedin-icon" />
                        </a>
                        <a className="iconMail" href="mailto:wildtyto@gmail.com">
                            <img src={ iconMail } alt="nav-mail-icon" />
                        </a>
                    </p>
                    <h3>© Wildtyto</h3>
                </footer>
            );

    }

}