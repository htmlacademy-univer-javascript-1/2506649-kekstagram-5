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

const createId = () => {
  let lastGeneratedId = 0;

  return function () {
    lastGeneratedId += 1;
    return lastGeneratedId;
  };
};

const generateDescriptionPhotoId = createId();
const generatePhotoId = createId();
const generateCommentId = createId();

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

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

// eslint-disable-next-line no-unused-vars
const descriptionsPhoto = Array.from({length: DESCRIPTION_COUNT}, createDescriptionPhoto);
