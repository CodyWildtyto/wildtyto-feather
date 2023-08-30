import Logo from '../../chapter/Logo';
import Boundary from '../../chapter/Boundary';
import Navigator from '../../chapter/Navigator';
import Intro from '../../chapter/Intro';
import Hello from '../../chapter/Hello';
import Works from '../../chapter/Works';
import Noper from '../../chapter/Noper';
import EnglishAgency from '../../chapter/EnglishAgency';
import ShowHi from '../../chapter/ShowHi';
import Projects from '../../chapter/Projects';
import About from '../../chapter/About';
import Contact from '../../chapter/Contact';

import './style.css';

const App = () => {
  return (
    <article id="App">
      <Logo></Logo>
      <Boundary></Boundary>
      <Navigator></Navigator>
      <Intro></Intro>
      <Hello></Hello>
      <Works />
      <Noper></Noper>
      <EnglishAgency></EnglishAgency>
      <ShowHi></ShowHi>
      <Projects></Projects>
      <About></About>
      <Contact></Contact>
    </article>
  );
};

export default App;
