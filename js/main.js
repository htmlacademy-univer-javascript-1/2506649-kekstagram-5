import {getData} from './api.js';
import {showAlert, debounce} from './util.js';
import {renderGallery} from './gallery.js';
import {setUserFormSubmit} from './image-upload-form.js';
import {showSuccessMessage, showErrorMessage} from './upload-image-messages.js';
import {showFilters, applyFilter} from './pictures-filter.js';

const RERENDER_DELAY = 500;

getData()
  .then((pictures) => {
    renderGallery(pictures);
    showFilters();
    applyFilter(pictures, debounce(renderGallery, RERENDER_DELAY));
  })
  .catch((err) => {
    showAlert(err.message);
  });

setUserFormSubmit(showSuccessMessage, showErrorMessage);
