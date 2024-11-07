import {createId, getRandomInteger, getRandomArrayElement} from './util.js';

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const DESCRIPTIONS = [
  'Это прекрасный день на пляже с друзьями.',
  'Удивительный закат, который я запечатлел вчера.',
  'Момент, когда моя кошка впервые увидела снег.',
  'Невероятный пейзаж гор, охваченных утренним туманом.',
  'Праздничное настроение на вечеринке у друга.',
  'Семейная прогулка в парке весной.'
];

const NAMES = [
  'Даниил',
  'Влад',
  'Тимофей',
  'Даша',
  'Андрей',
  'Маша',
  'Настя',
  'Матвей'
];

const DESCRIPTION_COUNT = 25;

const generateDescriptionPhotoId = createId();
const generatePhotoId = createId();
const generateCommentId = createId();

const createComments = () => ({
  id: generateCommentId(),
  avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
  message: getRandomArrayElement(MESSAGES),
  name: getRandomArrayElement(NAMES),
});

const createDescriptionPhoto = () => ({
  id: generateDescriptionPhotoId(),
  url: `photos/${generatePhotoId()}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomInteger(15, 200),
  comments: Array.from({length: getRandomInteger(0, 30)}, createComments),
});


const createDescriptionsPhoto = () => Array.from({length: DESCRIPTION_COUNT}, createDescriptionPhoto);

export {createDescriptionsPhoto};
