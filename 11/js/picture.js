const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

const createPicture = ({url, description, likes, comments, id}) => {
  const picture = pictureTemplate.cloneNode(true);
  picture.querySelector('.picture__img').src = url;
  picture.querySelector('.picture__img').alt = description;
  picture.querySelector('.picture__likes').textContent = likes;
  picture.querySelector('.picture__comments').textContent = comments.length;
  picture.dataset.pictureId = id;

  return picture;
};

const renderPictures = (thumbnails, container) => {
  const picturesFragment = document.createDocumentFragment();

  thumbnails.forEach((thumbnail) => {
    const picture = createPicture(thumbnail);
    picturesFragment.append(picture);
  });

  container.append(picturesFragment);
};

export {renderPictures};
