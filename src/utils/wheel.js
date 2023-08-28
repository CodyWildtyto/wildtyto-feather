const callbackList = [];

let currentTimestamp = 0;

const onWheel = (event) => {
  const tempTimestamp = Date.now();

  if (tempTimestamp - currentTimestamp < 30) return;
  currentTimestamp = tempTimestamp;
  callbackList.map((callback) => {
    if (callback instanceof Function) callback(event);
    return callback;
  });
};

const init = () => {
  window.addEventListener('wheel', onWheel, false);
  window.addEventListener('touchmove', onWheel, false);
  window.addEventListener('resize', onWheel, false);
};

init();

export const add = (callback) => {
  callbackList.push(callback);
};
