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
  if (hashText === '') smoothScrollTo('Hello');
  else if (hashText === 'work') smoothScrollTo('Work');
  else if (hashText === 'projects') smoothScrollTo('Projects');
  else if (hashText === 'about') smoothScrollTo('About');
  else if (hashText === 'noper') smoothScrollTo('Noper');
};

const init = () => {
  let wheelTimer;

  window.addEventListener('hashchange', inspectHash, false);

  const clearWheelTimer = () => {
    isWheeling = false;
    clearTimeout(wheelTimer);
  };

  Wheel.add(() => {
    const sectionWorks = document.getElementById('Work');
    const sectionProjects = document.getElementById('Projects');
    const sectionAbout = document.getElementById('About');
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
