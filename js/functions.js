const checkLength = (string, maxLength) => string.length <= maxLength;

const checkPalindrome = (string) => {
  const normalizeString = string.replaceAll(' ','').toLowerCase();
  let cloneString = '';
  for (let i = normalizeString.length - 1; i >= 0; i--) {
    cloneString += normalizeString[i];
  }
  return cloneString === normalizeString;
};


const getNumber = (value) => {
  const string = value.toString();
  let number = '';
  for (let i = 0; i < string.length; i++) {
    const symbol = string[i];
    if (!Number.isNaN(parseInt(symbol, 10))) {
      number += symbol;
    }
  }
  return parseInt(number, 10);
};

checkLength('проверяемая строка', 20);
checkPalindrome('ДовОд');
getNumber('2023 год');

const convertingToMinutes = (time) => {
  const [hours, minutes] = time.split(':');
  return Number(hours) * 60 + Number(minutes);
};

const checkPosibilityMeeting = (startDay, endDay, startMeeting, durationMeeting) => (convertingToMinutes(startMeeting) >= convertingToMinutes(startDay) && convertingToMinutes(startMeeting) + durationMeeting <= convertingToMinutes(endDay));


checkPosibilityMeeting('08:00', '17:30', '14:00', 90);
checkPosibilityMeeting('8:0', '10:0', '8:0', 120);
checkPosibilityMeeting('08:00', '14:30', '14:00', 90);
checkPosibilityMeeting('14:00', '17:30', '08:0', 90);
checkPosibilityMeeting('8:00', '17:30', '08:00', 900);
