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
