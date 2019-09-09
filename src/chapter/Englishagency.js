import React from 'react';
import englishagencyLogo from './work-englishagency-logo.png';
import englishagencyPicture1 from './work-englishagency-pic-1.png';
import englishagencyPicture2 from './work-englishagency-pic-2.png';
import './Englishagency.css';

export default class Englishagency extends React.Component {

    render() {

        return (
                <section id="Englishagency">
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
                            Content Publish
                        </div>
                    </div>
                    <div className="work-preview">
                        <img src={ englishagencyPicture2 } alt="englishagency-2" style={ { height: 180 } } />
                        <img src={ englishagencyPicture1 } alt="englishagency-1" style={ { height: 170 } } />
                    </div>
                </section>
            );

    }

}