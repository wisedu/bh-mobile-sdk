import whiteList from './whiteList'

export default () => {
  let mamp  = window.mamp
  let sdk = {}
  Object.keys(whiteList).forEach((moduleName) => {
    let apis = whiteList[moduleName]
    let module = mamp[moduleName]

    if (module) {
      sdk[moduleName] = {}
      Object.keys(apis).forEach((apiKey) => {
        let api = apis[apiKey]

        if (api) {
          sdk[moduleName][apiKey] = module[apiKey]
        }
      })
    }
  })
  return sdk
}
