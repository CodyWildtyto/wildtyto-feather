import React from 'react';
import Wheel from './../factory/Wheel';
import Svg from './../factory/Svg';
import logo from './logo-light.svg';
import './Logo.css';

export default class Logo extends React.Component {

    constructor(_props) {

        super(_props);
        this.state = {
                isDarkmode: false
            };
        Wheel.add( () => {
                const _isDarkmode = ( window.scrollY > 400 );
                if ( this.state.isDarkmode === _isDarkmode ) return;
                this.setState({
                        isDarkmode: _isDarkmode
                    });
            } );

    }

    componentDidMount() {

        Svg.exchange("#Logo img");
        this.setState({
                isDarkmode: ( window.scrollY > 400 )
            });

    }

    render() {

        return (
                <nav id="Logo" className={`${ this.state.isDarkmode ? "darkmode" : "" }`}>
                    <img src={ logo } alt="logo" />
                    <span>Cody</span>
                    <span>Wildtyto</span>
                </nav>
            );

    }

}