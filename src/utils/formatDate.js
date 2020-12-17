import moment from 'moment';

export const formatDate = (isoDate) => {
  const date = moment(isoDate);

  if (!date.isValid()) return isoDate;

  if (date.isSame(moment(), 'day')) {
    return date.format('H:mm A')
  }

  if (date.isSame(moment(), 'year')) {
    return date.format('MMM DD')
  }

  return date.format('M/D/YYYY');
}
