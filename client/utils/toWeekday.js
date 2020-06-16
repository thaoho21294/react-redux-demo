import moment from 'moment';

export default function toWeekDay(date) {
  return moment(date).format('dddd');
}
