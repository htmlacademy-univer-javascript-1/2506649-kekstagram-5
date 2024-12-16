import { isEscapeKey } from './util.js';
import {pristine} from './validator.js';
import {changeScaleValue} from './scale-image.js';
import {updateSlider, updateImageEffects} from './apply-filter.js';
import {sendData} from './api.js';

const DEFAULT_SCALE_VALUE = 100;
const DEFAULT_FILTER = 'none';
const SubmitButtonText = {
  IDLE: 'Опубликовать',
  SENDING: 'Отправляю...'
};

const form = document.querySelector('.img-upload__form');
const submitButton = form.querySelector('button[type="submit"]');
const imgField = form.querySelector('.img-upload__input');
const imgEditingModal = form.querySelector('.img-upload__overlay');
const closeButton = imgEditingModal.querySelector('.img-upload__cancel');
const hashtagsField = imgEditingModal.querySelector('.text__hashtags');
const descriptionField = imgEditingModal.querySelector('.text__description');

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt) && !document.querySelector('.success') && !document.querySelector('.error')) {
    evt.preventDefault();
    // eslint-disable-next-line no-use-before-define
    hideImgEditingModal();
  }
};

const showImgEditingModal = () => {
  updateSlider(DEFAULT_FILTER);
  updateImageEffects(DEFAULT_FILTER);
  imgEditingModal.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
};

const hideImgEditingModal = () => {
  form.reset();
  pristine.reset();
  changeScaleValue(DEFAULT_SCALE_VALUE);
  imgEditingModal.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
};

const stopPropagation = (evt) => {
  if (isEscapeKey(evt)) {
    evt.stopPropagation();
  }
};

hashtagsField.addEventListener('keydown', stopPropagation);

descriptionField.addEventListener('keydown', stopPropagation);

imgField.addEventListener('change', () => {
  showImgEditingModal();
});

closeButton.addEventListener('click', hideImgEditingModal);

const blockSubmitButton = () => {
  submitButton.disabled = true;
  submitButton.textContent = SubmitButtonText.SENDING;
};

const unblockSubmitButton = () => {
  submitButton.disabled = false;
  submitButton.textContent = SubmitButtonText.IDLE;
};

const setUserFormSubmit = (onSuccess, onFail) => {
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const isValid = pristine.validate();
    if (isValid) {
      blockSubmitButton();
      sendData(new FormData(evt.target))
        .then(onSuccess)
        .catch(onFail)
        .finally(unblockSubmitButton);
    }
  });
};

export {setUserFormSubmit, hideImgEditingModal};
