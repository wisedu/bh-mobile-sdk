import SDK from './sdk'

let INIT = false

export default (callback) => {
  const _callback = () => {
    global.BH_MOBILE_SDK = SDK()
    callback()
  }
  if (INIT) {
    _callback()
    console.error('请不要重复初始化')
    return
  }
  if (localStorage.getItem('wisedu-browser-debug') || /wisedu/.test(navigator.userAgent) === false) {
    _callback()
  } else {
    let distUrl = 'mamp://injectionmamp/cordova.js' // 远端文件地址

    var script = document.createElement("script")
    script.src = distUrl
    document.head.appendChild(script)

    window.close = function() {
      window.location.href = 'mamp://close';
    }

    document.addEventListener("deviceready", _callback, false);
  }

  INIT = true
}
