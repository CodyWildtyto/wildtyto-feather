import Skills from '../../components/Skills';
import Title from '../../components/Title';
import { SKILL_ITEMS } from '../../configs';
import { DESCRIPTION } from '../../i18n/en';

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
                        items={SKILL_ITEMS}
                    />
                </div>
            </div>
            <div className="about-bio">{DESCRIPTION.ABOUT}</div>
        </section>
    );
}

export default About;
