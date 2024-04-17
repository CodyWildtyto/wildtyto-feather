import { useEffect, useState } from 'react';

import logo from './logo-light.svg';
import Svg from '../../utils/Svg';
import * as Wheel from '../../utils/wheel';

import './style.css';

function Logo () {
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
      {/* <span>Cody</span> */}
      {/* <span>Wildtyto</span> */}
    </nav>
  );
}

export default Logo;
