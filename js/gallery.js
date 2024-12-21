import {renderPictures} from './picture.js';
import {showBigPicture} from './big-picture.js';

const picturesList = document.querySelector('.pictures');

const clearPictureList = () => {
  const pictures = picturesList.querySelectorAll('.picture');
  pictures.forEach((picture) => picture.remove());
};

const renderGallery = (pictures) => {
  clearPictureList();
  picturesList.addEventListener('click', (evt) => {
    const thumbnail = evt.target.closest('.picture');

    if (thumbnail) {
      evt.preventDefault();
      const picture = pictures.find(
        (item) => item.id === +thumbnail.dataset.pictureId
      );
      showBigPicture(picture);
    }
  });

  renderPictures(pictures, picturesList);
};

export {renderGallery};
