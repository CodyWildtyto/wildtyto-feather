import React from 'react';
import aboutAvatar from './about-avatar.jpeg'
import './About.css';

export default class About extends React.Component {

    render() {

        return (
                <section id="About">
                    <h2>About</h2>
                    <h3>Cody Wildtyto</h3>
                    <div className="about-row">
                        <div className="about-column">
                            <div className="about-avatar" style={ { backgroundImage: `url(${ aboutAvatar })` } }></div>
                        </div>
                        <div className="about-column">
                            <div className="about-skills">
                                <span style={ { bottom: "100%", left: "100%" } }>JavaScript</span>
                                <span style={ { bottom: "90%", left: "100%" } }>Git</span>
                                <span style={ { bottom: "70%", left: "70%" } }>React</span>
                                <span style={ { bottom: "60%", left: "70%" } }>React Native</span>
                                <span style={ { bottom: "70%", left: "20%" } }>AngularJS</span>
                                <span style={ { bottom: "70%", left: "40%" } }>Vue.js</span>
                                <span style={ { bottom: "50%", left: "40%" } }>Vue Server Renderer</span>
                                <span style={ { bottom: "20%", left: "70%" } }>Webpack</span>
                                <span style={ { bottom: "50%", left: "80%" } }>NPM</span>
                                <span style={ { bottom: "30%", left: "20%" } }>Google Analytics</span>
                                <span style={ { bottom: "60%", left: "40%" } }>Express</span>
                                <span style={ { bottom: "100%", left: "40%" } }>LINE Bot SDK</span>
                                <span style={ { bottom: "40%", left: "50%" } }>PM2</span>
                                <span style={ { bottom: "80%", left: "80%" } }>XMLHttpRequest</span>
                                <span style={ { bottom: "10%", left: "10%" } }>Axios</span>
                                <span style={ { bottom: "0%", left: "10%" } }>Request</span>
                                <span style={ { bottom: "90%", left: "80%" } }>UX Design</span>
                                <span style={ { bottom: "90%", left: "50%" } }>UI Design</span>
                            </div>
                        </div>
                    </div>
                    <div className="about-row">
                        <p className="about-column">
                            A pure JavaScript plugin that be able to insert SVG elements which are modifiable instead of IMG or OBJECT elements from SVG files.
                        </p>
                    </div>
                    <div className="about-container about-suffix">
                    </div>
                </section>
            );

    }

}