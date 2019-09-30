export default class Hash {

    static init() {

        const _self = this;
        if ( this.isInitial ) return;
        this.currentY = 0;
        this._inspectList();
        window.addEventListener("hashchange", _inspectHash, false);
        this.isInitial = true;

        function _inspectHash() {
            let _hashText = document.location.hash.replace(/^#\//, "").toLowerCase();
            if ( _hashText === "" ) _smoothScrollTo("Hello");
            else if ( _hashText === "work" ) _smoothScrollTo("Work");
            else if ( _hashText === "projects" ) _smoothScrollTo("Projects");
            else if ( _hashText === "about" ) _smoothScrollTo("About");
            else if ( _hashText === "noper" ) _smoothScrollTo("Noper");
        }

        function _smoothScrollTo(_idName) {
            const _sectionWork = document.getElementById(_idName);
            const _offsetTop = _sectionWork.offsetTop;
            const _timer = setInterval( () => {
                    if ( _offsetTop === window.scrollY ) return clearInterval(_timer);
                    _self.callbackList.map( _callback => {
                            if ( _callback instanceof Function ) _callback();
                            return _callback;
                        } );
                } , 30);
            window.scrollTo({
                    top: _offsetTop,
                    behavior: "smooth"
                });
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