import React from 'react';
import Wheel from './../factory/Wheel';
import showhiLogo from './work-showhi-logo.png';
import showhiPicture1 from './work-showhi-pic-1.png';
import './Showhi.css';

export default class Showhi extends React.Component {

    constructor(_props) {

        super(_props);
        this.state = {
                offsetY: 0
            };
        Wheel.add( () => {
                const _isAbove = window.scrollY < ( this.state.sectionElement.offsetTop - window.innerHeight ) ;
                const _isBelow = window.scrollY > ( this.state.sectionElement.offsetTop + this.state.sectionElement.clientHeight) ;
                if ( _isAbove || _isBelow ) return;
                this.setState({
                        offsetY: -( window.scrollY - this.state.sectionElement.offsetTop ) / 0.6 + 70
                    });
            } );

    }

    componentDidMount() {

        this.setState({
                sectionElement: document.getElementById("Showhi")
            });

    }

    render() {

        return (
                <section id="Showhi" style={ { backgroundImage: `url(${ showhiPicture1 })`, backgroundPositionY: this.state.offsetY } }>
                    <div className="work-container">
                        <h2>
                            <img src={ showhiLogo } alt="showhi-logo" style={ { height: 24 } } />
                            <span>ShowHi</span>
                        </h2>
                        <div className="work-specialities">
                            <span>JavaScript</span>
                            <span>AngularJS</span>
                            <span>Git</span>
                            <span>XMLHttpRequest</span>
                        </div>
                        <div className="work-explain">
                            Content Publish
                        </div>
                    </div>
                </section>
            );

    }

}