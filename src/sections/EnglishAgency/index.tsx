import { useEffect, useRef, useState } from 'react';

import Card from '../../components/Card';
import { DESCRIPTION } from '../../configs/variables';
import * as Wheel from '../../utils/wheel';

import './style.css';

const DEFAULT_OFFSET_Y1 = 100;
const DEFAULT_OFFSET_Y2 = 70;
const IMAGE_PATH = {
    LOGO: '/assets/works-englishagency-logo.png',
    PIC_1: '/assets/works-englishagency-pic-1.png',
    PIC_2: '/assets/works-englishagency-pic-2.png',
};

function EnglishAgency() {
    const sectionElement = useRef<HTMLElement | null>();
    const [offsetY1, setOffsetY1] = useState(DEFAULT_OFFSET_Y1);
    const [offsetY2, setOffsetY2] = useState(DEFAULT_OFFSET_Y2);

    const handleChanged = () => {
        let offsetY = 0;

        if (sectionElement.current && window.innerWidth > 1024) {
            const isAbove =
                window.scrollY <
                sectionElement.current.offsetTop - window.innerHeight;
            const isBelow =
                window.scrollY >
                sectionElement.current.offsetTop +
                    sectionElement.current.clientHeight;

            if (isAbove || isBelow) return;
            offsetY = -(window.scrollY - sectionElement.current.offsetTop);
        }

        setOffsetY1(offsetY / 0.6 + DEFAULT_OFFSET_Y1);
        setOffsetY2(offsetY / 0.7 + DEFAULT_OFFSET_Y2);
    };

    useEffect(() => {
        sectionElement.current = document.getElementById('EnglishAgency');

        handleChanged();
        Wheel.add(handleChanged);
    }, []);

    return (
        <section
            id="EnglishAgency"
            style={{
                backgroundImage: `url(${IMAGE_PATH.PIC_1}), url(${IMAGE_PATH.PIC_2})`,
                backgroundPositionY: `${offsetY1}px, ${offsetY2}px`,
            }}
        >
            <Card
                icon={IMAGE_PATH.LOGO}
                iconAlt="english-agency-logo"
                iconHeight={30}
                link=""
                organs={['Vue.js', 'Vue Server Renderer']}
                title="English.Agency"
            >
                {DESCRIPTION.WORK_ENGLISH_AGENCY}
            </Card>
        </section>
    );
}

export default EnglishAgency;
