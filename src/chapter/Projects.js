import React from 'react';
import projectsIcon1 from './projects-icon-1.png';
import projectsIcon2 from './projects-icon-2.png';
import './Projects.css';

export default class Projects extends React.Component {

    render() {

        return (
                <section id="Projects">
                    <h2>Projects</h2>
                    <p>Most of them are built with different features, such as pure JavaScript, React, Vue.js and AngularJS. Here is a selection of my recent work.</p>
                    <div className="projects-container">
                        <div className="projects-project-item projects-project-1">
                            <img src={ projectsIcon1 } alt="projects-icon-1" style={ { height: 100 } } />
                            <h3>SVGTag.js</h3>
                        </div>
                        <div className="projects-project-item projects-project-2">
                            <img src={ projectsIcon2 } alt="projects-icon-2" style={ { height: 90 } } />
                            <h3>Interlace.js</h3>
                        </div>
                    </div>
                </section>
            );

    }

}