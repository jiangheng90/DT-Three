# Events

## 概述

本节内容主要介绍在该框架内的各种自定义事件，他们的事件名称、传入数据、事件触发条件。他们中的一部分在`ThreeView`中做了相应的处理。目前在`/three/Event`内有两种事件。一种是`dt-data`的自定义事件，命名都是以`three-`开头。另一类是最开始的封装事件，他们以`on`开头。
::: danger 警告：
所有的事件都被挂载在`window`下，所以不要出现事件重名。
:::

## 框架自定义事件

### ControlsChangeEvent

-   事件名称：`onControlsChange`

-   事件参数：

```typescript
{
    detail: {
        {
            app: ThreeView,
            oldControls: OrbitControls|PointLockControls,
            newControls: OrbitControls|PointLockControls,
        }
    }
}
```

-   详细：在`three/Event/ControlsChange.js` 控制器发生变更的时候如果需要产生变更的钩子事件，可以使用此事件触发。

### PointerLockExitEvent

-   事件名称：`onPointerLockExit`

-   事件参数：

```typescript
{
    detail: any | null
}
```

-   详细：在`three/Event/PointerLockChange.js`,控制器退出`PointLockControls`的时候，触发该事件。

### ThreeErrorEvent

-   事件名称：`onThreeError`

-   事件参数：

```typescript
{
    detail: string
}
```

-   详细：在`three/Event/ThreeError.js`, runtime 发生错误时候可以使用此事件触发。

## dt-data 自定义事件

### ElementResizeEvent

-   事件名称：`three-elementresize`

-   事件参数：

```typescript
{
    detail: {
        width: number,
        height: number,
    }
}
```

-   详细：在`three/Event/ElementResize.js`，触发该事件重新设置组件的宽度与高度。

### ChangeBackgroundEvent

-   事件名称：`three-changebackground`

-   事件参数：

```typescript
{
    detail: {
        alpha: number,
        color: string,
    }
}
```

-   详细：在`three/Event/ChangeBackground.js`，触发该事件改变渲染器背景的颜色和透明度。

### ChangeControlsConfigEvent

-   事件名称：`three-changecontrolsconfig`

-   事件参数：

```typescript
{
    detail: {
        autoRotate: booleam,
        pan: booleam,
    }
}
```

### StatsVisibleEvent

-   事件名称：`three-statsvisible`

-   事件参数：

```typescript
{
    detail: {
        visible: booleam,
    }
}
```

-   详细：在`three/Event/StatsVisible.js`，触发该事件改变性能监视面板显示隐藏。

### DestroyEvent

-   事件名称：`three-destroyApp`

-   事件参数：

```typescript
{
    detail: any | null
}
```

-   详细：在`three/Event/Diestory.js`，触发该事件完成垃圾回收。

## 事件处理

`ThreeView`主线程上监听的事件名称如下：

### resize

描述：在窗口尺寸发生变化的时候，重设渲染器尺寸。

### scroll

描述：在页面发生滚动的时候重设组件位置。

### dblclick

描述：在双击的时候触发，不过所有和模型的交互委托在模型本身完成监听。

### mousemove

描述：在鼠标移动的时候触发，用于监听鼠标移到模型上。

### mouseleave

描述：在鼠标移动的时候触发，用于监听鼠标从模型上移开。

### keydown、keyup

描述：在键盘按下的时候触发，用于`PointLockControls`键盘控制实现。

### pointerlockchange

描述：在浏览器该事件触发时触发`onPointerLockExit`事件。

### three-elementresize

描述：监听该事件，若触发，则改变组件尺寸。

### three-statsvisible

描述：监听该事件，若触发，则改变性能监视面板显示隐藏。

### three-changebackground

描述：监听该事件，若触发，则改变渲染器背景。

### three-changecontrolsconfig

描述：监听该事件，若触发，则改变控制器自动旋转和移动。
