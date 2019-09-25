import React from 'react';
import Wheel from './../factory/Wheel';
import Svg from './../factory/Svg';
import iconGithub from './../image/nav-github-icon.svg';
import iconLinkedin from './../image/nav-linkedin-icon.svg';
import iconMail from './../image/nav-mail-icon.svg';
import './Navigator.css';

export default class Navigator extends React.Component {

    constructor(_props) {

        super(_props);
        this.state = {
                isNavmode: false,
                isBottom: false
            };
        Wheel.add( () => {
                const _isNavmode = ( window.innerWidth > 1023 ) ? ( window.scrollY > 300 ) : ( window.scrollY > 20 ) ;
                if ( this.state.isNavmode !== _isNavmode ) this.setState({
                        isNavmode: _isNavmode
                    });
                const _isBottom = ( ( window.scrollY + window.innerHeight ) > this.state.footerElement.offsetTop );
                if ( this.state.isBottom !== _isBottom ) this.setState({
                        isBottom: _isBottom
                    });
            } );

    }

    componentDidMount() {

        Svg.exchange("#Navigator .iconGithub img");
        Svg.exchange("#Navigator .iconLinkedin img");
        Svg.exchange("#Navigator .iconMail img");
        this.setState({
                isNavmode: ( window.scrollY > 300 ),
                footerElement: document.querySelector("footer#Contact")
            });

    }

    render() {

        return (
                <div id="Navigator" className={`${ this.state.isNavmode ? "navmode" : "" } ${ this.state.isBottom ? "isbottom" : "" }`}>
                    <nav>
                        <a href="/#/">Hello</a>
                        <a href="/#/Work">Work</a>
                        <a href="/#/Projects">Projects</a>
                        <a href="/#/About">About</a>
                    </nav>
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
                </div>
            );

    }

}