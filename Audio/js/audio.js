var oBtn = document.querySelector('.bgm-btn');
var oAudio = document.querySelector('#audio');

//控制音乐播放
var onOff = true;
oBtn.addEventListener('touchend', function(e) {
    e.stopPropagation();
    if (onOff) {
        oBtn.className = 'bgm-btn';
        oAudio.pause();
    } else {
        oBtn.className = 'bgm-btn rotate';
        oAudio.play();
    }
    onOff = !onOff;
}, false);

//微信下自动播放
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

// ios下的safari不会自动播放，需要通过js触发，所以处理方式为判断是否safari，是的话手动播放
var ua = navigator.userAgent;
var isSafari = ua.indexOf('Safari') > -1 && ua.indexOf('Chrome') < 1;
if(isSafari){
    console.log('safari');
    oBtn.className = 'bgm-btn';
    onOff = false
}