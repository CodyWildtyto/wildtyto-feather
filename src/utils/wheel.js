import { SECTION_NAME } from '../configs/constants';

const callbackList = [];

let isWheeling = false;
let isHashChanging = false;
let currentTimestamp = 0;

export const add = (callback) => {
  callbackList.push(callback);
};

const inspectWheel = (event) => {
  const tempTimestamp = Date.now();

  if (tempTimestamp - currentTimestamp < 30) return;
  currentTimestamp = tempTimestamp;
  callbackList.map((callback) => {
    if (callback instanceof Function) callback(event);
    return callback;
  });
};

const smoothScrollTo = (id) => {
  const sectionWorks = document.getElementById(id);
  const { offsetTop } = sectionWorks;
  const inspectScrollInterval = () => {
    timerStopInterval = setTimeout(resetScrollTimer, 1000);

    if (offsetTop === window.scrollY) return resetScrollTimer();

    callbackList.map((callback) => {
      if (callback instanceof Function) callback();
      return callback;
    });
  };
  const callbackScrollInterval = setInterval(inspectScrollInterval, 30);

  let timerStopInterval;

  const resetScrollTimer = () => {
    isHashChanging = false;
    clearInterval(callbackScrollInterval);
    clearTimeout(timerStopInterval);
  };

  window.scrollTo({
    top: offsetTop,
    behavior: 'smooth',
  });
};

const inspectHash = () => {
  let hashText = document.location.hash.replace(/^#\//, '').toLowerCase();

  if (isWheeling) return;

  isHashChanging = true;
  if (hashText === '') smoothScrollTo(SECTION_NAME.HELLO);
  else if (hashText === 'works') smoothScrollTo(SECTION_NAME.WORKS);
  else if (hashText === 'projects') smoothScrollTo(SECTION_NAME.PROJECTS);
  else if (hashText === 'about') smoothScrollTo(SECTION_NAME.ABOUT);
  else if (hashText === 'noper') smoothScrollTo(SECTION_NAME.NOPER);
};

const init = () => {
  let wheelTimer;

  window.addEventListener('wheel', inspectWheel, false);
  window.addEventListener('touchmove', inspectWheel, false);
  window.addEventListener('resize', inspectWheel, false);
  window.addEventListener('hashchange', inspectHash, false);

  const resetWheelTimer = () => {
    isWheeling = false;
    clearTimeout(wheelTimer);
  };

  const onWheel = () => {
    if (isHashChanging) return;

    const sectionWorks = document.getElementById(SECTION_NAME.WORKS);
    const sectionProjects = document.getElementById(SECTION_NAME.PROJECTS);
    const sectionAbout = document.getElementById(SECTION_NAME.ABOUT);
    const scrollY = window.scrollY;
    let targetHash = '';

    if (scrollY >= sectionAbout.offsetTop) targetHash = 'about';
    else if (scrollY >= sectionProjects.offsetTop) targetHash = 'projects';
    else if (scrollY >= sectionWorks.offsetTop) targetHash = 'works';

    if (document.location.hash !== `#/${targetHash}`) {
      document.location = `/#/${targetHash}`;
      isWheeling = true;
      wheelTimer = setTimeout(resetWheelTimer, 200);
    }
  };

  add(onWheel);
};

init();
