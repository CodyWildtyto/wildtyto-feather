import { useEffect, useState } from 'react';

import Wheel from './../../factory/Wheel';

import './style.css';

const Boundary = () => {
  const [isFullview, setIsFullview] = useState(false);

  useEffect(() => {
    setIsFullview(window.scrollY > 300);

    Wheel.add(() => {
      const _isFullview = window.scrollY > 300;
      if (isFullview === _isFullview) return;
      setIsFullview(_isFullview);
    });
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
