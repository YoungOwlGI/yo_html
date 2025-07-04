setInterval(function(){
    var now = new Date();
    var year = now.getFullYear();
    var month = now.getMonth() + 1; // 月份从0开始，所以需要加1
    var day = now.getDate();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    var daysOfWeek = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
    var dayOfWeek = daysOfWeek[now.getDay()];
    // 确保月份和日期是两位数
    month = month < 10 ? '0' + month : month;
    day = day < 10 ? '0' + day : day;
    // 确保小时、分钟和秒是两位数
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    var formattedTime = "当前时间：" + year + "年" + month + "月" + day + "日 " + dayOfWeek + " " + hours + ":" + minutes + ":" + seconds;
    document.getElementById("time").innerHTML = formattedTime;
  }, 1000);