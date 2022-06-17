import moment from 'moment'

export default function toWeekday(date) {
  return moment(date).format('dddd')
}
