import About from '../../sections/About';
import Contact from '../../sections/Contact';
import Intro from '../../sections/Intro';
import Projects from '../../sections/Projects';
import Works from '../../sections/Works';
import Boundary from '../Boundary';

import './style.css';

function App() {
    return (
        <article id="App">
            <Boundary>
                <Intro />
                <Works />
                <Projects />
                <About />
                <Contact />
            </Boundary>
        </article>
    );
}

export default App;
