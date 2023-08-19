import { useEffect, useState } from 'react';

import Wheel from '../../factory/Wheel';
import Svg from '../../factory/Svg';
import logo from './logo-light.svg';

import './style.css';

const Logo = () => {
  const [isDarkmode, setIsDarkmode] = useState(false);

  useEffect(() => {
    Svg.exchange('#Logo img');
    setIsDarkmode(window.scrollY > 500);

    Wheel.add(() => {
      const _isDarkmode =
        window.innerWidth > 1023 ? window.scrollY > 500 : window.scrollY > 20;
      if (isDarkmode === _isDarkmode) return;
      setIsDarkmode(_isDarkmode);
    });
  }, []);

  return (
    <nav id="Logo" className={`${isDarkmode ? 'darkmode' : ''}`}>
      <img src={logo} alt="logo" />
      <span>Cody</span>
      <span>Wildtyto</span>
    </nav>
  );
};

export default Logo;
