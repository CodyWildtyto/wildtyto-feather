import React from 'react';
import helloNoper from './hello-noper.png';
import helloCody from './hello-cody.png';
import helloWork from './hello-work.png';
import helloProject from './hello-project.png';
import './Hello.css';

export default class Hello extends React.Component {

    render() {

        return (
                <section id="Hello">
                    <div className="hello-shortcuts">
                        <div className="hello-noper hello-shortcut-item" style={ { backgroundImage: `url(${ helloNoper })` } }>
                            <h5>The Recently Work</h5>
                            <h4>noper</h4>
                        </div>
                        <div className="hello-about hello-shortcut-item" style={ { backgroundImage: `url(${ helloCody })` } }>
                            <h4>About</h4>
                        </div>
                        <div className="hello-work hello-shortcut-item" style={ { backgroundImage: `url(${ helloWork })` } }>
                            <h4>Work</h4>
                        </div>
                        <div className="hello-projects hello-shortcut-item" style={ { backgroundImage: `url(${ helloProject })` } }>
                            <h4>Projects</h4>
                        </div>
                    </div>
                </section>
            );

    }

}