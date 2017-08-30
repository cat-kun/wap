### 控制音频播放

* 遇到的问题：
    * ios下`autoplay`无法自动播放
* 解决方案：
    * 微信内嵌浏览器使用[微信api](http://res.wx.qq.com/open/js/jweixin-1.0.0.js)
    ```html
    <script src="http://res.wx.qq.com/open/js/jweixin-1.0.0.js"></script>
    ```
    ```js
    function autoPlayAudio1() {
        wx.config({
            // 配置信息, 即使不正确也能使用 wx.ready
            debug: false,
            appId: '',
            timestamp: 1,
            nonceStr: '',
            signature: '',
            jsApiList: []
        });
        wx.ready(function() {
            oAudio.play();
        });
    }
    autoPlayAudio1();
    ```
    * Safari下不自动播放