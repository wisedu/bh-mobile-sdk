import whiteList from './whiteList'
import ENV from './env'
import * as wrap from './wrap'

let SDK = null
export default () => {
  if (SDK) return SDK;
  let mamp  = window.mamp
  let sdk = {}
  Object.keys(whiteList).forEach((moduleName) => {
    let apis = whiteList[moduleName]
    let module = mamp[moduleName] || {}

    sdk[moduleName] = {}
    Object.keys(apis).forEach((apiKey) => {
      let api = apis[apiKey]
      let wrapHandler = wrap[apiKey]

      if (api) {
        if (!module[apiKey]) {
          sdk[moduleName][apiKey] = () => {
            if (ENV.wisedu) {
              console.error(`调用的${moduleName}.${apiKey}接口不存在`)
            } else {
              console.log(`你当前不在 Hybrid 环境, ${apiKey} 处于 mock 实现`)
            }

          }
        } else if (wrapHandler) {
          sdk[moduleName][apiKey] = wrapHandler(module[apiKey])
        } else if (module[apiKey]) {
          sdk[moduleName][apiKey] = module[apiKey]
        }
      }
    })
  })
  SDK = sdk
  return SDK
}
