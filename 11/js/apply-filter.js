const sliderContainer = document.querySelector('.img-upload__effect-level');
const slider = sliderContainer.querySelector('.effect-level__slider');
const sliderValue = sliderContainer.querySelector('.effect-level__value');
const image = document.querySelector('.img-upload__preview');
const effectsList = document.querySelector('.effects__list');

const filterOptions = {
  'chrome': {
    name: 'grayscale',
    min: 0,
    max: 1,
    step: 0.1,
    unit: '',
  },

  'sepia': {
    name: 'sepia',
    min: 0,
    max: 1,
    step: 0.1,
    unit: '',
  },

  'marvin': {
    name: 'invert',
    min: 0,
    max: 100,
    step: 1,
    unit: '%',
  },

  'phobos': {
    name: 'blur',
    min: 0,
    max: 3,
    step: 0.1,
    unit: 'px',
  },

  'heat': {
    name: 'brightness',
    min: 1,
    max: 3,
    step: 0.1,
    unit: '',
  },
};

let currentEffect = 'none';

noUiSlider.create(slider, {
  range: {
    min: 0,
    max: 100,
  },
  start: 100,
  step: 1,
  connect: 'lower',
  format: {
    to: function (value) {
      if (Number.isInteger(value)) {
        return value.toFixed(0);
      }
      return value.toFixed(1);
    },
    from: function (value) {
      return parseFloat(value);
    },
  },
});

const updateSlider = (filter) => {
  if (filter === 'none') {
    sliderContainer.classList.add('hidden');
    return;
  }

  sliderContainer.classList.remove('hidden');
  slider.noUiSlider.updateOptions({
    range: {
      min: filterOptions[filter].min,
      max: filterOptions[filter].max,
    },
    step: filterOptions[filter].step,
    start: filterOptions[filter].max,
  });
};

const updateImageEffects = (filter) => {
  if (filter === 'none') {
    image.style.filter = 'none';
    return;
  }
  image.style.filter = `${filterOptions[filter].name}(${sliderValue.value}${filterOptions[filter].unit})`;
};

effectsList.addEventListener('click', (evt) => {
  const clickedEffect = evt.target.closest('.effects__item');
  if (clickedEffect) {
    currentEffect = clickedEffect.querySelector('input').value;
    updateSlider(currentEffect);
    updateImageEffects(currentEffect);
  }
});

slider.noUiSlider.on('update', () => {
  sliderValue.value = slider.noUiSlider.get();
  updateImageEffects(currentEffect);
});

export {updateSlider, updateImageEffects};
