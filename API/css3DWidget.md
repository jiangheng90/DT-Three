# CSS3DWidget

## 概述

在三维空间内绘制一个板，在它上面可以插入 Web 页面。可以通过插入`HTMLElement`对象。

## 成员

### threeView

-   类型：`ThreeView`

-   描述：当前三维组件的实例。

### domElement

-   类型：`HTMLElement`

-   描述：三维面板的`dom`实例。

### widgetObject

-   类型；`CSS3DObject`

-   描述：`three.js`内置的三位面板接口对象。

### position

-   类型；`THREE.Vector3`

-   描述：面板对象在三维空间的位置。

### rotation

-   类型；`THREE.Vector3`

-   描述：面板对象在三维空间的方向。

### visible

-   类型；`boolean`

-   描述：控制面板的显示和隐藏。

## 方法

### constructor()

-   类型：`Function`

-   参数类型：`Object`

-   详细：构造方法，该方法完成三维面板到场景的实例化过程，

-   参数完整数据结构：

```typescript
{
    position?: [number, number, number], // 三维面板锚点坐标，为长度为3的数组。
    rotation?: [number, number, number], // 三维面板锚点方向，为长度为3的数组。
    target?: Object3D, // 三维面板锚点物体。
    offsetPosition?: [number, number, number], // 三维面板相对于锚点的偏移量，为长度为3的数组。
    el: HTMLElement, //  传入的document元素。
}
```

-   示例

```javascript
import ThreeApp from '$user/three/Entry/ThreeView'
import Widget3D from '$user/three/CSS3DWidgets/Widget3D'
import ExampleWidget3D from '$user/three/CSS3DWidgets/ExampleWidget3D'

const params = {
    // add what you want
}
const app = new ThreeApp(params)

const url = '/modelUrl'

//------------------模型和动画加载----------------------

// in async function
const res = await app.LoadGLTFModel(url)
model = res.obj3d
app.AddGLTFModelToScene(model)

// 创建三维面板
const pos = [0, 500, 0]
const ele = new ExampleWidget3D('https://cn.bing.com/')
let widget3d = new Widget3D({
    t: app,
    el: ele,
    target: model,
    offsetPosition: [0, 450, 0],
})

// 隐藏面板
widget3d.visible = false

// 显示面板
widget3d.visible = true

// 销毁面板
widget3d.Destroy()
```
