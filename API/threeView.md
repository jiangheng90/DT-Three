# ThreeView

## 概述

为降低 Three.js 对无三维开发经验，我在框架中开发了一个入口类用来固定渲染流程。渲染过程的执行大致分为如下几步：

<html>
    <img :src="$withBase('/imgs/api/1.png')" />
</html>

## 属性

### container

-   类型：`HTMLElement`

-   描述：三维组件的`document`容器，它的底层是通过 `canvas` 实现。

### width

-   类型：`number`

-   描述：容器宽度，它获取的是`container`的`offsetWidth`属性。

### heigth

-   类型：`number`

-   描述：容器高度，它获取的是`container`的`offsetHeight`属性。

### renderer

-   类型： `THREE.WebGLRenderer`

-   描述：画面渲染器

### scene

-   类型：`THREE.Scene`

-   描述：三维场景的容器对象，通过它可以访问到场景内所有存在的实体对象。

### scene2

-   类型：`THREE.Scene`

-   描述：三维场景内`3DWidget`的容器对象，这个对象通常不用，仅仅是预留的一个接口。

### camera

-   类型：`THREE.PerspectiveCamera`

-   描述：三维场景内摄像机对象。

### controls

-   类型：`THREE.OrbitControls`

-   描述：场景控制器，完成鼠标对画面的缩放、旋转、平移。

#### controls.autoRotate

-   类型：`Boolean`

-   默认值： `false`

-   描述：控制控制器是否自动旋转。

#### controls.enablePan

-   类型：`Boolean`

-   默认值： `true`

-   描述：控制控制器是否能移动视角。

#### controls.enableDamping

-   类型：`Boolean`

-   默认值： `true`

-   描述：控制控制器旋转移动视角是否有阻尼感。

### lights

-   类型：`THREE.Group`

-   描述：灯光组，该属性内存放场景所有的灯光。

### models

-   类型：`THREE.Group`

-   描述：模型组，该属性内存放场景所有外来加载的模型。

### stats

-   类型：`THREE.Stats`

-   描述：性能监视面板，开发模式中监控帧率、内存、操作延时用的。

### clock

-   类型：`THREE.Clock`

-   描述：`runtime`内置时钟，用于记录时间。

### raycaster

-   类型：`THREE.Raycaster`

-   描述：场景内置射线对象，用于模型点击、悬停、双击、右键等交互操作的接口。

### composer

-   类型：`EffectComposer`

-   描述：`three.js`的后处理接口，它是一个调制器将所有后处理效果叠加。

### renderPass

-   类型：`RenderPass`

-   描述：后处理的原始画面通道。

### bloomRendererPass

-   类型：`UnrealBloomPass`

-   描述：`bloom`光效后处理通道，效果类似会发光的霓虹灯效果。

### fxaaRendererPass

-   类型：`ShaderPass`

-   描述：`FXAA`快速抗锯齿通道。

### miniMap

-   类型：`Object`

-   描述：该对象是一个小地图的容器，挂载所有和`miniMap`相关的属性。

#### miniMap.size

-   类型：`Object`

-   数据结构：

```js
{
    width: number,
    heigth: number
}
```

-   默认值：

```js
{
    width: 128,
    heigth: 128
}
```

-   描述：小地图的`element`元素大小。

#### miniMap.size

-   类型：`Object`

-   数据结构：

```js
{
    width: number,
    heigth: number
}
```

-   默认值：

```js
{
    width: 128,
    heigth: 128
}
```

-   描述：小地图的`element`元素大小。

#### miniMap.left

-   类型：`number`

-   默认值：`0`

-   描述：小地图的`element`元素距离`container`左侧的相对位置。

#### miniMap.rigth

-   类型：`number`

-   默认值：`undefined`

-   描述：小地图的`element`元素距离`container`右侧的相对位置。

#### miniMap.top

-   类型：`number`

-   默认值：`0`

-   描述：小地图的`element`元素距离`container`顶部的相对位置。

#### miniMap.bottom

-   类型：`number`

-   默认值：`undefined`

-   描述：小地图的`element`元素距离`container`底部的相对位置。

#### miniMap.layout

