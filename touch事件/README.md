### touch事件

* 在模拟器下，不支持 on 的方式给元素绑定touch事件，在真机没有问题
* touch事件和mouse事件的不同

```
touchstart 手指触碰 —— mousedown
touchmove 手指移动 —— mousemove
touchend 手指抬起 ——mouseup

touchstart 手指触碰元素
touchmove 手指移动元素，在屏幕中移动
touchend 手指抬起，在屏幕中抬起
```
在移动端支持mouse事件，但是mouse事件，在移动端的执行会有300ms左右的延迟，并且还有一个臭名昭著的bug：事件点透

事件点透：
在移动端，触碰元素的时候，会立即执行添加在元素身上的touch事件，然后记录坐标，300ms之后，在这个坐标点找元素，如果找到的元素有mouse事件，就执行元素的mouse事件。（a href 本身就是一个js内置的click事件，也就是mouse事件）

解决办法：
    给元素清除默认事件

* 清除默认事件所带来的问题：

* 好处：
1. 解决ios Safari以及部分安卓浏览器不支持viewport的最大缩放值和禁止缩放的问题
2. 解决ios Safari下给body加overflow：hidden无效的问题
3. 解决事件点透的问题
4. 禁止mouse事件执行
5. 阻止浏览器的回弹效果

* 坏处：
1. 阻止触发浏览器的滚动条（无法滚动页面）
2. 阻止触发系统菜单
3. 阻止图片、文字被选中
4. 阻止input的输入
