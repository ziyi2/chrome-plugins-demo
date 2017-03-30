# chrome-plugins-demo

## 注意
1.manifest.json -> content_scripts ->　run_at选项　
- document_start 文件将在所有CSS加载完毕，但是没有创建DOM并且没有运行任何脚本的时候注入。
- document_end 文件将在创建完DOM之后，但还没有加载类似于图片或frame等的子资源前立刻注入。
- document_idle 浏览器会在document_end和发出window.onload事件之间的某个时机注入。具体的时机取决与文档加载的复杂度，为加快页面加载而优化。

2. 谷歌大部分API不支持在content_scripts运行
3. 存储
- content_scripts读取的localStorage和当前需要注入的页面共享数据,而不是和background读写所在域的localStorage
- 可以通过Chrome存储API(content_scripts和background共享数据)或者扩展页面间的通信runtime.sendMessage解决
- Chrome存储API读写速度更快
- 选项页面的设置存储可以优先选用localStorage(localStorage不能跨域存储)
4. popup页面的Js变量
- 只有在用户点击扩展应用时JavaScript都是重新开始运行的,因此不要指望保存全局变量,而是应该通过localStorage存储.
5. 几种Js的区别
- content_scripts的Js 和显示的页面有关系,可以对显示页面的DOM进行修改(background不行)
- popup页面的Js 只有点击扩展应用时才会执行
- background域的Js 常驻后台,浏览器启动后自动执行



## 工具
 - [Closure Compiler](https://github.com/google/closure-compiler-js)
 代码压缩,高性能优化,可以使用Webpack.