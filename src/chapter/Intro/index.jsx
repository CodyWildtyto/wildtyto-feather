import { useState } from 'react';

import Wheel from './../../factory/Wheel';

import './style.css';

const Intro = () => {
  const [isFullview, setIsFullview] = useState(false);

  Wheel.add(() => {
    const _isFullview = window.scrollY > 400;
    if (isFullview === _isFullview) return;
    setIsFullview(_isFullview);
  });

  return (
    <div id="Intro" className={`${isFullview ? 'fullview' : ''}`}>
      <h2>Hello!</h2>
      <h3>
        <p>I am a</p>
        <p>Full Stack Developer</p>
        <p>& UX Designer</p>
      </h3>
    </div>
  );
};

export default Intro;
