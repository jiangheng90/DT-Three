# CSS2DWidget

## 概述

2DWidget 是在三维模型上挂载 2D 的`document`面板。其中封装的内容，位于`three/CSS2DWidgets/Widgets`，用于管理挂件的相关对象。其中包括：三维组件的实例、被挂载的模型对象、该面板的 dom 数组实例等等。

## 成员

### obj3d

-   类型： `THREE.Object3D`

-   描述：面板被挂载的三维物体对象。

### threeView

-   类型： `ThreeView`

-   描述：当前三维组件的实例。

### domList

-   类型：`HTMLElement[]`

-   描述：储存该三维物体上挂载的所有`dom`对象。

### sceneObjList

-   类型：`Object3D[]`

-   描述：该物体面板在三维空间内锚点三维对象。

### intervalList

-   类型：`Function[]`

-   描述：储存轮询定时器的容器。以方便在对象销毁时做内存释放。

### socketList

-   类型：`WebSocket[]`

-   描述：储存 WebSocket 的容器。以方便在对象销毁时做内存释放。

### panel

-   类型：`Object`

-   描述：储存该物体当前类的对象

## 方法

### constructor()

-   类型：`Function`

-   参数类型：`ThreeView, Object3D`

-   详细：构造方法，传入的第一个参数为三维组件的实例，第二个参数为三维物体的对象。

### AddWidget()

-   类型：`Function`

-   参数类型：`HTMLElement, DomWidget`

-   详细：在物体上添加新的面板。

### ShowWidget()

-   类型：`Function`

-   参数类型：`number`

-   详细：显示物体上某个面板。

### ShowAllWidgets()

-   类型：`Function`

-   参数类型：无

-   详细：显示物体上所有面板。

### HideWidget()

-   类型：`Function`

-   参数类型：`number`

-   详细：隐藏物体上某个面板。

### HideAllWidgets()

-   类型：`Function`

-   参数类型：无

-   详细：隐藏物体上所有面板。

### RemoveWidget()

-   类型：`Function`

-   参数类型：`number`

-   详细：移除物体上某个面板。

### RemoveAllWidget()

-   类型：`Function`

-   参数类型：无

-   详细：移除物体上所有面板。

### RemoveAllInterval()

-   类型：`Function`

-   参数类型：无

-   详细：移除该对象内所有的定时器。

### RemoveAllSockets()

-   类型：`Function`

-   参数类型：无

-   详细：关闭该对象内所有的`WebSocket`连接。

## 示例

由于这部分在`dt-data`中做了一部分应用。所以应用以这部分为例介绍其中一些功能用法。

```javascript
import ThreeApp from '$user/three/Entry/ThreeView'
import Widget from '$user/three/CSS2DWidgets/Widgets'
import SimpleWidget from '$user/three/CSS2DWidgets/SimpleWidget'

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

const targetModel = app.models.children[0] // 目标模型

//--------------新增面板----------------

targetModel.widget = new Widget(app, targetModel)

const widget = new SimpleWidget(data)
// in async function
const dom = await widget.getDOM()

targetModel.widget.AddWidget(dom, widget)

//-------------实时更新---------------
const interval = setInterval(() => {
    targetModel.widget.setState(reactiveList)
}, refreshTime)

// 添加定时器
targetModel.widget.AddInterval(interval)

// 隐藏面板
targetModel.widget.HideWidget(0)

// 显示面板
targetModel.widget.ShowWidget(0)

// 隐藏所有面板
targetModel.widget.HideAllWidgets(0)

// 显示所有面板
targetModel.widget.ShowAllWidgets(0)

// 移除单个面板
targetModel.widget.RemoveWidget(0)

// 移除所有面板
targetModel.widget.RemoveAllWidget()
```
