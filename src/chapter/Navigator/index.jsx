import { useEffect, useRef, useState } from 'react';

import Social from '../../components/Social';
import * as Hash from '../../utils/hash';
import * as Wheel from '../../utils/wheel';
import Svg from './../../factory/Svg';

import './style.css';

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
    _onChanged();
    Hash.add(_onChanged);
    Wheel.add(_onChanged);
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
      <Social />
    </div>
  );
};

export default Navigator;
