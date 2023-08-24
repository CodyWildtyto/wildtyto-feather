import { useEffect, useRef, useState } from 'react';

import * as Hash from '../../utils/hash';
import Wheel from '../../factory/Wheel';

import './style.css';

const IMAGE_PATH = {
  LOGO: '/assets/work-englishagency-logo.png',
  PIC_1: '/assets/work-englishagency-pic-1.png',
  PIC_2: '/assets/work-englishagency-pic-2.png',
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
    Hash.add(_onChanged);
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
      <div className="work-container">
        <h2>
          <img src={IMAGE_PATH.LOGO} alt="noper-logo" style={{ height: 30 }} />
          <span>English.Agency</span>
        </h2>
        <div className="work-specialities">
          <span>JavaScript</span>
          <span>Vue.js</span>
          <span>Vue Server Renderer</span>
          <span>NPM</span>
          <span>Git</span>
          <span>Google Analytics</span>
          <span>Express</span>
          <span>PM2</span>
          <span>Request</span>
        </div>
        <div className="work-explain">
          <p>
            Fortuitously, we had a idea with a partner company. It was a
            publishing platform for the recruiters of English schools to share
            knowledge. Helped the students who were interested to know the
            schools or culture before they went.
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
        </div>
        <a
          href="https://tw.english.agency"
          target="_blank"
          rel="noopener noreferrer"
        >
          DEMO
        </a>
      </div>
    </section>
  );
};

export default EnglishAgency;
