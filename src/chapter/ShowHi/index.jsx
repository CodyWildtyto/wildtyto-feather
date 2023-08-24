import { useEffect, useRef, useState } from 'react';

import Wheel from '../../factory/Wheel';

import './style.css';

const DEFAULT_OFFSET_Y = 160;
const IMAGE_PATH = {
  LOGO: '/assets/work-showhi-logo.png',
  PIC: '/assets/work-showhi-pic-1.png',
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
      <div className="work-container">
        <h2>
          <img src={IMAGE_PATH.LOGO} alt="showhi-logo" style={{ height: 24 }} />
          <span>ShowHi</span>
        </h2>
        <div className="work-specialities">
          <span>JavaScript</span>
          <span>AngularJS</span>
          <span>Git</span>
          <span>XMLHttpRequest</span>
        </div>
        <div className="work-explain">
          <p>
            There was a social network for students who would like to study
            abroad and school recruiters who help students applying the
            university.
          </p>
          <p>
            School pages could be managed by the school recruiters. Students
            were able to contact and apply the university school directly. Also
            it was easy to send documents to each other in messaging system.
          </p>
          <p>
            I must designed a flexible web application system for appending
            different kind of tool like messaging, video communication plugin
            and file service.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ShowHi;
