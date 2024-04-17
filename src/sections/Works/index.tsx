import Title from '../../components/Title';
import Work from '../../components/Work';
import { DESCRIPTION } from '../../i18n/en';

import './style.css';
import './english-agency.css';
import './noper.css';
import './shiba-tv.css';
import './showhi.css';

function Works() {
    return (
        <>
            <section id="Works">
                <Title description={DESCRIPTION.WORKS} title="Works" />
            </section>
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
                            imageUrl: '/assets/works-englishagency-pic-1.png',
                            offsetY: 150,
                            rateY: 0.6,
                        },
                        {
                            imageUrl: '/assets/works-englishagency-pic-2.png',
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
        </>
    );
}

export default Works;
