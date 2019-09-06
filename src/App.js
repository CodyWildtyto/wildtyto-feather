import React from 'react';
import Logo from './chapter/Logo';
import Boundary from './chapter/Boundary';
import Navigator from './chapter/Navigator';
import Intro from './chapter/Intro';
import Hello from './chapter/Hello';
import Work from './chapter/Work';
import Noper from './chapter/Noper';
import Englishagency from './chapter/Englishagency';
import './App.css';

export default class App extends React.Component {

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
                </article>
            );
    }

}
