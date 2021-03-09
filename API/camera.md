# Camera

## 概述

该部分内容为摄像机部分的方法封装。主要分为两个部分

-   封装业务，内容在`/three/Camera/MethodExtend.js`内部，具体的方法实现全部在该文件内。
-   原型链挂载，内容在`/three/Camera/ProtoTypeExtendion.js`。该部分做了一层语法糖包裹。对外暴露 API。

因此下面的 API 都会以原型链上挂载的方法做文档。业务部分主要实现了兼容动画库`CSSAnimate`动效的相机移动。

## 拓展方法

### panTo()

-   类型：`Function`

-   参数类型：`Object`

-   详细：摄像机移动到某个点，相机面朝该点。

-   参数完整数据结构：

```typescript
{
    t: ThreeView, // 三维组件实例
    endPos: [number, number, number], // 相机移动终点，长度为3的纯数字数组
    duration?: number, // 动效时间，单位为毫秒，默认值为1200
    step?: number, // 步长，用于描述动效的流畅度，步长越短流畅度越高，单位为毫秒
    animateType?: string, // 动画类型
    target?: [number, number, number] // 摄像机位置，长度为3的纯数字数组，如果不存在则默认为endPos
}
```

-   示例:

```javascript
import ThreeApp from '$user/three/Entry/ThreeView'
import '$user/three/Camera/ProroTypeExtention'

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

const panToParams = {
    t: app,
    endPos: [10, 10, 10],
    duration: 700,
    step: 20,
    animateType: 'easeInOut',
}
app.panTo(panToParams).then(() => {
    console.log('done!)
})
```

### focusTo()

-   类型：`Function`

-   参数类型：`Object`

-   详细：摄像机动态移动面朝该点，并平滑聚焦到某个点，控制器平滑聚焦该点。

-   参数完整数据结构：

```typescript
{
    t: ThreeView, // 三维组件实例
    target: [number, number, number], // 控制器焦点，长度为3的纯数字数组
    duration?: number, // 动效时间，单位为毫秒，默认值为1200
    step?: number, // 步长，用于描述动效的流畅度，步长越短流畅度越高，单位为毫秒
    animateType?: string, // 动画类型
    cameraPos?: [number, number, number] // 摄像机位置，长度为3的纯数字数组，如果不存在则默认为target + [1, 1, 1]
}
```

-   示例:

```javascript
import ThreeApp from '$user/three/Entry/ThreeView'
import '$user/three/Camera/ProroTypeExtention'

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

const focusToParams = {
    t: app,
    target: [10, 10, 10],
    duration: 700,
    step: 20,
    animateType: 'easeInOut',
    cameraPos: [100, 100, 100],
}
app.focusTo(focusToParams).then(() => {
    console.log('done!)
})
```

::: tip 说明：
`panTo()`和`focusTo()`是想的相近的方法。`focusTo()`的方法不止包含了`camera`的业务，还包含了`controls`的业务，而`panTo()`只包含`camera`的业务。在 API 调用上`focusTo()`的方法内调用了`panTo()`。
:::

### MoveInPath()

-   类型：`Function`

-   参数类型：`Object`

-   详细：摄像机在曲线上漫游。

-   参数完整数据结构：

```typescript
{
    path: THREE.Curve, // 摄像机路径，Curve或者Curve的子类
    duration: number, // 漫游时间
    step?: number, // 步长，用于描述动效的流畅度，步长越短流畅度越高，单位为毫秒
    reverse?: boolean, // 是否反向
    target?: Object3D // 摄像注视的点，默认为正前方
}
```

-   示例:

```javascript
import ThreeApp from '$user/three/Entry/ThreeView'
import '$user/three/Camera/ProroTypeExtention'

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

const path = someCurveObject

const moveInPathParams = {
    path: path
}
app.MoveInPath(moveInPathParams).then(() => {
    console.log('done!)
})
```

::: tip 说明：
最后一个参数`target`最好不要设置。另外曲线的相关用法请查阅[`three.js曲线部分`](https://threejs.org/docs/index.html#api/en/extras/core/Curve)官方文档。
:::
