import { SECTION_NAME } from "../i18n/en";


const callbackList: Array<
(event?: WheelEvent | TouchEvent | UIEvent | Event) => void
> = [];

let isWheeling = false;
let isHashChanging = false;
let currentTimestamp = 0;

export const add = (callback: () => void) => {
  callbackList.push(callback);
};

const inspectWheel = (event: WheelEvent | TouchEvent | UIEvent | Event) => {
  const tempTimestamp = Date.now();

  if (tempTimestamp - currentTimestamp < 30) return;
  currentTimestamp = tempTimestamp;
  callbackList.map((callback) => {
    if (callback instanceof Function) callback(event);
    return callback;
  });
};

const smoothScrollTo = (id: string) => {
  const sectionWorks = document.getElementById(id);
  const offsetTop = sectionWorks?.offsetTop;
  const inspectScrollInterval = () => {
    timerStopInterval = setTimeout(resetScrollTimer, 1000);

    if (offsetTop === window.scrollY) resetScrollTimer();
    else callbackList.map((callback) => {
      if (callback instanceof Function) callback();
      return callback;
    });
  };
  const callbackScrollInterval = setInterval(inspectScrollInterval, 30);

  let timerStopInterval: NodeJS.Timeout;

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
  const hashText = document.location.hash.replace(/^#\//, '').toLowerCase();

  if (isWheeling) return;

  isHashChanging = true;
  if (hashText === '') smoothScrollTo(SECTION_NAME.HELLO);
  else if (hashText === 'works') smoothScrollTo(SECTION_NAME.WORKS);
  else if (hashText === 'projects') smoothScrollTo(SECTION_NAME.PROJECTS);
  else if (hashText === 'about') smoothScrollTo(SECTION_NAME.ABOUT);
  else if (hashText === 'noper') smoothScrollTo(SECTION_NAME.NOPER);
};

export const init = () => {
  let wheelTimer: NodeJS.Timeout;

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
    const { scrollY } = window;
    let targetHash = '';

    if (sectionAbout && scrollY >= sectionAbout.offsetTop) targetHash = 'about';
    else if (sectionProjects && scrollY >= sectionProjects.offsetTop) targetHash = 'projects';
    else if (sectionWorks && scrollY >= sectionWorks.offsetTop) targetHash = 'works';

    if (document.location.hash !== `#/${targetHash}`) {
      document.location = `/#/${targetHash}`;
      isWheeling = true;
      wheelTimer = setTimeout(resetWheelTimer, 200);
    }
  };

  add(onWheel);
};

init();
