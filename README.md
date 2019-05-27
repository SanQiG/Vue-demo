# 使用Vue开发的简易新闻资讯App

## 制作首页 APP 组件

1. 完成 Header 区域，使用的是 Mint-UI 中的 Header 组件

2. 制作底部的 Tabbar 区域，使用的是 MUI 的 Tabbar.html

  2.1 在制作购物车小图标的时候操作会相对多一些，先把扩展图标的 css 样式 `icons-extra.css` 拷贝到项目中，再拷贝扩展字体库 ttf 文件 `mui-icons-extra.ttf` 到项目中，最后为购物车小图标添加如下样式 `mui-icon mui-icon-extra mui-icon-extra-cart`

3. 要在中间区域放置一个 router-view 来展示路由匹配到的组件

## 改造 tabbar 为 router-link

## 设置路由高亮

## 点击 tabbar 中的路由链接，展示对应的路由组件

## 使用 Mint-UI 制作首页轮播图布局

## 加载首页轮播图数据

1. 使用 `axios` 获取数据

2. 使用 `axios` 的 `this.axios.get` 获取数据

3. 使用 `v-for` 循环渲染每个 item 项

## 改造六宫格区域的样式

## 改造新闻资讯路由链接

## 新闻资讯页面开发

1. 绘制界面，使用 MUI 中的 `media-list.html`

2. 使用 axios 获取数据

3. 渲染真实数据

## 实现新闻资讯列表，点击跳转到新闻详情

1. 把列表中的每一项改造为 router-link，同时，在跳转的时候应该提供唯一的 ID 标识符

2. 创建新闻详情的组件页面 NewsInfo.vue

3. 在路由模块中，将新闻详情的路由地址和组件页面对应起来

## 实现新闻详情的页面布局和数据渲染

## 单独封装一个 comment.vue 评论子组件

1. 先创建一个单独的 comment.vue 组件

2. 在需要使用 comment 组件的页面中，先手动导入 comment 组件: `import comment from './comment.vue'`

3. 在父组件中使用 `components` 属性，将刚才导入的 comment 组件，注册为自己的子组件

4. 将注册子组件时候的注册名称以标签形式在页面引用即可

## 获取所有的评论数据显示到页面中

## 实现点击加载更多评论的功能

1. 为加载更多按钮绑定点击事件，在事件中请求下一页数据

2. 点击加载更堵，让pageIndex自增，然后重新调用 getComments 方法重新获取最新一页的数据

3. 为了放置新数据覆盖旧数据的情况，我们在点击加载更多的时候，每当获取到新数据都应该让老数据调用数组的 concat 方法拼接上新数组

## 发表评论

1. 把文本框做双向数据绑定

2. 为发表按钮绑定一个事件

3. 校验评论内容是否为空，如果为空则 Toast 提示用户

4. 通过 axios 发送一个请求，把评论内容提交给服务器

5. 当发表评论ok后，重新刷新列表，以查看最新的评论

  - 如果调用 getComponents 方法重新刷新评论列表的话，根据当前 pageIndex 的值只能得到最后一页的评论，前几页的评论获取不到

  - 换一种思路：当评论成功后，在客户端手动拼接出一个最新的评论对象，然后调用数组的 unshift 方法，把最新的评论追加到 data 中的 comments 的开头。这样就能完美实现刷新评论列表的需求。

## 改造图片分享按钮为路由的链接并显示对应的组件页面

## 绘制图片列表组件页面结构并美化样式

1. 制作顶部的滑动条

2. 制作底部的图片列表

### 制作顶部滑动条遇到的问题

1. 需要借助于 MUI 中的 tab-top-webview-main.html

2. 需要把 slider 区域的 mui-fullscreen 类去掉

3. 滑动条无法正常触发滑动，通过检查官方文档发现这是一个 JS 文件，需要被初始化一下
  
  - 导入 mui.js

  - 调用官方提供的方式去初始化

  ```javascript
  mui('.mui-scroll-wrapper').scroll({
    deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
  });
  ```

4. 在初始化滑动条时导入了 mui.min.js 但是控制台报错 `Uncaught TypeError: 'caller', 'callee', and 'arguments' properties may not be accessed on strict mode functions or the arguments objects for calls to them`。经过推测，可能是 mui.min.js 中用到了上述内容，但是 webpack 打包好的 bundle.js 中默认是启用严格模式的，所以，这两者冲突了。

  - 解决方案：把 webpack 打包的严格模式禁用掉。在.babelrc 使用：
  
  ```json
  "ignore": [
    "./src/lib/mui/js/mui.js"
  ]
  ```

5. 刚进入图片分享页面的时候，滑动条无法正常工作。如果要初始化滑动条必须要等 DOM 元素加载完毕，所以要把初始化滑动条的代码移动到 mounted 生命周期函数中。

6. 当滑动条调试ok后，发现 tabbar 无法正常工作了，这时候我们需要把每个 tabbar 按钮的样式中的 `mui-tab-item` 重新改一下名字（内心os：这组件有点坑💔）。

7. 获取所有分类，并渲染分类列表

### 制作图片列表区域

1. 图片列表可以使用 Mint-ui 提供的懒加载 `Lazyload`

2. 根据 `Lazyload` 的使用文档，尝试使用

3. 渲染图片列表数据

### 实现了图片列表的懒加载和样式美化

## 实现点击图片跳转到图片详情页面

1. 在改造 li 为 router-link 的时候，需要使用 tag 属性指定要渲染为哪种元素

## 实现详情页面的布局和美化，同时获取数据渲染页面

## 实现图片详情中缩略图的功能

1. 使用插件 vue-preview 

2. 获取到所有的图片列表，然乎用 `v-for` 指令渲染数据

## 绘制商品列表页面基本结构并美化