import { useEffect, useState } from 'react';

import Navigator from '../../sections/Navigator';
import * as Wheel from '../../utils/wheel';

import './style.css';

function Boundary ({ children }: { children: JSX.Element | JSX.Element[] }) {
  const [isFullview, setIsFullview] = useState(false);

  const onWheel = () => {
    setIsFullview(window.scrollY > 300);
  };

  useEffect(() => {
    onWheel();
    Wheel.add(onWheel);
  }, []);

  return (
    <div id="Boundary" className={`${isFullview ? 'fullview' : ''}`}>
      <div className="boundary-item boundary-item__top" />
      <div className="boundary-item boundary-item__bottom" />
      <div className="boundary-item boundary-item__left" />
      <div className="boundary-item boundary-item__right" />
      <Navigator />
      {children}
    </div>
  );
}

export default Boundary;
