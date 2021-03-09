# 安装及引入

## 关于本项目

本项目是一个对于[Three.js](https://threejs.org/)的二次封装框架，开发策略在于拓展 Three.js 本身功能，同时兼顾公司业务支持。本项目主要在如下几个方面：

-   画面渲染
-   模型加载与对象获取
-   曲线与运动
-   三维画面中 2D Widget 组件
-   三维画面中的 3D Widget 组件
-   后处理
-   垃圾回收及内存释放

做了一系列符合公司业务需求的定制化封装，使开发者不需要在关注渲染这一部分的功能实现，从而把关注点集中到更加细化的业务上。

本项目有一个入口类`ThreeView`，在该类下完成了：

-   `WebGL`接口的 DOM 对象初始化
-   对于其他封装模块的方法代理
-   相对固定好的渲染流程
-   构造方法对于一些画面参数的可配置性

对于其他功能如：

-   关键帧动画播放
-   模型加载
-   相机操作
-   2D/3D Widget 操作

等等其他的一些操作，有一些采用设计类的形式挂载在`Three.js`的内置数据上。另一部分，对于一些内置数据的拓展方法，采用原型链的形式挂载在该数据类上。

以上是该项目的大体开发思路。

## 安装

在引入本拓展框架前需要引入 three 的依赖库

```bash
npm install three
```

## 引入

考虑代码私有化、低维护门槛，本项目在模块化上无任何打包处理。直接将`/three`文件夹下所有的内容拷贝至你需要引入的项目中即可。

### CDN

```HTML
<script type="module">
    import ThreeView from 'relativeDic/three/ThreeView.js'
</script>
```

### ES6 Module

```javascript
import ThreeView from 'relativeDic/three/ThreeView.js'
```

## 开始使用

至此，一个基于 Three 和 拓展框架 的开发环境已经搭建完毕，现在就可以编写代码了。各个功能的使用方法请参阅它们各自的文档。
