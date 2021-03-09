# 快速起步

## 引入依赖文件

将代码仓库中`src/three`文件夹内所有文件粘贴到需要引入`vue`项目你需要放入的文件夹内。

## 在 Vue 组件模板中引入方式

Vue 中默认模板如下

```HTML
<template>
    <div id="three"></div>
</template>
<script>
let app
import ThreeApp from '$user/three/Entry/ThreeView'
export defalut {
    mounted() {
        const el = document.getElementById('three')
        const cameraPos = [100, 100, 100]
        const params = {
            el: el,
            cameraPosition: cameraPos,
        }
        app = new ThreeApp(params)
    }
}
</script>
```

最后，可以看到如下效果：

<html>
    <img :src="$withBase('/imgs/guide/1.png')" alt="mixureSecure" />
</html>
