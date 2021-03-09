# Multiline

## 概述

这是一个多线段曲线，它继承自`three.js`内置的`Curve`类。它覆盖了父类中的`getPoint()`和`getLength()`两个方法。从而实现了该多线段插值和长度积分功能。

## 内置属性

参考[`Curve`](https://threejs.org/docs/index.html#api/en/extras/core/Curve)的内置属性。

## 覆盖方法

### constructor()

-   类型：`Function`

-   传入参数：`[number, number, number][]`

-   描述：构造方法，传入多线段的线段顶点构造线段。

### getPoint()

-   类型：`Function`

-   传入参数：`number, THREE.Vector3`

-   描述：多线段的几何形状插值方法， 其中第一个参数为百分比，通过百分比获取插值点。

### getLength

-   类型：`Function`

-   传入参数：无

-   描述：多线段的几何形状长度积分方法。

## 示例

以下是一段通过多线段生成几何体的示例代码：

```javascript
import * as THREE from 'three'
import MultilineCurve from '/three/Curves/MultilineCurve'

// 多线段顶点
const points = [
    [0, 0, 0],
    [0, 0, 50],
    [-50, 0, 50],
    [-50, 0, 100],
    [-100, 0, 100],
    [-100, 0, 0],
    [-1, 0, 0],
]

// 多线段对象
const path = new MultilineCurve(points)

const geometry = new THREE.TubeGeometry(path, 64, 0.5, 8, false) // 构造几何体
const material = new THREE.MeshPhongMaterial({
    color: 0x6a6a6a,
    side: THREE.DoubleSide,
}) // 构造材质
const mesh = new THREE.Mesh(geometry, material) // 生成几何体
```
