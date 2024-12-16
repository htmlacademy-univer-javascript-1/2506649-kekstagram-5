import {getData} from './api.js';
import {showAlert} from './util.js';
import {renderGallery} from './gallery.js';
import {setUserFormSubmit} from './image-upload-form.js';
import {showSuccessMessage, showErrorMessage} from './upload-image-messages.js';

getData()
  .then((pictures) => {
    renderGallery(pictures);
  })
  .catch((err) => {
    showAlert(err.message);
  });

setUserFormSubmit(showSuccessMessage, showErrorMessage);