-   类型：`string`

-   默认值：`tl`

-   描述：小地图的`element`元素相对于`container`的相对定位模式，有`tl`（左上）,`bl`（左下）,`tr`（右上）,`br`（右下）四种模式。默认为`tl`（左上）。

#### miniMap.camera

-   类型：`OrthographCamera`

-   描述：小地图的摄像机接口，可以控制它完成小地图的缩放、位置移动。

#### miniMap.camera.default

-   类型： `Object`

-   描述：小地图摄像机默认属性容器。

#### miniMap.camera.default.width

-   类型： `number`

-   默认值： `30`

-   描述：小地图摄像机默认宽度。

#### miniMap.camera.default.height

-   类型： `number`

-   默认值： `30/miniMap.renderer.getPixelRatio()`

-   描述：小地图摄像机默认高度。

#### miniMap.camera.default.zoom

-   类型： `number`

-   默认值： `1`

-   描述：小地图摄像机默认缩放倍率。

#### miniMap.camera.default.minWidth

-   类型： `number`

-   默认值： `1`

-   描述：小地图摄像机默认最小缩放尺寸。

#### miniMap.camera.default.maxWidth

-   类型： `number`

-   默认值： `30`

-   描述：小地图摄像机默认最大缩放尺寸。

#### miniMap.tag

-   类型：`Tag`

-   描述：小地图的当前位置对象，`Tag`类型的详细内容会在后面看到。

### widget

-   类型：`Object`

-   描述：该对象是一个`2DWidget`的容器，挂载所有和`2DWidget`相关的属性。现在只有`renderer`这个属性在该属性内。

#### widget.renderer

-   类型：`CSS2DRenderer`

-   描述：`2DWidget`的渲染器，负责以 DOM 叠加的形式渲染`2DWidget`。

### widget3D

-   类型：`Object`

-   描述：该对象是一个`3DWidget`的容器，挂载所有和`3DWidget`相关的属性。现在只有`renderer`和`group`这个属性在该属性内。

#### widget3D.renderer

-   类型：`CSS3DRenderer`

-   描述：`3DWidget`的渲染器，负责以 DOM 叠加的形式渲染`3DWidget`。

#### widget3D.group

-   类型：`THREE.Group`

-   描述：`3DWidget`的对象组，它是`scene2`的子对象，负责访问`3DWidget`在场景内的所有三维实体子对象。

## 方法

### constructor()/ThreeApp()

-   类型：`Function`

-   参数类型：`Object`

-   详细：构造方法，该方法完成了三维组件的画面初始化。通过传入的参数不同可以配置三维画面、摄像机、控制器、小地图等等一些属性，

-   参数完整数据结构：

```typescript
{
    el: HTMLElement,
    stats?: boolean,
    envMap?: string, // HDR贴图路径
    cameraPosition?: [number, number, number] // 摄像机初始位置
    controls?: {
        target: [number, number, number], //控制器焦点
        autoRotate?: boolean, // 是否自动旋转
        pan?: boolean // 是否移动
    }
    background?: { // 渲染器背景
        color?: string, // rgba写法，形如rgba(255, 0, 0, 1)
        alpha?: number, // 0~1的数字
    },
    miniMap?: {
        size?: [number, number], // 长度为2的数字数组
        position?: {
            left?: number, // 距三维组件左边缘距离
            right?: number, // 距三维组件右边缘距离
            top?: number, // 距三维组件上边缘距离
            bottom?: number, // 距三维组件下边缘距离
        },
        camera?: {
            size?: number，// 摄像机尺寸
            near?: number, // 近视面尺寸
            far?: number, // 远视面尺寸
            zoom?: number, // 缩放倍率
            minWidth?: number, // 最小宽度
            maxWidth?: number, // 最大宽度
        }
    },
    bloomPass: boolean // 是否启用bloomPass
}
```

::: tip 说明：

-   其中带有?的属性是非必需属性。
-   `left`，`right`，`top`，`bottom`这四个属性只能两两出现，且`left`和`right`不能同时出现、`top`，`bottom`不能同时出现。
-   envMap 在 dt-data 项目中会导致传入的 HDR 贴图从`ArrayBuffer`变为`string`造成错误，所以在 dt-data 项目中，请勿配置该属性。
-   该构造函数为异步加载，所以该构造方法用`Promise`包裹并抛出`resolve`和`reject`更为合适。

