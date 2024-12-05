import {renderPictures} from './picture.js';
import {showBigPicture} from './big-picture.js';

const picturesContainer = document.querySelector('.pictures');

const renderGallery = (pictures) => {
  picturesContainer.addEventListener('click', (evt) => {
    const thumbnail = evt.target.closest('.picture');

    if (thumbnail) {
      evt.preventDefault();
      const picture = pictures.find(
        (item) => item.id === +thumbnail.dataset.pictureId
      );
      showBigPicture(picture);
    }
  });

  renderPictures(pictures, picturesContainer);
};

export {renderGallery};
