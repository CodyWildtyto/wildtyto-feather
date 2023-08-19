import { useEffect } from 'react';

import Wheel from './../../factory/Wheel';

import './style.css';

const IMAGE_PATH = {
  CODY: '/assets/hello-cody.png',
  NOPER: '/assets/hello-noper.png',
  PROJECT: '/assets/hello-project.png',
  WORKS: '/assets/hello-works.png',
};

const Hello = () => {
  //   const sectionElement = document.querySelector('#Hello .hello-shortcuts');
  //   const [offsetY, setOffsetY] = useState(0);

  //   const getOffsetY = () => {
  //     const _element =
  //       sectionElement || document.querySelector('#Hello .hello-shortcuts');
  //     const _marginTop = _element.style.marginTop.replace('px', '');
  //     setOffsetY((window.scrollY - _marginTop) / 5 + 150);
  //   };

  useEffect(() => {
    Wheel.add(() => {
      // const _isAbove = window.scrollY < ( sectionElement.offsetTop - window.innerHeight ) ;
      // const _isBelow = window.scrollY > ( sectionElement.offsetTop + sectionElement.clientHeight) ;
      // if ( _isAbove || _isBelow ) return;
      // getOffsetY();
    });
  }, []);

  return (
    <section id="Hello">
      <div className="hello-shortcuts">
        <a
          className="hello-noper hello-shortcut-item"
          href="/#/noper"
          style={{ backgroundImage: `url(${IMAGE_PATH.NOPER})` }}
        >
          <h5>The Recently Work</h5>
          <h4>noper</h4>
        </a>
        <a
          className="hello-about hello-shortcut-item"
          href="/#/about"
          style={{ backgroundImage: `url(${IMAGE_PATH.CODY})` }}
        >
          <h4>About</h4>
        </a>
        <a
          className="hello-work hello-shortcut-item"
          href="/#/work"
          style={{ backgroundImage: `url(${IMAGE_PATH.WORKS})` }}
        >
          <h4>Work</h4>
        </a>
        <a
          className="hello-projects hello-shortcut-item"
          href="/#/projects"
          style={{ backgroundImage: `url(${IMAGE_PATH.PROJECT})` }}
        >
          <h4>Projects</h4>
        </a>
      </div>
    </section>
  );
};

export default Hello;
