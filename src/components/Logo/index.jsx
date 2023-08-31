import { useEffect, useState } from 'react';

import * as Wheel from '../../utils/wheel';
import Svg from '../../factory/Svg';
import logo from './logo-light.svg';

import './style.css';

const Logo = () => {
  const [isBlack, setIsBlack] = useState(false);

  const onWheel = () => {
    setIsBlack(
      window.innerWidth > 1023 ? window.scrollY > 500 : window.scrollY > 20
    );
  };

  useEffect(() => {
    Svg.exchange('#Logo img');
    onWheel();
    Wheel.add(onWheel);
  }, []);

  return (
    <nav id="Logo" className={`${isBlack ? 'black' : ''}`}>
      <img src={logo} alt="logo" />
      <span>Cody</span>
      <span>Wildtyto</span>
    </nav>
  );
};

export default Logo;
