import React from 'react';
import Wheel from './../factory/Wheel';
import showhiLogo from './work-showhi-logo.png';
import showhiPicture1 from './work-showhi-pic-1.png';
import './Showhi.css';

export default class Showhi extends React.Component {

    constructor(_props) {

        super(_props);
        const _defaultOffsetY = 70;
        this.state = {
                offsetY: _defaultOffsetY
            };
        Wheel.add( () => {
                let _offsetY = 0;
                if ( window.innerWidth > 1024 ) {
                    const _isAbove = window.scrollY < ( this.state.sectionElement.offsetTop - window.innerHeight ) ;
                    const _isBelow = window.scrollY > ( this.state.sectionElement.offsetTop + this.state.sectionElement.clientHeight) ;
                    if ( _isAbove || _isBelow ) return;
                    _offsetY = -( window.scrollY - this.state.sectionElement.offsetTop );
                }
                this.setState({
                        offsetY: _offsetY / 0.6 + _defaultOffsetY
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
                            <p>There is a social network for students who would like to study abroad and school recruiters who help students applying the university.</p>
                            <p>School pages can be managed by the school recruiters. Students are able to contact and apply the university school directly. Also it is easy to send documents to each other in messaging system.</p>
                            <p>I must designed a flexible web application system for appending different kind of tool like messaging, video communication plugin and file service.</p>
                        </div>
                    </div>
                </section>
            );

    }

}