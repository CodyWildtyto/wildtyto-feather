import { useEffect, useRef, useState } from 'react';

import Wheel from './../../factory/Wheel';
import Svg from './../../factory/Svg';

import './style.css';

const IMAGE_PATH = {
  GITHUB: '/assets/nav-github-icon.svg',
  LINKEDIN: '/assets/nav-linkedin-icon.svg',
  MAIL: '/assets/nav-mail-icon.svg',
};

const Contact = () => {
  const footerElement = useRef();
  const [isBottom, setIsBottom] = useState(false);

  useEffect(() => {
    footerElement.current = document.querySelector('footer#Contact');

    Wheel.add(() => {
      const _isBottom = window.scrollY > footerElement.current.offsetTop;
      if (isBottom === _isBottom) return;
      setIsBottom(_isBottom);
    });

    Svg.exchange('#Contact .iconGithub img');
    Svg.exchange('#Contact .iconLinkedin img');
    Svg.exchange('#Contact .iconMail img');
  }, []);

  return (
    <footer id="Contact">
      <h2>Thank You</h2>
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
      <h3>© Wildtyto</h3>
    </footer>
  );
};

export default Contact;
