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
                        isNavmode: ( window.scrollY > 400 )
                    });
            }, false);

    }

    componentDidMount() {
        this.setState({
                isNavmode: ( window.scrollY > 400 )
            });
    }

    render() {

        return (
                <nav id="Navigator" className={`${ this.state.isNavmode ? "navmode" : "" }`}>
                    <a href="/#/">Hello</a>
                    <a href="/#/Work">Work</a>
                    <a href="/#/Projects">Projects</a>
                    <a href="/#/About">About</a>
                </nav>
            );

    }

}