/**
 * Created by zhuxiankang on 2017/3/30.
 */



(function(){

    //chrome插件中的 content_script 是运行在一个被称为isolated world 的运行环境里，
    //和页面上的脚本互不干扰，因为不在一个运行环境里，所以也无法调用页面上脚本定义的方法了，
    //当然google也给出了解决方法：http://code.google.com/chrome/extensions/content_scripts.html

    //在大多数情况下,在content script中监听onload事件是不必要的，
    //因为浏览器会确保在DOM创建完成后才执行它。

    var btn = document.getElementById('lg');
    btn.style.border = "1px solid grey";
})();


