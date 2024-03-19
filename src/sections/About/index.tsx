import Skills from '../../components/Skills';
import Title from '../../components/Title';
import { DESCRIPTION } from '../../configs/variables';

import './style.css';

const IMAGE_PATH = {
    AVATAR: './assets/about-avatar.jpeg',
};

function About() {
    return (
        <section id="About">
            <Title subtitle="Cody Wildtyto" title="About" />
            <div className="about-profile">
                <div className="about-block">
                    <div
                        className="about-avatar"
                        style={{ backgroundImage: `url(${IMAGE_PATH.AVATAR})` }}
                    />
                </div>
                <div className="about-block">
                    <Skills
                        items={{
                            angular: {
                                experience: 2,
                                frequency: 4,
                                name: 'AngularJS',
                            },
                            git: { experience: 9, frequency: 10, name: 'Git' },
                            graphql: {
                                experience: 7,
                                frequency: 8,
                                name: 'GraphQL',
                            },
                            js: {
                                experience: 10,
                                frequency: 10,
                                name: 'JavaScript',
                            },
                            nextjs: {
                                experience: 8,
                                frequency: 9,
                                name: 'Next.js',
                            },
                            python: {
                                experience: 3,
                                frequency: 2,
                                name: 'Python',
                            },
                            react: {
                                experience: 9,
                                frequency: 8,
                                name: 'React',
                            },
                            rn: {
                                experience: 4,
                                frequency: 3,
                                name: 'React Native',
                            },
                            sass: { experience: 7, frequency: 5, name: 'SASS' },
                            sqlite: {
                                experience: 4,
                                frequency: 7,
                                name: 'SQLite',
                            },
                            typescript: {
                                experience: 8,
                                frequency: 6,
                                name: 'TypeScript',
                            },
                            ui: { experience: 9, frequency: 4, name: 'UI' },
                            ux: { experience: 10, frequency: 6, name: 'UX' },
                            vue: {
                                experience: 5,
                                frequency: 4,
                                name: 'Vue.js',
                            },
                            webgl: {
                                experience: 3,
                                frequency: 5,
                                name: 'WebGL',
                            },
                            webpack: {
                                experience: 6,
                                frequency: 9,
                                name: 'Webpack',
                            },
                            websocket: {
                                experience: 6,
                                frequency: 6,
                                name: 'WebSocket',
                            },
                        }}
                    />
                </div>
            </div>
            <div className="about-bio">{DESCRIPTION.ABOUT}</div>
        </section>
    );
}

export default About;
