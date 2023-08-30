import { SECTION_NAME } from '../configs/constants';
import * as Wheel from './wheel';

const callbackList = [];

let isWheeling = false;

const smoothScrollTo = (id) => {
  const sectionWorks = document.getElementById(id);
  const { offsetTop } = sectionWorks;
  const timer = setInterval(() => {
    if (offsetTop === window.scrollY) return clearInterval(timer);
    callbackList.map((callback) => {
      if (callback instanceof Function) callback();
      return callback;
    });
  }, 30);

  window.scrollTo({
    top: offsetTop,
    behavior: 'smooth',
  });
};

const inspectHash = () => {
  let hashText = document.location.hash.replace(/^#\//, '').toLowerCase();

  if (isWheeling) return;
  if (hashText === '') smoothScrollTo(SECTION_NAME.HELLO);
  else if (hashText === 'works') smoothScrollTo(SECTION_NAME.WORKS);
  else if (hashText === 'projects') smoothScrollTo(SECTION_NAME.PROJECTS);
  else if (hashText === 'about') smoothScrollTo(SECTION_NAME.ABOUT);
  else if (hashText === 'noper') smoothScrollTo(SECTION_NAME.NOPER);
};

const init = () => {
  let wheelTimer;

  window.addEventListener('hashchange', inspectHash, false);

  const clearWheelTimer = () => {
    isWheeling = false;
    clearTimeout(wheelTimer);
  };

  Wheel.add(() => {
    const sectionWorks = document.getElementById(SECTION_NAME.WORKS);
    const sectionProjects = document.getElementById(SECTION_NAME.PROJECTS);
    const sectionAbout = document.getElementById(SECTION_NAME.ABOUT);
    const scrollY = window.scrollY;

    if (scrollY >= sectionAbout.offsetTop) document.location = '/#/about';
    else if (scrollY >= sectionProjects.offsetTop)
      document.location = '/#/projects';
    else if (scrollY >= sectionWorks.offsetTop) document.location = '/#/work';
    else document.location.replace('/#/');

    isWheeling = true;
    wheelTimer = setTimeout(clearWheelTimer, 300);
  });
};

init();

export const add = (callback) => {
  callbackList.push(callback);
};
