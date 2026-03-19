JS方法

## 一、数组方法

| 方法         | 作用                           | 示例                                           |
| ------------ | ------------------------------ | ---------------------------------------------- |
| `filter()`   | 根据条件过滤数组，返回新数组   | `[1,2,3].filter(n => n > 1)` → `[2,3]`         |
| `map()`      | 对每个元素执行操作，返回新数组 | `[1,2,3].map(n => n * 2)` → `[2,4,6]`          |
| `forEach()`  | 遍历数组，执行操作（无返回值） | `arr.forEach(item => console.log(item))`       |
| `reduce()`   | 累积计算，返回单个值           | `[1,2,3].reduce((sum, n) => sum + n, 0)` → `6` |
| `find()`     | 返回第一个满足条件的元素       | `[1,2,3].find(n => n > 1)` → `2`               |
| `some()`     | 检查是否有元素满足条件         | `[1,2,3].some(n => n > 5)` → `false`           |
| `every()`    | 检查是否所有元素满足条件       | `[1,2,3].every(n => n > 0)` → `true`           |
| `includes()` | 判断数组是否包含某个值         | `[1,2,3].includes(2)` → `true`                 |
| `sort()`     | 排序（默认按字符串排序）       | `[3,1,2].sort()` → `[1,2,3]`                   |
| `slice()`    | 返回数组片段（不修改原数组）   | `[1,2,3].slice(1,2)` → `[2]`                   |
| `splice()`   | 添加/删除元素（修改原数组）    | `[1,2,3].splice(1,1,4)` → 原数组变为 `[1,4,3]` |

---

## 二、对象方法

| 方法                                | 作用                 | 示例                                            |
| ----------------------------------- | -------------------- | ----------------------------------------------- |
| `Object.keys(obj)`                  | 返回对象所有键的数组 | `Object.keys({a:1,b:2})` → `['a','b']`          |
| `Object.values(obj)`                | 返回对象所有值的数组 | `Object.values({a:1,b:2})` → `[1,2]`            |
| `Object.entries(obj)`               | 返回键值对数组       | `Object.entries({a:1})` → `[['a',1]]`           |
| `Object.assign(target, ...sources)` | 合并对象             | `Object.assign({}, {a:1}, {b:2})` → `{a:1,b:2}` |

---

## 三、字符串方法

| 方法                              | 作用                 | 示例                                     |
| --------------------------------- | -------------------- | ---------------------------------------- |
| `includes(str)`                   | 判断是否包含子串     | `'hello'.includes('ell')` → `true`       |
| `startsWith(str)`                 | 判断是否以某子串开头 | `'hello'.startsWith('he')` → `true`      |
| `endsWith(str)`                   | 判断是否以某子串结尾 | `'hello'.endsWith('lo')` → `true`        |
| `split(sep)`                      | 按分隔符拆分成数组   | `'a,b,c'.split(',')` → `['a','b','c']`   |
| `join(sep)`                       | 数组元素拼接成字符串 | `['a','b'].join('-')` → `'a-b'`          |
| `replace(search, replacement)`    | 替换子串             | `'hello'.replace('ll','rr')` → `'herro'` |
| `trim()`                          | 去除两端空白         | `'  hi  '.trim()` → `'hi'`               |
| `toUpperCase()` / `toLowerCase()` | 大小写转换           | `'Hi'.toUpperCase()` → `'HI'`            |
| `substring(start, end)`           | 截取子串             | `'hello'.substring(1,3)` → `'el'`        |

---

## 四、数学函数（`Math` 对象）

| 方法                  | 作用              | 示例                       |
| --------------------- | ----------------- | -------------------------- |
| `Math.random()`       | 生成 [0,1) 随机数 | `Math.random()` → 0.234... |
| `Math.floor(x)`       | 向下取整          | `Math.floor(3.9)` → `3`    |
| `Math.ceil(x)`        | 向上取整          | `Math.ceil(3.1)` → `4`     |
| `Math.round(x)`       | 四舍五入          | `Math.round(3.5)` → `4`    |
| `Math.max(...nums)`   | 最大值            | `Math.max(1,5,2)` → `5`    |
| `Math.min(...nums)`   | 最小值            | `Math.min(1,5,2)` → `1`    |
| `Math.pow(base, exp)` | 幂运算            | `Math.pow(2,3)` → `8`      |
| `Math.sqrt(x)`        | 平方根            | `Math.sqrt(9)` → `3`       |

