const ALERT_SHOW_TIME = 1;
const ALERT_HIDE_TIME = 4500;
const ALERT_DELETE_TIME = 5000;

const isEscapeKey = (evt) => evt.key === 'Escape';

const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = '100';
  alertContainer.style.position = 'absolute';
  alertContainer.style.top = '10px';
  alertContainer.style.left = '50%';
  alertContainer.style.transform = 'translate(-50%, -150%)';
  alertContainer.style.maxWidth = '25%';
  alertContainer.style.padding = '10px 5px';
  alertContainer.style.fontSize = '18px';
  alertContainer.style.lineHeight = '22px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = '#c92b1c';
  alertContainer.style.borderRadius = '10px';
  alertContainer.style.transition = 'all .5s ease';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.style.transform = 'translate(-50%, 0)';
  }, ALERT_SHOW_TIME);

  setTimeout(() => {
    alertContainer.style.transform = 'translate(-50%, -150%)';
  }, ALERT_HIDE_TIME);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_DELETE_TIME);
};

const getRandomInteger = (min, max) => {
  const lower = Math.ceil(Math.min(min, max));
  const upper = Math.floor(Math.max(min, max));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const debounce = (callback, timeoutDelay) => {
  let timeoutId;

  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};

export {isEscapeKey, showAlert, getRandomInteger, debounce};
