import { DESCRIPTION } from '../../i18n/en';
import Boundary from '../../layouts/Boundary';
import About from '../../sections/About';
import Contact from '../../sections/Contact';
import Intro from '../../sections/Intro';
import Projects from '../../sections/Projects';
import Works from '../../sections/Works';
import Work from '../Work';

import './style.css';
import '../../sections/Works/english-agency.css';
import '../../sections/Works/noper.css';
import '../../sections/Works/shiba-tv.css';
import '../../sections/Works/showhi.css';

function App() {
    return (
        <article id="App">
            <Boundary>
                <Intro />
                <Works />
                <Work
                    {...{
                        description: DESCRIPTION.WORK_SHIBATV,
                        iconHeight: 24,
                        id: 'ShibaTv',
                        link: 'https://codywildtyto.github.io/shiba-tv',
                        logoUrl: '/assets/works-shibatv-logo.png',
                        name: 'shiba-tv',
                        organColor: '#c69c6d',
                        organs: ['React', 'TypeScript'],
                        thumbnails: [
                            {
                                imageUrl: '/assets/works-shibatv-pic-1.png',
                                offsetY: 120,
                                rateY: 0.4,
                            },
                            {
                                imageUrl: '/assets/works-shibatv-pic-2.png',
                                offsetY: 60,
                                rateY: 0.6,
                            },
                        ],
                        title: 'SHIBA TV',
                    }}
                />
                <Work
                    {...{
                        description: DESCRIPTION.WORK_NOPER,
                        id: 'Noper',
                        logoUrl: '/assets/works-noper-logo.png',
                        name: 'noper',
                        organColor: '#009ecc',
                        organs: [
                            'React',
                            'JavaScript',
                            'Node.js',
                            'LINE Bot SDK',
                            'GraphQL',
                            'Webpack',
                            'Express.js',
                            'Jest',
                            'DialogFlow',
                            'Google Analytics',
                        ],
                        thumbnails: [
                            {
                                imageUrl: '/assets/works-noper-pic-1.png',
                                offsetY: 110,
                                rateY: 0.6,
                            },
                            {
                                imageUrl: '/assets/works-noper-pic-2.png',
                                offsetY: 65,
                                rateY: 0.7,
                            },
                        ],
                        title: 'noper',
                    }}
                />
                <Work
                    {...{
                        description: DESCRIPTION.WORK_ENGLISH_AGENCY,
                        id: 'EnglishAgency',
                        logoUrl: '/assets/works-englishagency-logo.png',
                        name: 'english-agency',
                        organs: [
                            'Vue.js',
                            'Vuex',
                            'Vue SSR',
                            'Node.js',
                            'Webpack',
                            'Express.js',
                            'Google Analytics',
                        ],
                        thumbnails: [
                            {
                                imageUrl:
                                    '/assets/works-englishagency-pic-1.png',
                                offsetY: 150,
                                rateY: 0.6,
                            },
                            {
                                imageUrl:
                                    '/assets/works-englishagency-pic-2.png',
                                offsetY: 90,
                                rateY: 0.7,
                            },
                        ],
                        title: 'English.Agency',
                    }}
                />
                <Work
                    {...{
                        description: DESCRIPTION.WORK_SHOW_HI,
                        id: 'ShowHi',
                        logoUrl: '/assets/works-showhi-logo.png',
                        name: 'showhi',
                        organColor: '#e04747',
                        organs: ['AngularJS'],
                        thumbnails: [
                            {
                                imageUrl: '/assets/works-showhi-pic-1.png',
                                offsetY: 80,
                                rateY: 0.6,
                            },
                        ],
                        title: 'ShowHi',
                    }}
                />
                <Projects />
                <About />
                <Contact />
            </Boundary>
        </article>
    );
}

export default App;
