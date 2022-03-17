const moment = require('moment');
//查找上个月第一天与最后一天
const day1 = moment(new Date()).subtract(1,'months').startOf('month').format("YYYY-MM-DD")
const day2 = moment(new Date()).subtract(1,'months').endOf('month').format("YYYY-MM-DD")
console.log(day1)
console.log(day2)