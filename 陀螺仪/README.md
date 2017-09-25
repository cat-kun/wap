### 重力感应
用普通的媒体查询做横竖屏切换并不是特别准确，一般采用`window.orientation`去判断，在模拟器上没有效果（会出现undefined），只能在真机测试

`window.orientation` 横竖屏检测事件，同样在chrome模拟器下无效
```js
window.addEventListener('orientationchange', function (e){
    alert(window.orientation);
});
```