:::

-   示例

html 部分

```HTML
<div id="three" class="content"></div>
```

js 部分

```javascript
import ThreeApp from '$user/three/Entry/ThreeView'

const el = document.getElementById('three')
const stats = true
const envMap = envMapPath
const cameraPos = [100, 100, 100]
const target = [0, 0, 0]
const backgroundColor = 'rgba(255, 0, 0, 1)'
const params = {
    el: el,
    stats: true,
    envMap: envMapPath,
    cameraPosition: cameraPos,
    controls: {
        target: target,
        autoRotate: false,
        pan: true,
    },
    background: {
        color: backgroundColor,
        alpha: 0.2,
    },
    miniMap: {
        size: [150, 150], // 长度为2的数字数组
        position: {
            left: 0, // 距三维组件左边缘距离
            top: 0, // 距三维组件右边缘距离
        },
        camera: {
            near: 1, // 近视面尺寸
            far: 100, // 远视面尺寸
            zoom: 1, // 缩放倍率
            minWidth: 1, // 地图最小尺寸
            maxWidth: 30, // 地图最大尺寸
        },
    },
}
const app = new ThreeApp(params)
```

css 部分

```css
.content {
    width: 600px;
    height: 400px;
}
```

::: tip 说明：

-   被挂载的元素 `el` 必须有尺寸，否则三维组件的画面无法被渲染。

:::

### AddStats()

-   类型：`Function`

-   参数类型：无

-   详细：在页面上增加性能监视面板插件。

-   示例:

```javascript
import ThreeApp from '$user/three/Entry/ThreeView'

const params = {
    // add what you want
}
const app = new ThreeApp(params)

app.AddStats()
```

### RemoveStats()

-   类型：`Function`

-   参数类型：无

-   详细：在页面上移除性能监视面板插件。

-   示例:

```javascript
import ThreeApp from '$user/three/Entry/ThreeView'

const params = {
    // add what you want
}
const app = new ThreeApp(params)

app.AddStats()

// do what you want

app.RemoveStats()
```

### SetCameraPosition()

-   类型：`Function`

-   参数类型：`[number, number, number]`

-   详细：设置摄像机的位置。

-   示例:

```javascript
import ThreeApp from '$user/three/Entry/ThreeView'

const params = {
    // add what you want
}
const app = new ThreeApp(params)

const position = [100, 100, 100]

app.SetCameraPosition(position)
```

### SetControlTarget()

-   类型：`Function`

-   参数类型：`[number, number, number]`

-   详细：设置控制器焦点。

-   示例:

```javascript
import ThreeApp from '$user/three/Entry/ThreeView'

const params = {
    // add what you want
}
const app = new ThreeApp(params)

const target = [100, 100, 100]

app.SetControlTarget(target)
```

::: tip 说明：

-   `SetControlTarget()`和`SetCameraPosition()`两个方法最好同时使用来确定你需要固定的摄像机画面。

:::

### LoadGLTFModel()

-   类型：`Function`

-   参数类型：`string`

-   详细：加载 glTF 模型,获取模型对象。

-   示例:

```javascript
import ThreeApp from '$user/three/Entry/ThreeView'

const params = {
    // add what you want
}
const app = new ThreeApp(params)

const url = '/modelUrl'

// in async
const res = await app.LoadGLTFModel(url)
const model = res.obj3d
const mixer = res.mixer
const animations = res.animations

// or
app.LoadGLTFModel().then((res) => {
    const model = res.obj3d
    const mixer = res.mixer
    const animations = res.animations
})
```

::: tip 说明：

-   该方法只负责文件加载，并获得该文件对象。

:::

### AddGLTFModelToScene()

-   类型：`Function`

-   参数类型：`Object3D`

-   详细：把`glTF`模型添加到场景。

-   示例:

