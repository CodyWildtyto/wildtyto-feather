export default class Wheel {

    static init() {

        if ( this.isInitial ) return;
        this._inspectList();
        window.addEventListener("wheel", _event => {
                this.callbackList.map( _callback => {
                        if ( _callback instanceof Function ) _callback(_event);
                        return _callback;
                    } );
            }, false);
        this.isInitial = true;

    }

    static add(_callback) {

        this.init();
        this.callbackList.push(_callback);

    }

    static _inspectList() {

        if ( this.callbackList instanceof Array ) return;
        this.callbackList = [];

    }

}