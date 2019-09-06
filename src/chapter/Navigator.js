import React from 'react';
import './Navigator.css';

export default class Navigator extends React.Component {

    constructor(_props) {

        super(_props);
        this.state = {
                isFullview: false
            };

        window.addEventListener("wheel", () => {
                this.setState({
                        isFullview: ( window.scrollY > 600 )
                    });
            }, false);

    }

    render() {

        return (
                <nav id="Navigator" className={`${ this.state.isFullview ? "fullview" : "" }`}>
                    <h2>Hello!</h2>
                    <h3>
                        <p>I am a</p>
                        <p>Full Stack Developer</p>
                        <p>& UX Designer</p>
                    </h3>
                </nav>
            );

    }

}