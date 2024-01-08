import Boundary from '../../layouts/Boundary';
import Intro from '../../sections/Intro';
import Works from '../../sections/Works';
import Noper from '../../sections/Noper';
import EnglishAgency from '../../sections/EnglishAgency';
import ShibaTV from '../../sections/ShibaTv';
import ShowHi from '../../sections/ShowHi';
import Projects from '../../sections/Projects';
import About from '../../sections/About';
import Contact from '../../sections/Contact';

import './style.css';

const App = () => {
  return (
    <article id="App">
      <Boundary>
        <Intro />
        <Works />
        <ShibaTV />
        <Noper />
        <EnglishAgency />
        <ShowHi />
        <Projects />
        <About />
        <Contact />
      </Boundary>
    </article>
  );
};

export default App;