```javascript
import ThreeApp from '$user/three/Entry/ThreeView'

const params = {
    // add what you want
}
const app = new ThreeApp(params)

const url = '/modelUrl'

// in async function
const res = await app.LoadGLTFModel(url)
const model = res.obj3d
app.AddGLTFModelToScene(model)

// or
app.LoadGLTFModel().then((res) => {
    const model = res.obj3d
    app.AddGLTFModelToScene(model)
})
```

### RemoveModelFromGroup()

-   类型：`Function`

-   参数类型：`Object3D`

-   详细：把单个模型移除场景。

-   示例:

```javascript
import ThreeApp from '$user/three/Entry/ThreeView'

const params = {
    // add what you want
}
const app = new ThreeApp(params)

const model = app.model.children[0] // 假设场景中该对象存在
app.RemoveModelFromGroup(model)
```

::: danger 警告：

-   该方法不仅会把模型移除场景、还会完成几何体、材质的内存释放，所以该方法仅用于移除整个`glTF`模型，移除单个模型的子对象可能会造成一些不可预知的错误。对于单个模型移除应当使用如下方法

```javascript
app.scene.remove(targetObj)
```

:::

### UnLoadModel()

-   类型：`Function`

-   参数类型：`Object3D, AnimationMixer`

-   详细：把`glTF`模型完全卸载。

-   示例:

```javascript
import ThreeApp from '$user/three/Entry/ThreeView'

let model, mixer

const params = {
    // add what you want
}
const app = new ThreeApp(params)

const url = '/modelUrl'

// in async
const res = await app.LoadGLTFModel(url)
model = res.obj3d
mixer = res.mixer

// or
app.LoadGLTFModel().then((res) => {
    model = res.obj3d
    mixer = res.mixer
})

app.UnLoadModel(model, mixer)
```

### PlayKeyFrameAnimation()

-   类型：`Function`

-   参数类型：`AnimationMixer, AnimationClip`

-   详细：播放单个关键帧动画（骨骼动画也可播放）。

-   示例:

```javascript
import ThreeApp from '$user/three/Entry/ThreeView'

let model, mixer

const params = {
    // add what you want
}
const app = new ThreeApp(params)

const url = '/modelUrl'

//------------------模型和动画加载----------------------

// in async function
const res = await app.LoadGLTFModel(url)
model = res.obj3d
mixer = res.mixer
const animations = res.animations
app.AddGLTFModelToScene(model)

// or
app.LoadGLTFModel().then((res) => {
    model = res.obj3d
    mixer = res.mixer
    const animations = res.animations
    app.AddGLTFModelToScene(model)
})

//------------------模型和动画加载----------------------
app.PlayKeyFrameAnimation(mixer, animations[0]) // 播放第一个动画
```

### PlayAllKeyFrameAnimations()

-   类型：`Function`

-   参数类型：`AnimationMixer, AnimationClip[]`

-   详细：播放所有关键帧动画（骨骼动画也可播放）。

-   示例:

```javascript
import ThreeApp from '$user/three/Entry/ThreeView'

let model, mixer

const params = {
    // add what you want
}
const app = new ThreeApp(params)

const url = '/modelUrl'

//------------------模型和动画加载----------------------

// in async function
const res = await app.LoadGLTFModel(url)
model = res.obj3d
mixer = res.mixer
animations = res.animations
app.AddGLTFModelToScene(model)

// or
app.LoadGLTFModel().then((res) => {
    model = res.obj3d
    mixer = res.mixer
    animations = res.animations
    app.AddGLTFModelToScene(model)
})

//------------------模型和动画加载----------------------
app.PlayAllKeyFrameAnimations(mixer, animations) // 播放所有动画
```

### PauseKeyFrameAnimation()

-   类型：`Function`

-   参数类型：`AnimationMixer, AnimationClip`

-   详细：暂停单个关键帧动画。

-   示例:

