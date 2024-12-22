const MIN_SCALE_VALUE = 25;
const MAX_SCALE_VALUE = 100;
const SCALE_VALUE_STEP = 25;

const increaseScaleButton = document.querySelector('.scale__control--smaller');
const decreaseScaleButton = document.querySelector('.scale__control--bigger');
const scaleValue = document.querySelector('.scale__control--value');
const image = document.querySelector('.img-upload__preview img');

const changeScaleValue = (value) => {
  scaleValue.value = `${value}%`;
  image.style.transform = `scale(${value / 100})`;
};

increaseScaleButton.addEventListener('click', () => {
  let currentScaleValue = parseInt(scaleValue.value.replace('%', ''), 10);

  if (currentScaleValue > MIN_SCALE_VALUE) {
    currentScaleValue -= SCALE_VALUE_STEP;
  }

  changeScaleValue(currentScaleValue);
});

decreaseScaleButton.addEventListener('click', () => {
  let currentScaleValue = parseInt(scaleValue.value.replace('%', ''), 10);

  if (currentScaleValue < MAX_SCALE_VALUE) {
    currentScaleValue += SCALE_VALUE_STEP;
  }

  changeScaleValue(currentScaleValue);
});

export {changeScaleValue};
