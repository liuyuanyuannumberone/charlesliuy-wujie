# Web Components

[创建可重用的定制元素](https://developer.mozilla.org/zh-CN/docs/Web/API/Web_components#%E6%A6%82%E5%BF%B5%E5%92%8C%E4%BD%BF%E7%94%A8)


## 基本概念

### Custom Element [自定义元素]

允许你定义custom elements以及行为,然后可以在你的用户界面中按照需要使用;

1. 自定义元素的类型

  - 自定义内置元素: 继承自标准HTML元素，例如 HTMLImageElement或HTMLParagraphElement;
  - 独立自定义元素: 继承自 HTML 元素基类 HTMLElement

2. 自定义元素生命周期回调

一旦你的自定义元素被注册,当页面中的代码以特定方式与你的自定义元素交互时,浏览器将调用你的类的某些方法;

connectedCallback(): 每当元素添加到文档中时调用。建议开发人员尽可能在此回调中实现自定义元素的设定，而不是在构造函数中实现;
disconnectedCallback()：每当元素从文档中移除时调用;
adoptedCallback()：每当元素被移动到新文档中时调用;
attributeChangedCallback()：在属性更改、添加、移除或替换时调用;

[例子](https://github.com/mdn/web-components-examples)


### Shadow DOM

用于将封装的"影子"DOM树附加到元素(与主文档DOM分开呈现)并控制其关联的功能,可以保持元素的功能私有,这样它们就可以被脚本化和样式化,而不用担心与文档的其他部分发生冲突;

**shadowRoot**

Shadow DOM API的ShadowRoot接口是一个DOM子树的根节点,它与文档的主DOM树分开渲染;
可以使用document.querySelector("#app").shadowRoot来检索,假设它是由Element.attachShadow()创建mode设置为open;
```js
const shadowRoot = this.attachShadow({ mode: "open" })
```
当设置为open时，页面中的js可以通过影子宿主的shadowRoot属性访问影子DOM的内部;

### HTML template [HTML模板]

<template> 和 <slot> 元素使你可以编写不在呈现页面中显示的标记模板,然后它们可以作为自定义元素结构的基础被多次重用;

- template:一种用于保存客户端内容机制,该内容在加载页面时不会呈现,被视为一个可存储在文档中方便后续使用的内容片段;
- slot: Web组件插槽元素,占位符;