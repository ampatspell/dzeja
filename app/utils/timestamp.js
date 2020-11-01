import dayjs from 'dayjs';

export const formatTimestamp = timestamp => {
  if(!timestamp) {
    return;
  }
  if(!timestamp.toDate) {
    return
  }
  return dayjs(timestamp.toDate()).format('DD.MM.YYYY HH:mm');
}
