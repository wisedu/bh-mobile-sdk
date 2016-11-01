import whiteList from './whiteList'
import * as wrap from './wrap'

let SDK = null
export default () => {
  if (SDK) return SDK;
  let mamp  = window.mamp
  let sdk = {}
  Object.keys(whiteList).forEach((moduleName) => {
    let apis = whiteList[moduleName]
    let module = mamp[moduleName]

    if (module) {
      sdk[moduleName] = {}
      Object.keys(apis).forEach((apiKey) => {
        let api = apis[apiKey]
        let wrapHandler = wrap[apiKey]

        if (api) {
          if (wrapHandler) {
            sdk[moduleName][apiKey] = wrapHandler(module[apiKey])
          } else {
            sdk[moduleName][apiKey] = module[apiKey]
          }
        }
      })
    }
  })
  SDK = sdk
  return SDK
}
