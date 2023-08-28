import { useEffect, useState } from 'react';

import * as Wheel from '../../utils/wheel';

import './style.css';

const Boundary = () => {
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
      <div className="boundary-item boundary-item__top"></div>
      <div className="boundary-item boundary-item__bottom"></div>
      <div className="boundary-item boundary-item__left"></div>
      <div className="boundary-item boundary-item__right"></div>
    </div>
  );
};

export default Boundary;
