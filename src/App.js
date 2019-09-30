import React from 'react';
import Logo from './chapter/Logo';
import Boundary from './chapter/Boundary';
import Navigator from './chapter/Navigator';
import Intro from './chapter/Intro';
import Hello from './chapter/Hello';
import Work from './chapter/Work';
import Noper from './chapter/Noper';
import Englishagency from './chapter/Englishagency';
import Showhi from './chapter/Showhi';
import Projects from './chapter/Projects';
import About from './chapter/About';
import Contact from './chapter/Contact';
import './App.css';

export default class App extends React.Component {

    componentDidMount() {

        // _inspectHash();
        // window.addEventListener("hashchange", () => {
        //         _inspectHash();
        //     } , false);

        // function _inspectHash() {
        //     let _hashText = document.location.hash.replace(/^#\//, "").toLowerCase();
        //     if ( _hashText === "" ) {
        //         _smoothScrollTo("Hello");
        //     }
        //     else if ( _hashText === "work" ) {
        //         _smoothScrollTo("Work");
        //     }
        //     else if ( _hashText === "projects" ) {
        //         _smoothScrollTo("Projects");
        //     }
        //     else if ( _hashText === "about" ) {
        //         _smoothScrollTo("About");
        //     }
        // }

        // function _smoothScrollTo(_idName) {
        //     const _sectionWork = document.getElementById(_idName);
        //     const _offsetTop = _sectionWork.offsetTop;
        //     const _timer = setInterval( () => {
        //             if ( _offsetTop === window.scrollY ) return clearInterval(_timer);

        //         } , 100);
        //     window.scrollTo({
        //             top: _offsetTop,
        //             behavior: "smooth"
        //         });
        // }

    }

    render() {
        return (
                <article id="App">
                    <Logo></Logo>
                    <Boundary></Boundary>
                    <Navigator></Navigator>
                    <Intro></Intro>
                    <Hello></Hello>
                    <Work></Work>
                    <Noper></Noper>
                    <Englishagency></Englishagency>
                    <Showhi></Showhi>
                    <Projects></Projects>
                    <About></About>
                    <Contact></Contact>
                </article>
            );
    }

}
