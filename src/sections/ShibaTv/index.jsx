import { useEffect, useRef, useState } from 'react';

import Card from '../../components/Card';
import * as Wheel from '../../utils/wheel';

import './style.css';

const DEFAULT_OFFSET_Y1 = 120;
const DEFAULT_OFFSET_Y2 = 60;
const IMAGE_PATH = {
  LOGO: '/assets/works-shibatv-logo.png',
  PIC_1: '/assets/works-shibatv-pic-1.png',
  PIC_2: '/assets/works-shibatv-pic-2.png',
};

const ShibaTv = () => {
  const sectionElement = useRef();
  const [offsetY1, setOffsetY1] = useState(DEFAULT_OFFSET_Y1);
  const [offsetY2, setOffsetY2] = useState(DEFAULT_OFFSET_Y2);

  const onWheel = () => {
    let _offsetY = 0;

    if (window.innerWidth > 1024) {
      const _isAbove =
        window.scrollY < sectionElement.current.offsetTop - window.innerHeight;
      const _isBelow =
        window.scrollY >
        sectionElement.current.offsetTop + sectionElement.current.clientHeight;

      if (_isAbove || _isBelow) return;
      _offsetY = -(window.scrollY - sectionElement.current.offsetTop);
    }

    setOffsetY1(`${_offsetY / 0.4 + DEFAULT_OFFSET_Y1}px`);
    setOffsetY2(`${_offsetY / 0.6 + DEFAULT_OFFSET_Y2}px`);
  };

  useEffect(() => {
    sectionElement.current = document.getElementById('ShibaTv');

    onWheel();
    Wheel.add(onWheel);
  }, []);

  return (
    <section
      id="ShibaTv"
      style={{
        backgroundImage: `url(${IMAGE_PATH.PIC_1}), url(${IMAGE_PATH.PIC_2})`,
        backgroundPositionY: `${offsetY1}, ${offsetY2}`,
      }}
    >
      <Card
        icon={IMAGE_PATH.LOGO}
        iconAlt="shiba-tv-logo"
        iconHeight={24}
        link="https://codywildtyto.github.io/shiba-tv"
        organColor="#c69c6d"
        organs={['React', 'TypeScript']}
        title="SHIBA TV"
      >
        <p>
          Demo OTT client UI with YouTube API
        </p>
        <p>
          TBD
        </p>
      </Card>
    </section>
  );
};

export default ShibaTv;
