# HTML属性crossorigin

<audio><video><img><link><script>元素使用,定义元素如何处理跨源请求,从而实现对该元素获取数据的CORS请求配置;

## 背景

在做前端开发的时候，经常会需要通过CDN的方式引入一些第三方库

```js
<script src="https://cdn.jsdelivr.net/npm/vue@3.5.13/dist/vue.global.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/vue/3.5.13/vue.cjs.js"
        integrity="sha512-TCY5bur+yuaqM2miOJr6d0QPjYItW9jNZn/WxticGUJRQPVGfXsO7YKsPB7ZB5KhtTtetnTiWKJyqfHtDrInlw=="
        crossorigin="anonymous"   referrerpolicy="no-referrer"> </script>
```

## integrity

<script/><link>元素浏览器对获取的资源进行检查,提供一个hash用来检验加载的JS文件或者CSS问卷是否完整,避免托管在CDN的资源被篡改而引入的XSS风险;


## crossorigin

指定如何处理跨域资源的请求和响应;
控制如何处理跨域请求的凭据（如 cookies、HTTP 认证信息等）以及跨域资源的共享策略;

1. anonymous(默认值)

- 不发送跨域请求的凭据（如cookies/HTTP认证信息）这意味着如果远程服务器要求认证信息或cookies它们不会被发送;
- 如果脚本请求的资源允许跨域访问,则浏览器会加载该资源否则会出现错误;


2. use-credentials

发送跨域请求的凭据（如cookies/HTTP认证信息）,只有当目标服务器也允许凭据访问时才能成功加载资源;

3. ""

如果没有设置crossorigin属性，则默认行为是类似于anonymous，即不发送任何凭据。服务器必须在响应中正确设置CORS头部，允许跨域访问;


## 生成文件hash值(integrity)

[获取文件的哈希值](https://www.srihash.org/)