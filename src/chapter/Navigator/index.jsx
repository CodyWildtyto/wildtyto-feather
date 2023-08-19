import { useEffect, useRef, useState } from 'react';

import Hash from './../../factory/Hash';
import Wheel from './../../factory/Wheel';
import Svg from './../../factory/Svg';

import './style.css';

const IMAGE_PATH = {
  GITHUB: '/assets/nav-github-icon.svg',
  LINKEDIN: '/assets/nav-linkedin-icon.svg',
  MAIL: '/assets/nav-mail-icon.svg',
};

const Navigator = () => {
  const footerElement = useRef();
  const [isNavmode, setIsNavmode] = useState(false);
  const [isBottom, setIsBottom] = useState(false);

  const _onChanged = () => {
    setIsNavmode(
      window.innerWidth > 1023 ? window.scrollY > 300 : window.scrollY > 20
    );
    setIsBottom(
      window.scrollY + window.innerHeight > footerElement.current.offsetTop
    );
  };

  useEffect(() => {
    footerElement.current = document.querySelector('footer#Contact');

    Svg.exchange('#Navigator .iconGithub img');
    Svg.exchange('#Navigator .iconLinkedin img');
    Svg.exchange('#Navigator .iconMail img');
    setIsNavmode(window.scrollY > 300);

    _onChanged();
    Hash.add(() => _onChanged());
    Wheel.add(() => _onChanged());
  }, []);

  return (
    <div
      id="Navigator"
      className={`${isNavmode ? 'navmode' : ''} ${isBottom ? 'isbottom' : ''}`}
    >
      <nav>
        <a href="/#/">Hello</a>
        <a href="/#/work">Work</a>
        <a href="/#/projects">Projects</a>
        <a href="/#/about">About</a>
      </nav>
      <p>
        <a
          className="iconGithub"
          href="https://github.com/Wildtyto"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={IMAGE_PATH.GITHUB} alt="nav-github-icon" />
        </a>
        <a
          className="iconLinkedin"
          href="https://www.linkedin.com/in/wildtyto/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={IMAGE_PATH.LINKEDIN} alt="nav-linkedin-icon" />
        </a>
        <a className="iconMail" href="mailto:wildtyto@gmail.com">
          <img src={IMAGE_PATH.MAIL} alt="nav-mail-icon" />
        </a>
      </p>
    </div>
  );
};

export default Navigator;
