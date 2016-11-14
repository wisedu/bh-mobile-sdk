# Wisedu Mobile JavaScript SDK

金智教育移动校园 JavaScript SDK

## 安装

```
npm install bh-mobile-sdk
```

## 使用

```javascript
import {init} from 'bh-mobile-sdk'

init(() => {
    console.log(WISEDU_SDK)
})
```

从 `bh-mobile-sdk` 中引入 `init` 方法，执行成功后，在全局变量里就会有 `BH_MOBILE_SDK`

## API

SDK 提供的 Api 是分模块的，先阶段一共有三大模块，`UI, systemAbility, file`

如果想调用某个 UI 模块下的的 api，`BH_MOBILE_SDK.UI.closeWebView`

### UI

**`actionSheet(title: String, actions: Array, callback: Function)`**

系统actionSheet弹框，在页面底部弹出，一般用于多个功能选择，例如对某张图片：分享，保存图片，点赞成等

#### Arguments

1. `title: String` 弹框标题
2. `actions: Array` 弹框操作按钮的标题数组
3. `callback(index): Function(Number)` 点击按钮后的回调方法 ，会返回点击的index
    * `index: Number` 传入的按钮数据的index下标列表，从0开始

```javascript
const COUNTRY = ['中国','日本','韩国']

BH_MOBILE_SDK.UI.actionSheet('请选择', COUNTRY, (index) => {
    console.log('选择国家: ' + COUNTRY[index]);
})
```

---

**`alertView(title: String, content: String, btnTitles: Array, callback: Function)`**

系统alertView弹框，在页面正中间弹出

#### Arguments

1. `title: String` 弹框标题
2. `content: String` 弹框标题
3. `btnTitles: Array` 弹框操作按钮的标题数组
4. `callback(index): Function(Number)` 点击按钮后的回调方法 ，会返回点击的index
    * `index: Number` 传入的按钮数据的index下标列表，从0开始

```javascript
const BTNS = ['确定','取消']
BH_MOBILE_SDK.UI.alertView('提示', '这个一个alertview', BTNS, (index) => {
    console.log('点击了按钮' + BTNS[index]);
});
```

---

**`closeWebView`**

关闭当前webview

```javascript
BH_MOBILE_SDK.UI.closeWebView()
```

---

**`multiPicker`**

---

**`setNavHeader(flag: Boolean)`**

设置客户端原生头是否隐藏, 默认是显示的，传入 false 隐藏原生头

#### Arguments

1. `flag: Boolean` 控制头部是否显示，true: 显示, flase: 隐藏

```javascript
BH_MOBILE_SDK.UI.setNavHeader(false)
```

---

**`setTitleText(title: String)`**

设置原生头的 title

#### Arguments

1. `title: String` 头部的 title

```javascript
BH_MOBILE_SDK.UI.setTitleText('我是 title')
```

---

### social

**`share(config: Object)`**

分享内容

#### Arguments

1. `config: Object`: 分享的配置文件，title 控制分享的标题，linkUrl 控制分享的连接

分享内容

```javascript
BH_MOBILE_SDK.social.share({
    title: '分享的 title',
    linkUrl: 'http://www.baidu.com' // 分享的链接
})
```
