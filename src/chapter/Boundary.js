import React from 'react';
import Wheel from './../factory/Wheel';
import './Boundary.css';

export default class Boundary extends React.Component {

    constructor(_props) {

        super(_props);
        this.state = {
                isFullview: false,
                scrollTop: 0
            };
        Wheel.add( () => {
                const _isFullview = ( window.scrollY > 300 );
                if ( this.state.isFullview === _isFullview ) return;
                this.setState({
                        isFullview: _isFullview
                    });
            } );

    }

    componentDidMount() {
        this.setState({
                isFullview: ( window.scrollY > 300 )
            });
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