# Object3D

## 概述

Object3D 是`three.js`中的模型容器接口。很多和模型相关的操作都被挂载在该对象上。

## 拓展方法

### getCenter()

-   类型：`Function`

-   参数类型：无

-   详细：获取物体中心坐标。

::: danger 警告：
该方法是通过求平均数方式获取中心，如果严格的要求几何中心，则不能使用该方法。
:::

### explode()

-   类型：`Function`

-   参数类型：`Object`

-   参数完整数据结构：

```typescript
{
     indensity: number, // 爆炸距离
     duration: number, // 持续时间
     animateType: string, // 动画类型
     step: number, // 步长
     center: [x,y,z]  // 物体及子物体中心
}
```

-   详细：物体存在子物体的情况下爆炸。

-   示例：

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

const explodeParams = {
    indensity: 1,
    duration: 700,
    animateType: 'easeInOut',
    step: 20,
    center: model.getCenter(),
}

model.explode(explodeParams).then(() => {
    console.log('done')
})
```

::: danger 警告：
对象物体必须有多个子物体，且父物体是一个空`Object3D`。
:::

### reverseExplode()

-   类型：`Function`

-   参数类型：`Object`

-   参数完整数据结构：

```typescript
{
     indensity: number, // 爆炸距离
     duration: number, // 持续时间
     animateType: string, // 动画类型
     step: number, // 步长
}
```

-   详细：物体存在子物体的情况下爆炸复原。

-   示例：

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

const explodeParams = {
    indensity: 1,
    duration: 700,
    animateType: 'easeInOut',
    step: 20,
    center: model.getCenter(),
}

model.explode(explodeParams).then(() => {
    const reverseExplodeParams = {
        indensity: 1,
        duration: 700,
        animateType: 'easeInOut',
        step: 20,
    }
    model.reverseExplode(reverseExplodeParams)
})
```

### lineExplode()

-   类型：`Function`

-   参数类型：`Object`

-   参数完整数据结构：

```typescript
{
     y: number,
     app: ThreeView
     padding: number,
     duration: number,
     animateType: string,
     step: number，
}
```

-   详细：物体存在子物体的情况下将子物体展开成一条线。

-   示例：

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

const lineExplodeParams = {
    y: -10, // 高度偏移量
    app: app, // 三维组件实例
    padding: 2, // 零件的间隔
    duration: 700,
    animateType: 'easeInOut',
    step: 20,
}

model.lineExplode(lineExplodeParams).then(() => {
    console.log('done')
})
```

::: danger 警告：
对象物体必须有多个子物体，且父物体是一个空`Object3D`。
:::

### removeLineExplode()

-   类型：`Function`

-   参数类型：`Object`

-   参数完整数据结构：

```typescript
{
    app: ThreeView
}
```

-   详细：物体存在子物体的情况下将子物体展开后恢复原状。

-   示例：

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

const lineExplodeParams = {
    y: -10, // 高度偏移量
    app: app, // 三维组件实例
    padding: 2, // 零件的间隔
    duration: 700,
    animateType: 'easeInOut',
    step: 20,
}

model.lineExplode(lineExplodeParams).then(() => {
    const removeLineExplodeParams = {
        app: app,
    }
    model.removeLineExplode(removeLineExplodeParams)
})
```

### style.outline

-   类型：`boolean`

-   详细：模型对象后处理的接口。

-   示例：

```javascript
import ThreeApp from '$user/three/Entry/ThreeView'
import Style from '$user/three/PostProcess/Style'

const params = {
    // add what you want
}
const app = new ThreeApp(params)

const url = '/modelUrl'

// in async function
const res = await app.LoadGLTFModel(url)
const model = res.obj3d
app.AddGLTFModelToScene(model)

// 物体高亮
model.style = new Style(app, loadModel.children[0])
model.style.outline = true
model.style.outlineColor = '#00ff00'

// 物体移除高亮
model.style.outline = false
```

### removeOutlines()

-   类型：`Function`

-   参数类型：无

-   详细：移除物体及子物体高亮效果。

-   示例：

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

model.removeOutlines()
```

### setEffect()

-   类型：`Function`

-   参数类型：`boolean`

-   详细：是物体表面的高亮效果、面板显示或隐藏。

-   示例：

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

model.setEffect(false)
```

### setVisible()

-   类型：`Function`

-   参数类型：`boolean`

-   详细：是物体表面的高亮效果、面板、物体本身显示或隐藏。

-   示例：

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

model.setVisible(false)
```

### on()

-   类型：`Function`

-   参数类型：`string, Function`

-   详细：监听物体上发生的事件,一共有`mouseenter`,`mouseleave`,`mouseclick`,`contextmenu`,`dblclick`五个事件可以被监听到。

-   示例：

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

model.on('mouseclick', () => {
    console.log('model has being clicked!')
})
```

### setScale()

-   类型：`Function`

-   参数类型：`number`

-   详细：设置物体的比例。

-   示例：

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

// 模型放大两倍
model.setScale(2)
```

### moveInPath()

-   类型：`Function`

-   参数类型：`Object`

-   完整数据接口：

```typescript
{
    path: Curve, // Curve的子类
    duration: number, // 持续时间
    step: number, // 步长
    reverse: true, // 是否反向
}
```

-   详细：物体沿路径移动。

-   示例：

```javascript
import ThreeApp from '$user/three/Entry/ThreeView'
import MultilineCurve from '$user/three/Curves/MultilineCurve'

const params = {
    // add what you want
}
const app = new ThreeApp(params)

const url = '/modelUrl'

// in async function
const res = await app.LoadGLTFModel(url)
const model = res.obj3d
app.AddGLTFModelToScene(model)

const points = [
    [0, 0, 0],
    [0, 0, 50],
    [-50, 0, 50],
    [-50, 0, 100],
    [-100, 0, 100],
    [-100, 0, 0],
    [-1, 0, 0],
]

const path = new MultilineCurve(points)

const pathParams = {
    path: path,
    duration: 3000,
    step: 10,
    reverse: true,
}

model.moveInPath(pathParams).then(() => {
    console.log('done')
})
```

### setOpacitySmooth()

-   类型：`Function`

-   参数类型：`Object`

-   完整数据接口：

```typescript
{
    opacity: number, // 目标透明度
    duration: number, // 持续时间
    animateType: string, // 动画类型
    step: number, // 步长
}
```

-   详细：物体平滑更改透明度。

```javascript
import ThreeApp from '$user/three/Entry/ThreeView'
import MultilineCurve from '$user/three/Curves/MultilineCurve'

const params = {
    // add what you want
}
const app = new ThreeApp(params)

const url = '/modelUrl'

// in async function
const res = await app.LoadGLTFModel(url)
const model = res.obj3d
app.AddGLTFModelToScene(model)

const opacityParams = {
    opacity: 0,
    duration: 400,
    animateType: 'easeInOut',
    step: 20,
}

// 模型渐隐
model.setOpacitySmooth(opacityParams).then(() => {
    console.log('done')
})
```
