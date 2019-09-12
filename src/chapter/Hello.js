import React from 'react';
import helloNoper from './hello-noper.png';
import helloCody from './hello-cody.png';
import helloWork from './hello-work.png';
import helloProject from './hello-project.png';
import './Hello.css';

export default class Hello extends React.Component {

    constructor(_props) {

        super(_props);
        this.state = {
                offsetY: 0
            };

        window.addEventListener("wheel", () => {
                const _marginTop = this.state.sectionElement.style.marginTop.replace("px", "");
                this.setState({
                        offsetY: ( window.scrollY - _marginTop ) / 5 + 160
                    });
            }, false);

    }

    componentDidMount() {

        this.setState({
                sectionElement: document.querySelector("#Hello .hello-shortcuts")
            });

    }

    render() {

        return (
                <section id="Hello">
                    <div className="hello-shortcuts" style={ { marginTop: `${ this.state.offsetY }px` } }>
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