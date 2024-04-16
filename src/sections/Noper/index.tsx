import { useEffect, useRef, useState } from 'react';

import Card from '../../components/Card';
import { DESCRIPTION } from '../../i18n/en';
import * as Wheel from '../../utils/wheel';

import './style.css';

const DEFAULT_OFFSET_Y1 = 110;
const DEFAULT_OFFSET_Y2 = 65;
const IMAGE_PATH = {
    LOGO: '/assets/works-noper-logo.png',
    PIC_1: '/assets/works-noper-pic-1.png',
    PIC_2: '/assets/works-noper-pic-2.png',
};

function Noper() {
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
        sectionElement.current = document.getElementById('Noper');

        handleChanged();
        Wheel.add(handleChanged);
    }, []);

    return (
        <section
            id="Noper"
            style={{
                backgroundImage: `url(${IMAGE_PATH.PIC_1}), url(${IMAGE_PATH.PIC_2})`,
                backgroundPositionY: `${offsetY1}px, ${offsetY2}px`,
            }}
        >
            <Card
                icon={IMAGE_PATH.LOGO}
                iconAlt="noper-logo"
                iconHeight={30}
                organColor="#009ecc"
                organs={['JavaScript', 'LINE Bot SDK', 'React']}
                title="noper"
            >
                {DESCRIPTION.WORK_NOPER}
            </Card>
        </section>
    );
}

export default Noper;
