import React from 'react';
import './Boundary.css';

export default class Boundary extends React.Component {

    constructor(_props) {

        super(_props);
        this.state = {
                isFullview: false,
                scrollTop: 0
            };

        window.addEventListener("wheel", () => {
                this.setState({
                        isFullview: ( window.scrollY > 400 )
                    });
            }, false);

    }

    render() {

        return (
                <div id="Boundary" className={`${ this.state.isFullview ? "fullview" : "" }`}>
                    <div className="boundary-item boundary-item__top"></div>
                    <div className="boundary-item boundary-item__bottom"></div>
                    <div className="boundary-item boundary-item__left"></div>
                    <div className="boundary-item boundary-item__right"></div>
                </div>
            );

    }

}