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
                            <p>
                                A pure JavaScript plugin that be able to insert SVG elements which are modifiable instead of IMG or OBJECT elements from SVG files.
                            </p>
                            <a href="https://github.com/Wildtyto/SVGTag.js" target="_blank" rel="noopener noreferrer">DEMO</a>
                        </div>
                        <div className="projects-project-item projects-project-2">
                            <img src={ projectsIcon2 } alt="projects-icon-2" style={ { height: 90 } } />
                            <h3>Interlace.js</h3>
                            <p>
                                The pure JavaScript plugin. Executing stunt-man and preview when image file is been loading likes interlaced images.
                            </p>
                            <a href="https://github.com/Wildtyto/Interlace.js" target="_blank" rel="noopener noreferrer">DEMO</a>
                        </div>
                    </div>
                </section>
            );

    }

}