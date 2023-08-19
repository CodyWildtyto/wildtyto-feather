export default class Svg {

    static exchange(_selector) {

        const _elementWithSVG = document.querySelector(_selector) || {};
        const _url = _elementWithSVG.src || _elementWithSVG.data ;
        _readSVGFile(_url, _onCallback);

        function _readSVGFile(_url, _callback) {
            if ( !_url ) return;
            if ( !( _callback instanceof Function ) ) return;
            var _xhttp = new XMLHttpRequest();
            _xhttp.onreadystatechange = () => {
                    if ( _xhttp.readyState !== 4 ) return;
                    var _response = _xhttp.responseText;
                    _callback(_response);
                };
            _xhttp.open("GET", _url, true);
            _xhttp.send();
        }

        function _onCallback(_response) {
            var _tempElement = document.createElement("div");
            _tempElement.innerHTML = _response;
            var _svg = _tempElement.querySelector("svg");
            if ( !(_svg) ) return;
            var _parentElement = _elementWithSVG.parentNode;
            _parentElement.insertBefore(_svg, _elementWithSVG);
            _parentElement.removeChild(_elementWithSVG);
        }

    }

}