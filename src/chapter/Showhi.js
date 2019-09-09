import React from 'react';
import showhiLogo from './work-showhi-logo.png';
import showhiPicture1 from './work-showhi-pic-1.png';
import './Showhi.css';

export default class Showhi extends React.Component {

    render() {

        return (
                <section id="Showhi">
                    <div className="work-preview">
                        <img src={ showhiPicture1 } alt="showhi-1" style={ { height: 200 } } />
                    </div>
                    <div className="work-container">
                        <h2>
                            <img src={ showhiLogo } alt="showhi-logo" style={ { height: 30 } } />
                            <span>ShowHi</span>
                        </h2>
                        <div className="work-specialities">
                            <span>JavaScript</span>
                            <span>AngularJS</span>
                            <span>Git</span>
                        </div>
                        <div className="work-explain">
                            Content Publish
                        </div>
                    </div>
                </section>
            );

    }

}