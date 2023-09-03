import { useEffect, useRef, useState } from 'react';

import Card from '../../components/Card';
import * as Wheel from '../../utils/wheel';

import './style.css';

const IMAGE_PATH = {
  LOGO: '/assets/works-noper-logo.png',
  PIC_1: '/assets/works-noper-pic-1.png',
  PIC_2: '/assets/works-noper-pic-2.png',
};

const Noper = () => {
  const sectionElement = useRef();
  const [offsetY1, setOffsetY1] = useState('0');
  const [offsetY2, setOffsetY2] = useState('0');

  const _onChanged = () => {
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

    setOffsetY1(`${_offsetY / 0.6 + 110}px`);
    setOffsetY2(`${_offsetY / 0.7 + 65}px`);
  };

  useEffect(() => {
    sectionElement.current = document.getElementById('Noper');

    _onChanged();
    Wheel.add(_onChanged);
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
        link="https://www.noper.in"
        organColor="#009ecc"
        organs={[
          'JavaScript',
          'Webpack',
          'LINE Bot SDK',
          'React',
          'NPM',
          'Git',
          'Google Analytics',
          'Express',
          'WebSocket',
          'PM2',
          'Axios',
        ]}
        title="noper"
      >
        <p>
          We created a chat bot -- noper for focusing on main tasks in business
          conversation at messaging tools like LINE, or Facebook Messager.
        </p>
        <p>
          Team manager could assign mission to members. Bot would notify each
          one who was assigned to. Also the manager would be notified when the
          works' state was changed or completed.
        </p>
        <p>
          Two partners and I processed the product. I was in charge of bot and
          web app development, and designed of user interface. In concert with
          back end developer for API in GraphQL.
        </p>
      </Card>
    </section>
  );
};

export default Noper;
