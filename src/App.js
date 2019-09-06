import React from 'react';
import Logo from './chapter/Logo';
import Boundary from './chapter/Boundary';
import Navigator from './chapter/Navigator';
import Hello from './chapter/Hello';
import Work from './chapter/Work';
import Noper from './chapter/Noper';
import Englishagency from './chapter/Englishagency';
// import logo from './logo.svg';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default class App extends React.Component {

    render() {
        return (
                <article id="App">
                    <Logo></Logo>
                    <Boundary></Boundary>
                    <Navigator></Navigator>
                    <Hello></Hello>
                    <Work></Work>
                    <Noper></Noper>
                    <Englishagency></Englishagency>
                </article>
            );
    }

}
