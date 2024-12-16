import {isEscapeKey} from './util.js';
import {hideImgEditingModal} from './image-upload-form.js';

const successMessageTemplate = document.querySelector('#success').content.querySelector('.success');
const errorMessageTemplate = document.querySelector('#error').content.querySelector('.error');

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    // eslint-disable-next-line no-use-before-define
    hideMessage();
  }
};

const onOutMessage = (evt) => {
  if (evt.target.closest('.success__inner') || evt.target.closest('.error__inner')) {
    return;
  }
  // eslint-disable-next-line no-use-before-define
  hideMessage();
};

const hideMessage = () => {
  const message = document.querySelector('.success') || document.querySelector('.error');
  document.removeEventListener('keydown', onDocumentKeydown);
  document.removeEventListener('click', onOutMessage);
  message.remove();
};

const showMessage = (messageTemplate) => {
  const message = messageTemplate.cloneNode(true);
  document.body.append(message);
  const closeButton = message.querySelector('button');
  closeButton.addEventListener('click', hideMessage);
  document.addEventListener('keydown', onDocumentKeydown);
  document.addEventListener('click', onOutMessage);
};

const showSuccessMessage = () => {
  showMessage(successMessageTemplate);
  hideImgEditingModal();
};

const showErrorMessage = () => showMessage(errorMessageTemplate);

export {showSuccessMessage, showErrorMessage};
