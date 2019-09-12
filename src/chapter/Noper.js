import React from 'react';
import noperLogo from './work-noper-logo.png';
import noperPicture1 from './work-noper-pic-1.png';
import noperPicture2 from './work-noper-pic-2.png';
import './Noper.css';

export default class Noper extends React.Component {

    render() {

        return (
                <section id="Noper">
                    <div className="work-preview">
                        <img src={ noperPicture1 } alt="noper-1" style={ { height: 360 } } />
                        <img src={ noperPicture2 } alt="noper-2" style={ { height: 360 } } />
                    </div>
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
                            We created a chat bot -- noper for focusing on key point tasks  in business conversation at messaging applications like LINE, or Facebook Messager.
                        </div>
                    </div>
                </section>
            );

    }

}