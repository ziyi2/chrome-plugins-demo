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

        clock.innerHTML = h + ":" + m + ":" + s;

        setTimeout(function() {
            showTime(clock);
        },1000);
    }

    var clock = document.getElementById('clock');
    showTime(clock);

})();