```javascript
import ThreeApp from '$user/three/Entry/ThreeView'

let model, mixer

const params = {
    // add what you want
}
const app = new ThreeApp(params)

const url = '/modelUrl'

//------------------模型和动画加载----------------------

// in async function
const res = await app.LoadGLTFModel(url)
model = res.obj3d
mixer = res.mixer
animations = res.animations
app.AddGLTFModelToScene(model)

// or
app.LoadGLTFModel().then((res) => {
    model = res.obj3d
    mixer = res.mixer
    animations = res.animations
    app.AddGLTFModelToScene(model)
})

//------------------模型和动画加载----------------------
app.PlayKeyFrameAnimation(mixer, animations[0]) // 播放第一个动画

app.PauseKeyFrameAnimation(mixer, animations[0]) // 暂停第一个动画
```

### PauseAllKeyFrameAnimations()

-   类型：`Function`

-   参数类型：`AnimationMixer, AnimationClip[]`

-   详细：暂停所有关键帧动画（骨骼动画也可播放）。

-   示例:

```javascript
import ThreeApp from '$user/three/Entry/ThreeView'

let model, mixer

const params = {
    // add what you want
}
const app = new ThreeApp(params)

const url = '/modelUrl'

//------------------模型和动画加载----------------------

// in async function
const res = await app.LoadGLTFModel(url)
model = res.obj3d
mixer = res.mixer
animations = res.animations
app.AddGLTFModelToScene(model)

// or
app.LoadGLTFModel().then((res) => {
    model = res.obj3d
    mixer = res.mixer
    animations = res.animations
    app.AddGLTFModelToScene(model)
})

//------------------模型和动画加载----------------------
app.PlayAllKeyFrameAnimations(mixer, animations) // 播放所有动画

app.PauseAllKeyFrameAnimations(mixer, animations) // 暂停所有动画
```

### StopKeyFrameAnimation()

-   类型：`Function`

-   参数类型：`AnimationMixer, AnimationClip`

-   详细：停止单个关键帧动画。

-   示例:

```javascript
import ThreeApp from '$user/three/Entry/ThreeView'

let model, mixer

const params = {
    // add what you want
}
const app = new ThreeApp(params)

const url = '/modelUrl'

//------------------模型和动画加载----------------------

// in async function
const res = await app.LoadGLTFModel(url)
model = res.obj3d
mixer = res.mixer
animations = res.animations
app.AddGLTFModelToScene(model)

// or
app.LoadGLTFModel().then((res) => {
    model = res.obj3d
    mixer = res.mixer
    animations = res.animations
    app.AddGLTFModelToScene(model)
})

//------------------模型和动画加载----------------------
app.PlayKeyFrameAnimation(mixer, animations[0]) // 播放第一个动画

app.StopKeyFrameAnimation(mixer, animations[0]) // 暂停第一个动画
```

### StopAllKeyFrameAnimations()

-   类型：`Function`

-   参数类型：`AnimationMixer, AnimationClip[]`

-   详细：暂停所有关键帧动画（骨骼动画也可播放）。

-   示例:

```javascript
import ThreeApp from '$user/three/Entry/ThreeView'

let model, mixer

const params = {
    // add what you want
}
const app = new ThreeApp(params)

const url = '/modelUrl'

//------------------模型和动画加载----------------------

// in async function
const res = await app.LoadGLTFModel(url)
model = res.obj3d
mixer = res.mixer
animations = res.animations
app.AddGLTFModelToScene(model)

// or
app.LoadGLTFModel().then((res) => {
    model = res.obj3d
    mixer = res.mixer
    animations = res.animations
    app.AddGLTFModelToScene(model)
})

//------------------模型和动画加载----------------------
app.PlayAllKeyFrameAnimations(mixer, animations) // 播放所有动画

app.StopAllKeyFrameAnimations(mixer, animations) // 停止所有动画
```

### RemoveMixerFromQueue()

-   类型：`Function`

-   参数类型：`AnimationMixer`

-   详细：移除动画混合器。

-   示例:

```javascript
import ThreeApp from '$user/three/Entry/ThreeView'

let model, mixer

const params = {
    // add what you want
}
const app = new ThreeApp(params)

const url = '/modelUrl'

//------------------模型和动画加载----------------------

// in async function
const res = await app.LoadGLTFModel(url)
model = res.obj3d
mixer = res.mixer
animations = res.animations
app.AddGLTFModelToScene(model)

// or
app.LoadGLTFModel().then((res) => {
    model = res.obj3d
    mixer = res.mixer
    animations = res.animations
    app.AddGLTFModelToScene(model)
})

//------------------模型和动画加载----------------------
app.RemoveMixerFromQueue(mixer)
```

