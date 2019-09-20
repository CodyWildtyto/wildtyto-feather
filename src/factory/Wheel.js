export default class Wheel {

    static init() {

        if ( this.isInitial ) return;
        this.currentY = 0;
        this._inspectList();
        window.addEventListener("wheel", _event => {
                if ( Math.abs( this.currentY - window.scrollY ) < 3 ) return;
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