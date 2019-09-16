import React from 'react';
import './Navigator.css';

export default class Navigator extends React.Component {

    constructor(_props) {

        super(_props);
        this.state = {
                isNavmode: false
            };

        window.addEventListener("wheel", () => {
                this.setState({
                        isNavmode: ( window.scrollY > 300 )
                    });
            }, false);

    }

    componentDidMount() {
        this.setState({
                isNavmode: ( window.scrollY > 300 )
            });
    }

    render() {

        return (
                <div id="Navigator" className={`${ this.state.isNavmode ? "navmode" : "" }`}>
                    <nav>
                        <a href="/#/">Hello</a>
                        <a href="/#/Work">Work</a>
                        <a href="/#/Projects">Projects</a>
                        <a href="/#/About">About</a>
                    </nav>
                    <p>
                        <a href="https://github.com/Wildtyto">GitHub</a>
                        <a href="https://www.linkedin.com/in/wildtyto/">LinkedIn</a>
                        <a href="mailto:wildtyto@gmail.com">Mail</a>
                    </p>
                </div>
            );

    }

}