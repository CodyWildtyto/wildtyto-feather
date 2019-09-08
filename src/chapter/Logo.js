import React from 'react';
import logo from './logo-light.svg';
import './Logo.css';

export default class Logo extends React.Component {

    constructor(_props) {

        super(_props);
        this.state = {
                isDarkmode: false
            };

        window.addEventListener("wheel", () => {
                this.setState({
                        isDarkmode: ( window.scrollY > 400 )
                    });
            }, false);

    }

    componentDidMount() {

        const _elementWithSVG = document.querySelector("#Logo img");
        const _url = _elementWithSVG.src || _elementWithSVG.data;
        _readSVGFile(_url, _onCallback);
        this.setState({
                isDarkmode: ( window.scrollY > 400 )
            });

        function _onCallback(_response) {
            var _tempElement = document.createElement("div");
            _tempElement.innerHTML = _response;
            var _svg = _tempElement.querySelector("svg");
            if ( !_svg ) return;
            var _parentElement = _elementWithSVG.parentNode;
            _parentElement.insertBefore(_svg, _elementWithSVG);
            _parentElement.removeChild(_elementWithSVG);
        }


        function _readSVGFile(_url, _callback) {
            if ( !_url ) return;
            if ( !_callback ) return;
            var _xhttp = new XMLHttpRequest();
            _xhttp.onreadystatechange = _onReadyStateChange;
            _xhttp.open("GET", _url, true);
            _xhttp.send();

            function _onReadyStateChange() {
                if ( _xhttp.readyState !== 4 ) return;
                var _response = _xhttp.responseText;
                if ( _xhttp.status === 200 ) _onSuccess(_response);
                else _onError(_response);
            }

            function _onSuccess(_response) {
                _callback(_response);
            }

            function _onError() {
                _callback();
            }
        }

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