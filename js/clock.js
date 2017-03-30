/**
 * Created by zhuxiankang on 2017/3/30.
 */

(function(){

    function showTime(clock) {

        var today = new Date()
            , h = today.getHours()
            , m = today.getMinutes()
            , s = today.getSeconds();

        m = m >= 10 ? m : ('0' + m);
        s = s >= 10 ? s : ('0' + s);

        // 不要轻易使用innerHTML和eval(),跨域时会产生危险
        clock.innerText = h + ":" + m + ":" + s;

        setTimeout(function() {
            showTime(clock);
        },1000);
    }

    var clock = document.getElementById('clock');
    showTime(clock);

})();