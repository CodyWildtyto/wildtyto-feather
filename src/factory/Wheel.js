export default class Wheel {

    static init() {

        const _self = this;
        if ( this.isInitial ) return;
        this.currentY = 0;
        this.currentNow = 0;
        this._inspectList();
        window.addEventListener("wheel", _onWheel, false);
        window.addEventListener("touchmove", _onWheel, false);
        window.addEventListener("resize", _onWheel, false);
        this.isInitial = true;

        function _onWheel(_event) {
            const _tempNow = Date.now();
            if ( ( _tempNow - this.currentNow ) < 30 ) return;
            this.currentNow = _tempNow;
            if ( Math.abs( _self.currentY - window.scrollY ) < 3 ) return;
            _self.callbackList.map( _callback => {
                    if ( _callback instanceof Function ) _callback(_event);
                    return _callback;
                } );
        }

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