### ShowMiniMap()

-   类型：`Function`

-   参数类型：无

-   详细：调用该方法显示小地图，如果在初始化配置方法中没有配置 miniMap 属性，该方法不会有任何作用。

-   示例：

```javascript
import ThreeApp from '$user/three/Entry/ThreeView'

let model, mixer

const params = {
    // add what you want
    ...customAttribute,
    miniMap: {
        size: [300, 300],
    },
}
const app = new ThreeApp(params)

const url = '/modelUrl'

//------------------模型和动画加载----------------------

// in async function
const res = await app.LoadGLTFModel(url)
model = res.obj3d
mixer = res.mixer
animations = res.animations
app.AddGLTFModelToScene(model)

// or
app.LoadGLTFModel().then((res) => {
    model = res.obj3d
    mixer = res.mixer
    animations = res.animations
    app.AddGLTFModelToScene(model)
})

// 显示小地图
app.ShowMiniMap()
```

### HideMiniMap()

-   类型：`Function`

-   参数类型：无

-   详细：调用该方法隐藏小地图，如果在初始化配置方法中没有配置 miniMap 属性，该方法不会有任何作用。

-   示例：

```javascript
import ThreeApp from '$user/three/Entry/ThreeView'

let model, mixer

const params = {
    // add what you want
    ...customAttribute,
    miniMap: {
        size: [300, 300],
    },
}
const app = new ThreeApp(params)

const url = '/modelUrl'

//------------------模型和动画加载----------------------

// in async function
const res = await app.LoadGLTFModel(url)
model = res.obj3d
mixer = res.mixer
animations = res.animations
app.AddGLTFModelToScene(model)

// or
app.LoadGLTFModel().then((res) => {
    model = res.obj3d
    mixer = res.mixer
    animations = res.animations
    app.AddGLTFModelToScene(model)
})

// 显示小地图
app.ShowMiniMap()

// 隐藏小地图
app.HideMiniMap()
```

### ZoomIn()

-   类型：`Function`

-   参数类型：`number, string`

-   详细：调用该方法可以实现平滑缩放小地图，如果在初始化配置方法中没有配置 miniMap 属性，该方法不会有任何作用。对于第一个参数，传入的是动画的时间，单位是毫秒。第二个参数为缩放动画类型。动画类型有`liner`,`ease`,`easeIn`,`easeOut`,`easeInOut`,`inOutBack`这几种。

-   示例：

```javascript
import ThreeApp from '$user/three/Entry/ThreeView'

let model, mixer

const params = {
    // add what you want
    ...customAttribute,
    miniMap: {
        size: [300, 300],
    },
}
const app = new ThreeApp(params)

const url = '/modelUrl'

//------------------模型和动画加载----------------------

// in async function
const res = await app.LoadGLTFModel(url)
model = res.obj3d
mixer = res.mixer
animations = res.animations
app.AddGLTFModelToScene(model)

// or
app.LoadGLTFModel().then((res) => {
    model = res.obj3d
    mixer = res.mixer
    animations = res.animations
    app.AddGLTFModelToScene(model)
})

// 显示小地图
app.ShowMiniMap()

// 缩放小地图
app.ZoomIn(500, 'easeInOut')
```

### ZoomOut()

-   类型：`Function`

-   参数类型：`number, string`

-   详细：调用该方法可以实现平滑缩放小地图，如果在初始化配置方法中没有配置 miniMap 属性，该方法不会有任何作用。对于第一个参数，传入的是动画的时间，单位是毫秒。第二个参数为缩放动画类型。动画类型有`liner`,`ease`,`easeIn`,`easeOut`,`easeInOut`,`inOutBack`这几种。

-   示例：

