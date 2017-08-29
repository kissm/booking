// import {formatDate} from '../utils/date'
// formatDate(new Date(),'hh:mm')
export function formatDate(date, fmt) {
    var o = {
        "M+": date.getMonth() + 1, //月份
        "d+": date.getDate(), //日
        "h+": date.getHours(), //小时
        "m+": date.getMinutes(), //分
        "s+": date.getSeconds(), //秒
        "q+": Math.floor((date.getMonth() + 3) / 3), //季度
        "S": date.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}

export function addDate(date, days) {
    var date = new Date(date);
    date.setDate(date.getDate() + days);
    var m = "00" + (date.getMonth() + 1);
    var mon = (m.length == 3) ? m.substr(1, 2) : m.substr(2, 2)
    var d = "00" + date.getDate();
    var day = (d.length == 3) ? d.substr(1, 2) : d.substr(2, 2)
    return date.getFullYear() + '-' + mon + '-' + day;
}

export function timetrans(time, min) {
    //在当前时间的基础上加上min分钟
    console.log(time)
    console.log(min)
    let h = parseInt(time.split(':')[0]);
    let m = parseInt(time.split(':')[1]);
    // let now = new Date(time);
    // let h = now.getHours();
    // let m = now.getMinutes();
    let all = h * 60 + m + min;
    h = parseInt(all / 60);
    m = all - h * 60;
    if (m < 10) {
        m = "0" + m;
    }
    if (h < 10) {
        h = "0" + h;
    }
    return h + ':' + m;
}