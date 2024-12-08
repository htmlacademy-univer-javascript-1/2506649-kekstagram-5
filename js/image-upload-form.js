import { isEscapeKey } from './util.js';
import {pristine} from './validator.js';

const form = document.querySelector('.img-upload__form');
const imgField = form.querySelector('.img-upload__input');
const imgEditingModal = form.querySelector('.img-upload__overlay');
const closeButton = imgEditingModal.querySelector('.img-upload__cancel');
const hashtagsField = imgEditingModal.querySelector('.text__hashtags');
const descriptionField = imgEditingModal.querySelector('.text__description');

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    // eslint-disable-next-line no-use-before-define
    hideImgEditingModal();
  }
};

const showImgEditingModal = () => {
  imgEditingModal.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
};

const hideImgEditingModal = () => {
  form.reset();
  pristine.reset();
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

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  pristine.validate();
});