```javascript
import ThreeApp from '$user/three/Entry/ThreeView'

let model, mixer

const params = {
    // add what you want
    ...customAttribute,
    miniMap: {
        size: [300, 300],
    },
}
const app = new ThreeApp(params)

const url = '/modelUrl'

//------------------模型和动画加载----------------------

// in async function
const res = await app.LoadGLTFModel(url)
model = res.obj3d
mixer = res.mixer
animations = res.animations
app.AddGLTFModelToScene(model)

// or
app.LoadGLTFModel().then((res) => {
    model = res.obj3d
    mixer = res.mixer
    animations = res.animations
    app.AddGLTFModelToScene(model)
})

// 显示小地图
app.ShowMiniMap()

// 缩放小地图
app.ZoomOut(500, 'easeInOut')
```

### SetOrbitControls()

-   类型：`Function`

-   参数类型：`[number, number, number]`

-   详细：将控制器切换为`OrbitControls`，`OrbitControls`为最常用的三维控制器，由于控制器原本就是`OrbitControls`，所以一般情况不需要使用该方法切换。传入参数为一个长度为 3 的纯数字数组。

-   示例:

```javascript
import ThreeApp from '$user/three/Entry/ThreeView'

let model, mixer

const params = {
    // add what you want
}
const app = new ThreeApp(params)

const url = '/modelUrl'

//------------------模型和动画加载----------------------

// in async function
const res = await app.LoadGLTFModel(url)
model = res.obj3d
mixer = res.mixer
animations = res.animations
app.AddGLTFModelToScene(model)

// or
app.LoadGLTFModel().then((res) => {
    model = res.obj3d
    mixer = res.mixer
    animations = res.animations
    app.AddGLTFModelToScene(model)
})

// ... do something change app's controls

const target = [0, 0, 0]
app.SetOrbitControls(target)
```

### SetPointerLockControls()

-   类型：`Function`

-   参数类型：无

-   详细：将控制器切换为`PointerLockControls`，`PointerLockControls`为第一人称漫游控制器。

-   示例:

```javascript
import ThreeApp from '$user/three/Entry/ThreeView'

let model, mixer

const params = {
    // add what you want
}
const app = new ThreeApp(params)

const url = '/modelUrl'

//------------------模型和动画加载----------------------

// in async function
const res = await app.LoadGLTFModel(url)
model = res.obj3d
mixer = res.mixer
animations = res.animations
app.AddGLTFModelToScene(model)

// or
app.LoadGLTFModel().then((res) => {
    model = res.obj3d
    mixer = res.mixer
    animations = res.animations
    app.AddGLTFModelToScene(model)
})

app.SetPointerLockControls()
```

### SetAndRestoreOrbitControls()

-   类型：`Function`

-   参数类型：无

-   详细：将控制器切换为`OrbitControls`，并恢复为之前的相关参数。

-   示例:

```javascript
import ThreeApp from '$user/three/Entry/ThreeView'

let model, mixer

const params = {
    // add what you want
}
const app = new ThreeApp(params)

const url = '/modelUrl'

//------------------模型和动画加载----------------------

// in async function
const res = await app.LoadGLTFModel(url)
model = res.obj3d
mixer = res.mixer
animations = res.animations
app.AddGLTFModelToScene(model)

// or
app.LoadGLTFModel().then((res) => {
    model = res.obj3d
    mixer = res.mixer
    animations = res.animations
    app.AddGLTFModelToScene(model)
})

app.SetAndRestoreOrbitControls()
```

### Destroy()

-   类型：`Function`

-   参数类型：无

-   详细：三维组件在销毁时完成垃圾回收、内存释放。垃圾回收完成了渲染器内存释放、场景内对象的内存释放。

-   示例:

```javascript
import ThreeApp from '$user/three/Entry/ThreeView'

let model, mixer

const params = {
    // add what you want
}
const app = new ThreeApp(params)

const url = '/modelUrl'

//------------------模型和动画加载----------------------

// in async function
const res = await app.LoadGLTFModel(url)
model = res.obj3d
mixer = res.mixer
animations = res.animations
app.AddGLTFModelToScene(model)

// or
app.LoadGLTFModel().then((res) => {
    model = res.obj3d
    mixer = res.mixer
    animations = res.animations
    app.AddGLTFModelToScene(model)
})

//on app destroy
app.Destroy()
```
