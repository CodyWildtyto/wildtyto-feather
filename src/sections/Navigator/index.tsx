import { useEffect, useRef, useState } from 'react';

import Social from '../../components/Social';
import Svg from '../../factory/Svg';
import * as Wheel from '../../utils/wheel';

import './style.css';

function Navigator () {
  const footerElement = useRef<HTMLElement | null>();
  const [isNavmode, setIsNavmode] = useState(false);
  const [isBottom, setIsBottom] = useState(false);

  const onChanged = () => {
    setIsNavmode(
      window.innerWidth > 1023 ? window.scrollY > 300 : window.scrollY > 20
    );

    if (footerElement.current) {
      setIsBottom(
        window.scrollY + window.innerHeight > footerElement.current.offsetTop
      );
    }
  };

  useEffect(() => {
    footerElement.current = document.querySelector<HTMLElement>('footer#Contact');

    Svg.exchange('#Navigator .iconGithub img');
    Svg.exchange('#Navigator .iconLinkedin img');
    Svg.exchange('#Navigator .iconMail img');
    onChanged();
    Wheel.add(onChanged);
  }, []);

  return (
    <div
      id="Navigator"
      className={`${isNavmode ? 'navmode' : ''} ${isBottom ? 'isbottom' : ''}`}
    >
      <nav>
        <a href="/#/">Hello</a>
        <a href="/#/works">Works</a>
        <a href="/#/projects">Projects</a>
        <a href="/#/about">About</a>
      </nav>
      <Social />
    </div>
  );
}

export default Navigator;
