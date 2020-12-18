import moment from 'moment';

export const formatShortDate = (isoDate) => {
  const date = moment(isoDate);

  if (!date.isValid()) return isoDate;

  if (date.isSame(moment(), 'day')) {
    return date.format('h:mm A')
  }

  if (date.isSame(moment(), 'year')) {
    return date.format('MMM DD')
  }

  return date.format('M/D/YYYY');
}

export const formatLongDate = (isoDate) => {
  const date = moment(isoDate);

  if (!date.isValid()) return isoDate;

  if (date.isSame(moment(), 'day')) {
    return `${date.format('h:mm A')} (${moment().diff(date, 'minutes')} minute(s) ago)`;
  }

  if (date.isSame(moment(), 'day')) {
    return `${date.format('h:mm A')} (${moment().diff(date, 'hours')} hour(s) ago)`;
  }

  if (date.isSame(moment(), 'year')) {
    return `${date.format('ddd, MMM DD, YYYY')}, ${date.format('h:mm A')} (${moment().diff(date, 'days')} day(s) ago)`
  }

  return `${date.format('ddd, MMM DD, YYYY')}, ${date.format('h:mm A')}`
}
