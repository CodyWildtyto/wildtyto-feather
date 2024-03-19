import Boundary from '../../layouts/Boundary';
import About from '../../sections/About';
import Contact from '../../sections/Contact';
import EnglishAgency from '../../sections/EnglishAgency';
import Intro from '../../sections/Intro';
import Noper from '../../sections/Noper';
import Projects from '../../sections/Projects';
import ShibaTV from '../../sections/ShibaTv';
import ShowHi from '../../sections/ShowHi';
import Works from '../../sections/Works';

import './style.css';

function App() {
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
}

export default App;
