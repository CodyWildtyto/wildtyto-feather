import { useEffect, useRef, useState } from 'react';

import Card from '../../components/Card';
import { DESCRIPTION } from '../../configs/variables';
import * as Wheel from '../../utils/wheel';

import './style.css';

const IMAGE_PATH = {
  LOGO: '/assets/works-noper-logo.png',
  PIC_1: '/assets/works-noper-pic-1.png',
  PIC_2: '/assets/works-noper-pic-2.png',
};

function Noper () {
  const sectionElement = useRef<HTMLElement | null>();
  const [offsetY1, setOffsetY1] = useState('0');
  const [offsetY2, setOffsetY2] = useState('0');

  const handleChanged = () => {
    if (sectionElement.current && window.innerWidth > 1024) {
      let offsetY = 0;

      const isAbove =
        window.scrollY < sectionElement.current.offsetTop - window.innerHeight;
      const isBelow =
        window.scrollY >
        sectionElement.current.offsetTop + sectionElement.current.clientHeight;

      if (isAbove || isBelow) return;
      offsetY = -(window.scrollY - sectionElement.current.offsetTop);

      setOffsetY1(`${offsetY / 0.6 + 110}px`);
      setOffsetY2(`${offsetY / 0.7 + 65}px`);
    }
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
        backgroundPositionY: `${offsetY1}, ${offsetY2}`,
      }}
    >
      <Card
        icon={IMAGE_PATH.LOGO}
        iconAlt="noper-logo"
        iconHeight={30}
        link=""
        organColor="#009ecc"
        organs={[
          'JavaScript',
          'LINE Bot SDK',
          'React',
        ]}
        title="noper"
      >
        {DESCRIPTION.WORK_NOPER}
      </Card>
    </section>
  );
}

export default Noper;
