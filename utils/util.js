export const formatTime = (date, isTime) => {
  var date = new Date(date);

  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()
  const time = isTime ? ' ' + [hour, minute, second].map(formatNumber).join(':') : '';
  const days = [year, month, day].map(formatNumber).join('-')
  return days + time;

}
export const formatDate = (selectDate) => {
  const date = new Date(selectDate)
  console.log('selectDate', date);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const days = month + '月' + day + '日';
  return days

}
export const formatWeek = (selectDate) => {
  const str = '星期' + '日一二三四五六'.charAt(new Date(selectDate).getDay());
  return str

}

const formatNumber = (n) => {
  const s = n.toString()
  return s[1] ? s : '0' + s
}
export const fetchIndex = (arr, val) => {
  console.log('arr', arr, val);
  if (!arr || val === null) return null;
  const index = arr.findIndex(i => i.id === val);
  if (index !== -1) return index;
  return null;
}