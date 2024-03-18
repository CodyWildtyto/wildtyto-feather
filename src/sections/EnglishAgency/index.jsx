import { useEffect, useRef, useState } from 'react';

import Card from '../../components/Card';
import * as Wheel from '../../utils/wheel';

import './style.css';

const IMAGE_PATH = {
  LOGO: '/assets/works-englishagency-logo.png',
  PIC_1: '/assets/works-englishagency-pic-1.png',
  PIC_2: '/assets/works-englishagency-pic-2.png',
};

const EnglishAgency = () => {
  const sectionElement = useRef();
  const [offsetY1, setOffsetY1] = useState();
  const [offsetY2, setOffsetY2] = useState();

  const _onChanged = () => {
    let _offsetY = 0;
    let _offsetY1 = 100;
    let _offsetY2 = 70;

    if (window.innerWidth > 1024) {
      const _isAbove =
        window.scrollY < sectionElement.current.offsetTop - window.innerHeight;
      const _isBelow =
        window.scrollY >
        sectionElement.current.offsetTop + sectionElement.current.clientHeight;

      if (_isAbove || _isBelow) return;
      _offsetY = -(window.scrollY - sectionElement.current.offsetTop);
      _offsetY1 = _offsetY / 0.6 + 300;
      _offsetY2 = _offsetY / 0.7 + 230;
    }
    setOffsetY1(_offsetY1);
    setOffsetY2(_offsetY2);
  };

  useEffect(() => {
    sectionElement.current = document.getElementById('EnglishAgency');

    _onChanged();
    Wheel.add(_onChanged);
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
        organs={[
          'Vue.js',
          'Vue Server Renderer',
        ]}
        title="English.Agency"
      >
        <p>
          Fortuitously, we had a idea with a partner company. It was a
          publishing platform for the recruiters of English schools to share
          knowledge. Helped the students who were interested to know the schools
          or culture before they went.
        </p>
        <p>
          The feature was static content in server rendering. Each article is
          easy to be found by search engine even if the recruiters publish
          article any time.
        </p>
        <p>
          Besides front end development, I built server rendering server in
          Node.js for adding each article files when anyone publishing.
        </p>
      </Card>
    </section>
  );
};

export default EnglishAgency;
