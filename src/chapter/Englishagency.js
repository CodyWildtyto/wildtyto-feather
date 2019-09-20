import React from 'react';
import Wheel from './../factory/Wheel';
import englishagencyLogo from './work-englishagency-logo.png';
import englishagencyPicture1 from './work-englishagency-pic-1.png';
import englishagencyPicture2 from './work-englishagency-pic-2.png';
import './Englishagency.css';

export default class Englishagency extends React.Component {

    constructor(_props) {

        super(_props);
        this.state = {
                offsetY: 0
            };
        Wheel.add( () => {
                const _isAbove = window.scrollY < ( this.state.sectionElement.offsetTop - window.innerHeight ) ;
                const _isBelow = window.scrollY > ( this.state.sectionElement.offsetTop + this.state.sectionElement.clientHeight) ;
                if ( _isAbove || _isBelow ) return;
                const _offsetY =  -( window.scrollY - this.state.sectionElement.offsetTop );
                this.setState({
                        offsetY1: _offsetY / 0.6 + 220 ,
                        offsetY2: _offsetY / 0.7 + 180 ,
                    });
            } );

    }

    componentDidMount() {

        this.setState({
                sectionElement: document.getElementById("Englishagency")
            });

    }

    render() {

        return (
                <section id="Englishagency" style={ { backgroundImage: `url(${ englishagencyPicture1 }), url(${ englishagencyPicture2 })`, backgroundPositionY: `${ this.state.offsetY1 }px, ${ this.state.offsetY2 }px` } }>
                    <div className="work-container">
                        <h2>
                            <img src={ englishagencyLogo } alt="noper-logo" style={ { height: 30 } } />
                            <span>English.Agency</span>
                        </h2>
                        <div className="work-specialities">
                            <span>JavaScript</span>
                            <span>Vue.js</span>
                            <span>Vue Server Renderer</span>
                            <span>NPM</span>
                            <span>Git</span>
                            <span>Google Analytics</span>
                            <span>Express</span>
                            <span>PM2</span>
                            <span>Request</span>
                        </div>
                        <div className="work-explain">
                            <p>Fortuitously, we had a idea with a partner company. It is a publishing platform for the recruiters of English schools to share knowledge. Helped the students who are interested to know the schools or culture before they go.</p>
                            <p>The feature is static content in server rendering. Each article is easy to be found by search engine even if the recruiters publish article every time.</p>
                            <p>Besides front end development, I built server rendering server in Node.js for adding each article files when anyone publishing.</p>
                        </div>
                    </div>
                </section>
            );

    }

}