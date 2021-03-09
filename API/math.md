# Math

## Calculate

### RandomId()

-   类型：`Function`

-   参数类型：无

-   详细：根据`0~10000000`的随机数和时间戳生成一个唯一 id。

-   示例:

```javascript
const id = RandomId()
console.log(id)
```

## Convert

完成一些特殊的数据格式转换。

### ArrayToVector3Array()

-   类型：`Function`

-   参数类型：`[number,number,number][]`

-   详细：将一个二维数组转换为一个三维向量数组。

-   示例:

```javascript
const input = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
]
const output = ArrayToVector3Array(input)
```

### Vector3ToArray()

-   类型：`Function`

-   参数类型：`THREE.Vector3`

-   详细：将一个三维向量转换为数组。

-   示例:

```javascript
const input = new Vector3(0, 0, 0)
const output = Vector3ToArray(input) // [0,0,0]
```

### ArrayAdd()

-   类型：`Function`

-   参数类型：`Array, number`

-   详细：将一个数组每一个元素增加一个值。

-   示例:

```javascript
const input = [0, 0, 0]
const add = 1
const output = ArrayAdd(input, add) // [1,1,1]
```

### RadianToEulerAngles()

-   类型：`Function`

-   参数类型：`number`

-   详细：弧度转角度。

-   示例:

```javascript
const input = Math.Pi / 2
const output = RadianToEulerAngles(input) // 90
```

### AngleToRadian()

-   类型：`Function`

-   参数类型：`number`

-   详细：角度转弧度。

-   示例:

```javascript
const input = 90
const output = AngleToRadian(input) //  Math.Pi / 2
```

### RGBAToHexColor()

-   类型：`Function`

-   参数类型：`string`

-   详细：`rgba`颜色转`hex`。

-   示例:

```javascript
const input = rgba(255, 0, 0, 1)
const output = RGBAToHexColor(input) //  #FF0000
```

### DOMToString()

-   类型：`Function`

-   参数类型：`HTMLElement`

-   详细：`dom`转`string`。

-   示例:

```javascript
const input = document.createElement('div')
const output = DOMToString(input) //  <div></div>
```

### StringToDOM()

-   类型：`Function`

-   参数类型：`string`

-   详细：`string`转`dom`。

-   示例:

```javascript
const input = '<div></div>'
const output = StringToDOM(input) //  domElement
```

### StringToFunction()

-   类型：`Function`

-   参数类型：`string`

-   详细：`string`转`Function`。

-   示例:

```javascript
const input = 'function(){}'
const output = StringToFunction(input) //  Function
```

### StringToNumberArray()

-   类型：`Function`

-   参数类型：`string`

-   详细：`string`转`Array`。

-   示例:

```javascript
const input = '[0,0,0]'
const output = StringToFunction(input) //  [0,0,0]
```

### PxPositionToNumber()

-   类型：`Function`

-   参数类型：`string`

-   详细：`string`转`number`。

-   示例:

```javascript
const input = '6px'
const output = PxPositionToNumber(input) //  6
```

## Operate

### Vector3ToArray

-   类型：`Function`

-   参数类型：`Array, THREE.Vector3`

-   详细：输入目标数组和三维向量，将三维向量中内容传入数组。

-   示例:

```javascript
const inputArr = [0, 0, 0]
const inputVector3 = new Vector3(1, 1, 1)
const output = Vector3ToArray(inputArr, inputVector3) // inputArr = [1,1,1]
```

### EmptyArray()

-   类型：`Function`

-   参数类型：`Array`

-   详细：清空数组。

```javascript
const input = [0, 0, 0]
const output = EmptyArray(input) // inputArr = [1,1,1]
```

### SetArray()

-   类型：`Function`

-   参数类型：`Array，Array`

-   详细：将数据源数组内数据插入目标数组。

```javascript
const source = [0, 0, 0]
const target = [1, 1, 1]
const output = SetArray(target， source) // target = [0,0,0]
```

## Valid

### IsNumberArray3()

-   类型：`Function`

-   参数类型：`any`

-   详细：判断是否为纯数字长度为 3 的数组。

```javascript
const input = [0, 0, 0]
const output = IsNumberArray3(input) // true
```

### IsNumberArray2()

-   类型：`Function`

-   参数类型：`any`

-   详细：判断是否为纯数字长度为 2 的数组。

```javascript
const input = [0, 0]
const output = IsNumberArray2(input) // true
```

### IsNumberArray3Array()

-   类型：`Function`

-   参数类型：`any`

-   详细：判断是否为纯数字长度为 3 的二维数组。

```javascript
const input = [
    [0, 0, 0],
    [0, 0, 0],
]
const output = IsNumberArray3Array(input) // true
```

### IsNumber()

-   类型：`Function`

-   参数类型：`any`

-   详细：判断是否为纯数字。

```javascript
const input = 0
const output = IsNumber(input) // true
```

### IsNatrueNumber()

-   类型：`Function`

-   参数类型：`any`

-   详细：判断是否为自然数。

```javascript
const input = 0
const output = IsNatrueNumber(input) // true
```

### IsPositiveNumber()

-   类型：`Function`

-   参数类型：`any`

-   详细：判断是否为正数。

```javascript
const input = 1
const output = IsPositiveNumber(input) // true
```

### IsHexColorValid()

-   类型：`Function`

-   参数类型：`any`

-   详细：判断是否是 3 位或 6 位 hex 编码颜色。

```javascript
const input = '#FFF'
const output = IsHexColorValid(input) // true
```

### IsUndefined()

-   类型：`Function`

-   参数类型：`any`

-   详细：输入是否为`undefined`。

```javascript
const input = undefined
const output = IsUndefined(input) // true
```

### IsStringIndexedArray2()

-   类型：`Function`

-   参数类型：`any`

-   详细：判断输入是否为有序数组。

```javascript
const input = '[0, 1]'
const output = IsStringIndexedArray2(input) // true
```
