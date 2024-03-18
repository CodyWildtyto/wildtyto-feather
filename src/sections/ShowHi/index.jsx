import { useEffect, useRef, useState } from 'react';

import Card from '../../components/Card';
import * as Wheel from '../../utils/wheel';

import './style.css';

const DEFAULT_OFFSET_Y = 80;
const IMAGE_PATH = {
  LOGO: '/assets/works-showhi-logo.png',
  PIC: '/assets/works-showhi-pic-1.png',
};

const ShowHi = () => {
  const sectionElement = useRef();
  const [offsetY, setOffsetY] = useState(DEFAULT_OFFSET_Y);

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
    setOffsetY(_offsetY / 0.6 + DEFAULT_OFFSET_Y);
  };

  useEffect(() => {
    sectionElement.current = document.getElementById('ShowHi');

    onWheel();
    Wheel.add(onWheel);
  }, []);

  return (
    <section
      id="ShowHi"
      style={{
        backgroundImage: `url(${IMAGE_PATH.PIC})`,
        backgroundPositionY: offsetY,
      }}
    >
      <Card
        icon={IMAGE_PATH.LOGO}
        iconAlt="showhi-logo"
        iconHeight={24}
        organColor="#e04747"
        organs={['AngularJS']}
        title="ShowHi"
      >
        <p>
          There was a social network for students who would like to study abroad
          and school recruiters who help students applying the university.
        </p>
        <p>
          School pages could be managed by the school recruiters. Students were
          able to contact and apply the university school directly. Also it was
          easy to send documents to each other in messaging system.
        </p>
        <p>
          I must designed a flexible web application system for appending
          different kind of tool like messaging, video communication plugin and
          file service.
        </p>
      </Card>
    </section>
  );
};

export default ShowHi;
