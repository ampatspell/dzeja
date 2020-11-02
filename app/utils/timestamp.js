import dayjs from 'dayjs';

let formats = {
  default: 'DD.MM.YYYY HH:mm',
  date:    'DD.MM.YYYY'
};

export const formatTimestamp = (timestamp, format) => {
  if(!timestamp) {
    return;
  }
  if(!timestamp.toDate) {
    return;
  }
  format = formats[format] || formats.default;
  return dayjs(timestamp.toDate()).format(format);
}
