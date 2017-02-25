import SDK from './sdk'

let INIT = false
let INJECT = false
let stack = []
const _callback = () => {
  INIT = true
  global.BH_MOBILE_SDK = SDK()
  stack.forEach((callback) => {
    callback()
  })
}
export default (callback, https) => {
  if (INIT) {
    callback()
  } else {
    stack.push(callback)
  }
  if (INJECT === false) {
    if (localStorage.getItem('wisedu-browser-debug') || /wisedu/.test(navigator.userAgent) === false) {
      setTimeout(() => {
        _callback()
      }, 0)
    } else {
      let distUrl = https ? 'https://injectionmamp/cordova.js' : 'mamp://injectionmamp/cordova.js' // 远端文件地址

      var script = document.createElement("script")
      script.src = distUrl
      document.head.appendChild(script)

      window.close = function() {
        window.location.href = 'mamp://close';
      }

      document.addEventListener("deviceready", _callback, false);
    }
    INJECT = true
  }
}
