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

从 `bh-mobile-sdk` 中引入 `init` 方法，执行成功后，在全局变量里就会有 `WISEDU_SDK`

