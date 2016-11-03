import SDK from './sdk'

let INIT = false

export default (callback) => {
  if (INIT) {
    console.error('请不要重复初始化')
    return
  }
  const _callback = () => {
    global.WISEDU_SDK = SDK()
    // try {
      callback()
    // } catch (e){
    //   console.error(e, 'SDK init 失败，请检查你传入init 函数的逻辑')
    // }
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
