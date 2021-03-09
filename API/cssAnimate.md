# CSSAnimate

## 概述

动画库，根据 0-1 的值返回插值曲线纵坐标。

## 成员

### liner

-   类型：`CubicBezier`

-   描述：`liner`动画插值曲线。

-   形状：

<html>
    <img :src="$withBase('/imgs/api/cssAnimate/1.png')" />
</html>

### ease

-   类型：`CubicBezier`

-   描述：`ease`动画插值曲线。

-   形状：

<html>
    <img :src="$withBase('/imgs/api/cssAnimate/2.png')" />
</html>

### easeIn

-   类型：`CubicBezier`

-   描述：`easeIn`动画插值曲线。

-   形状：

<html>
    <img :src="$withBase('/imgs/api/cssAnimate/3.png')" />
</html>

### easeOut

-   类型：`CubicBezier`

-   描述：`easeOut`动画插值曲线。

-   形状：

<html>
    <img :src="$withBase('/imgs/api/cssAnimate/4.png')" />
</html>

### easeInOut

-   类型：`CubicBezier`

-   描述：`easeInOut`动画插值曲线。

-   形状：

<html>
    <img :src="$withBase('/imgs/api/cssAnimate/5.png')" />
</html>

### inOutBack

-   类型：`CubicBezier`

-   描述：`inOutBack`动画插值曲线。

-   形状：

<html>
    <img :src="$withBase('/imgs/api/cssAnimate/6.png')" />
</html>

## 方法

### constructor()

-   类型：`Function`

-   详细：构造函数，初始化成员。

## 示例

```javascript
import Animate from '$user/three/CSSAnimate/Animate'

const duration = 1200 // 动画时间
const step = 20 // 步长
const animateType = 'ease' // 动画类型
const animate = new Animate(duration)[animateType] // 动画插值函数

let process = 0 // 当前进度

const interval = setInterval(() => {
    if (process >= duration) {
        window.clearInterval(interval)
    }
    const interpolation = animate(process / duration)
    process += step
}, step)
```
