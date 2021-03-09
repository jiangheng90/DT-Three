# Animation

## 概述

该部分内容维`three.js`中动画的相关方法封装，文件位于`/three/Animation`下。主要对单个动画和所有动画的的播放、暂停、停止、循环参数、初始化参数设置。该部分内容以模块形式封装，直接引用即可。

## 方法

### Play()

-   类型：`Function`

-   参数类型：`AnimationMixer, AnimationClip`

-   详细：播放单个动画。

-   示例:

```javascript
import ThreeApp from '$user/three/Entry/ThreeView'
import { Play } from '$user/three/Keyframe/MethodExtend'

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

Play(mixer, animations[0]) // 播放单个动画
```

### PlayAll()

-   类型：`Function`

-   参数类型：`AnimationMixer, AnimationClip[]`

-   详细：播放所有动画。

-   示例:

```javascript
import ThreeApp from '$user/three/Entry/ThreeView'
import { PlayAll } from '$user/three/Keyframe/MethodExtend'

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

PlayAll(mixer, animations) // 播放所有动画
```

### Pause()

-   类型：`Function`

-   参数类型：`AnimationMixer, AnimationClip`

-   详细：暂停单个动画。

-   示例:

```javascript
import ThreeApp from '$user/three/Entry/ThreeView'
import { Play, Pause } from '$user/three/Keyframe/MethodExtend'

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

Play(mixer, animations[0]) // 播放单个动画
Pause(mixer, animations[0]) // 暂停单个动画
```

### PauseAll()

-   类型：`Function`

-   参数类型：`AnimationMixer, AnimationClip`

-   详细：暂停所有动画。

-   示例:

```javascript
import ThreeApp from '$user/three/Entry/ThreeView'
import { PlayAll, PauseAll } from '$user/three/Keyframe/MethodExtend'

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

PlayAll(mixer, animations[0]) // 播放所有动画
PauseAll(mixer, animations[0]) // 暂停所有动画
```

### Reset()

-   类型：`Function`

-   参数类型：`AnimationMixer, AnimationClip`

-   详细：重置所有动画参数。

-   示例:

```javascript
import ThreeApp from '$user/three/Entry/ThreeView'
import { Reset } from '$user/three/Keyframe/MethodExtend'

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

Reset(mixer, animations[0]) // 重置单个动画参数
```

### ResetAll()

-   类型：`Function`

-   参数类型：`AnimationMixer, AnimationClip[]`

-   详细：重置所有动画参数。

-   示例:

```javascript
import ThreeApp from '$user/three/Entry/ThreeView'
import { ResetAll } from '$user/three/Keyframe/MethodExtend'

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

ResetAll(mixer, animations) // 重置所有动画参数
```

### Stop()

-   类型：`Function`

-   参数类型：`AnimationMixer, AnimationClip`

-   详细：停止单个动画，重置播放进度。

-   示例:

```javascript
import ThreeApp from '$user/three/Entry/ThreeView'
import { Play, Stop } from '$user/three/Keyframe/MethodExtend'

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

Play(mixer, animations[0]) // 播放单个动画
Stop(mixer, animations[0]) // 停止单个动画
```

### StopAll()

-   类型：`Function`

-   参数类型：`AnimationMixer, AnimationClip[]`

-   详细：停止所有动画，重置播放进度。

-   示例:

```javascript
import ThreeApp from '$user/three/Entry/ThreeView'
import { PlayAll, StopAll } from '$user/three/Keyframe/MethodExtend'

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

PlayAll(mixer, animations) // 播放所有动画
StopAll(mixer, animations) // 停止所有动画
```

### Loop()

-   类型：`Function`

-   参数类型：`AnimationMixer, AnimationClip, string`

-   详细：设置单个动画的循环类型。

-   示例:

```javascript
import ThreeApp from '$user/three/Entry/ThreeView'
import { Loop } from '$user/three/Keyframe/MethodExtend'

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

Loop(mixer, animations[0], 'Once') // 停止单个动画
```

::: tip 说明：
该方法的第三个参数对应该模块内的一个常量。对于动画的循环类型有三种：`Once`,`Repeat`, `PingPong`。

-   `Once`: 动画循环一次。
-   `Repeat`: 动画循环播放。
-   `PingPong`: 动画从头播放到尾，再从尾播放到头。往复循环。

:::

### AllLoop()

-   类型：`Function`

-   参数类型：`AnimationMixer, AnimationClip[], string`

-   详细：设置所有动画的循环类型。

-   示例:

```javascript
import ThreeApp from '$user/three/Entry/ThreeView'
import { Play, AllLoop } from '$user/three/Keyframe/MethodExtend'

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

AllLoop(mixer, animations, 'Once') // 停止单个动画
```

::: tip 说明：
该方法的第三个参数的设置同上

:::
