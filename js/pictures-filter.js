import {getRandomInteger} from './util.js';

const COUNT_RANDOM_PICTURES = 10;

const ImgFilters = document.querySelector('.img-filters');

const applyRandomFilter = (pictures) => {
  const randomPictures = [];
  const usedIndexes = [];

  while (randomPictures.length < COUNT_RANDOM_PICTURES) {
    const randomIndex = getRandomInteger(0, pictures.length - 1);
    if (!(usedIndexes.includes(randomIndex))) {
      randomPictures.push(pictures[randomIndex]);
      usedIndexes.push(randomIndex);
    }
  }

  return randomPictures;
};

const filters = {
  'filter-default': (pictures) => pictures.sort((pictureA, pictureB) => pictureA.id - pictureB.id),
  'filter-random': (pictures) => applyRandomFilter(pictures),
  'filter-discussed': (pictures) => pictures.sort((pictureA, pictureB) => pictureB.comments.length - pictureA.comments.length),
};

const showFilters = () => ImgFilters.classList.remove('img-filters--inactive');

const applyFilter = (pictures, cb) => {
  ImgFilters.addEventListener('click',(evt) => {
    const selectedFilter = evt.target.closest('.img-filters__button');
    if (selectedFilter) {
      const filteredPictures = filters[selectedFilter.id](pictures);
      cb(filteredPictures);

      const currentFilter = ImgFilters.querySelector('.img-filters__button--active');
      currentFilter.classList.remove('img-filters__button--active');
      selectedFilter.classList.add('img-filters__button--active');
    }
  });
};

export {showFilters, applyFilter};