---

## 五、日期方法（`Date` 对象）

| 方法                                           | 作用                      | 示例                 |
| ---------------------------------------------- | ------------------------- | -------------------- |
| `new Date()`                                   | 创建当前日期对象          | `new Date()`         |
| `getFullYear()`                                | 获取年份                  | `date.getFullYear()` |
| `getMonth()`                                   | 获取月份（0-11）          | `date.getMonth()`    |
| `getDate()`                                    | 获取日期（1-31）          | `date.getDate()`     |
| `getDay()`                                     | 获取星期几（0-6，0=周日） | `date.getDay()`      |
| `getHours()` / `getMinutes()` / `getSeconds()` | 获取时分秒                | `date.getHours()`    |
| `toISOString()`                                | 转为 ISO 格式字符串       | `date.toISOString()` |

---

## 六、DOM 操作（`document` 对象）

| 方法/属性                                                  | 作用                              | 示例                                        |
| ---------------------------------------------------------- | --------------------------------- | ------------------------------------------- |
| `document.getElementById(id)`                              | 通过 ID 获取元素                  | `document.getElementById('app')`            |
| `document.querySelector(selector)`                         | 通过 CSS 选择器获取第一个元素     | `document.querySelector('.my-class')`       |
| `document.querySelectorAll(selector)`                      | 获取所有匹配元素（返回 NodeList） | `document.querySelectorAll('li')`           |
| `document.createElement(tag)`                              | 创建新元素                        | `const div = document.createElement('div')` |
| `parent.appendChild(child)`                                | 添加子元素                        | `container.appendChild(div)`                |
| `parent.removeChild(child)`                                | 移除子元素                        | `container.removeChild(div)`                |
| `element.classList.add/remove/toggle(className)`           | 操作 CSS 类                       | `el.classList.add('active')`                |
| `element.addEventListener(event, handler)`                 | 添加事件监听                      | `btn.addEventListener('click', fn)`         |
| `element.innerHTML`                                        | 获取/设置元素的 HTML 内容         | `el.innerHTML = '<span>hi</span>'`          |
| `element.textContent`                                      | 获取/设置纯文本内容               | `el.textContent = 'hello'`                  |
| `element.style.property`                                   | 修改内联样式                      | `el.style.color = 'red'`                    |
| `element.getAttribute(name)` / `setAttribute(name, value)` | 操作属性                          | `el.setAttribute('data-id', '123')`         |

---

## 七、其他常用函数

| 函数                        | 作用                     | 示例                                           |
| --------------------------- | ------------------------ | ---------------------------------------------- |
| `setTimeout(fn, delay)`     | 延迟执行一次             | `setTimeout(() => alert('hi'), 1000)`          |
| `setInterval(fn, interval)` | 定时重复执行             | `setInterval(() => console.log('tick'), 1000)` |
| `fetch(url)`                | 发起网络请求             | `fetch('/api/data').then(res => res.json())`   |
| `JSON.stringify(obj)`       | 将对象转为 JSON 字符串   | `JSON.stringify({a:1})` → `'{"a":1}'`          |
| `JSON.parse(str)`           | 将 JSON 字符串解析为对象 | `JSON.parse('{"a":1}')` → `{a:1}`              |
| `console.log(...)`          | 打印日志                 | `console.log('hello')`                         |
| `alert(msg)`                | 弹出警告框               | `alert('错误')`                                |
| `confirm(msg)`              | 确认对话框               | `if (confirm('确定删除？')) { ... }`           |
| `prompt(msg)`               | 输入对话框               | `let name = prompt('请输入姓名')`              |
