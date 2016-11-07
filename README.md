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

**setNavHeader(flag: Boolean)**

设置客户端原生头是否隐藏, 默认是显示的，传入 false 隐藏原生头

```javascript
BH_MOBILE_SDK.UI.setNavHeader(false)
```

**setTitleText(title: String)**

设置原生头的 title

```javascript
BH_MOBILE_SDK.UI.setTitleText('我是 title')
```


