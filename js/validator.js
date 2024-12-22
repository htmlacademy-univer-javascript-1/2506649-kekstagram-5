const MAX_DESCRIPTION_LENGTH = 140;
const MAX_HASHTAGS_COUNT = 5;
const HASHTAG_REGEXP = /^#[a-zа-яё0-9]{1,19}$/i;

const form = document.querySelector('.img-upload__form');
const hashtagsField = form.querySelector('.text__hashtags');
const descriptionField = form.querySelector('.text__description');

const pristine = new Pristine(form, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
});

const descriptionLengthValidate = (value) => value.length <= MAX_DESCRIPTION_LENGTH;

pristine.addValidator(descriptionField, descriptionLengthValidate, 'Максимальная длина 140 символов');

const hashtagsCountValidate = (value) => value.trim().split(/\s+/).length <= MAX_HASHTAGS_COUNT;

pristine.addValidator(hashtagsField, hashtagsCountValidate, 'Превышено количество хэш-тегов');

const hashtagFormatValidate = (value) => {
  if (value.length === 0) {
    return true;
  }

  const hashtags = value.trim().split(/\s+/);
  return hashtags.every((hashtag) => HASHTAG_REGEXP.test(hashtag));
};

pristine.addValidator(hashtagsField, hashtagFormatValidate, 'Введен невалидный хэш-тэг');

const hashtagsRepeatValidate = (value) => {
  const hashtags = value.trim().split(/\s+/);
  const lowerCasedHashtags = hashtags.map((hashtag) => hashtag.toLowerCase());
  return new Set(lowerCasedHashtags).size === lowerCasedHashtags.length;
};

pristine.addValidator(hashtagsField, hashtagsRepeatValidate, 'Хэш-теги повторяются');

export {pristine};
