import React from 'react';
import Hash from './../factory/Hash';
import Wheel from './../factory/Wheel';
import noperLogo from './work-noper-logo.png';
import noperPicture1 from './work-noper-pic-1.png';
import noperPicture2 from './work-noper-pic-2.png';
import './Noper.css';

export default class Noper extends React.Component {

    constructor(_props) {

        super(_props);
        this.state = {
                offsetY: 0
            };
        Hash.add( () => _onChanged.apply(this) );
        Wheel.add( () => _onChanged.apply(this) );

        function _onChanged() {
            let _offsetY = 0;
            if ( window.innerWidth > 1024 ) {
                const _isAbove = window.scrollY < ( this.state.sectionElement.offsetTop - window.innerHeight ) ;
                const _isBelow = window.scrollY > ( this.state.sectionElement.offsetTop + this.state.sectionElement.clientHeight) ;
                if ( _isAbove || _isBelow ) return;
                _offsetY = -( window.scrollY - this.state.sectionElement.offsetTop );
            }
            this.setState({
                    offsetY1: `${ _offsetY / 0.6 + 110 }px`,
                    offsetY2: `${ _offsetY / 0.7 + 65 }px`,
                });
        }

    }

    componentDidMount() {

        this.setState({
                sectionElement: document.getElementById("Noper")
            });

    }

    render() {

        return (
                <section id="Noper" style={ { backgroundImage: `url(${ noperPicture1 }), url(${ noperPicture2 })`, backgroundPositionY: `${ this.state.offsetY1 }, ${ this.state.offsetY2 }` } }>
                    <div className="work-container">
                        <h2>
                            <img src={ noperLogo } alt="noper-logo" style={ { height: 30 } } />
                            <span>noper</span>
                        </h2>
                        <div className="work-specialities">
                            <span>JavaScript</span>
                            <span>Webpack</span>
                            <span>LINE Bot SDK</span>
                            <span>React</span>
                            <span>NPM</span>
                            <span>Git</span>
                            <span>Google Analytics</span>
                            <span>Express</span>
                            <span>PM2</span>
                            <span>Axios</span>
                        </div>
                        <div className="work-explain">
                            <p>We created a chat bot -- noper for focusing on main tasks in business conversation at messaging tools like LINE, or Facebook Messager.</p>
                            <p>Team manager could assign mission to members. Bot would notify each one who was assigned to. Also the manager would be notified when the work's state was changed or completed.</p>
                            <p>Two partners and I processed the product. I was in charge of bot and web app development, and designed of user interface. In concert with back end developer for API in GraphQL.</p>
                        </div>
                        <a href="https://www.noper.in" target="_blank" rel="noopener noreferrer">DEMO</a>
                    </div>
                </section>
            );

    }

}