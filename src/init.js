let INIT = false

export default (callback) => {
  if (INIT) {
    console.error('请不要重复初始化')
    return
  }
  if (localStorage.getItem('wisedu-browser-debug')) {
    callback()
  } else {
    let distUrl = 'mamp://injectionmamp/cordova.js' // 远端文件地址

    var script = document.createElement("script")
    script.src = distUrl
    document.head.appendChild(script)

    window.close = function() {
      window.location.href = 'mamp://close';
    }

    document.addEventListener("deviceready", callback, false);
  }

  INIT = true
}
