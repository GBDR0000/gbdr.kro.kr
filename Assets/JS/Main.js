const EventCountdown = function (id, date) {
    var _vDate = new Date(date);
    var _second = 1000;
    var _minute = _second * 60;
    var _hour = _minute * 60;
    var _day = _hour * 24;
    var timer;

    function showRemaining() {
        var now = new Date();
        var distDt = _vDate - now;

        if (distDt < 0) {
            clearInterval(timer);
            document.getElementById(id).textContent = '이벤트를 찾을 수 없거나, 종료되었습니다.';
            return;
        }

        var days = Math.floor(distDt / _day);
        var hours = Math.floor((distDt % _day) / _hour);
        var minutes = Math.floor((distDt % _hour) / _minute);
        var seconds = Math.floor((distDt % _minute) / _second);

        document.getElementById(id).textContent = days + '일 ';
        document.getElementById(id).textContent += hours + '시간 ';
        document.getElementById(id).textContent += minutes + '분 ';
        document.getElementById(id).textContent += seconds + '초';
    }

    timer = setInterval(showRemaining, 1000);
}

var dateObj = new Date();
dateObj.setDate(dateObj.getDate() + 1);

EventCountdown('event', '01/23/2023 00:00 AM');