export let uploadToEMAP = (server, files, config = {}) => {
  let token = config.token
  let scope
  if (token) {
    scope = token.substring(0, token.length - 1);
  } else {
    scope = new Date().getTime() + "" + parseInt(Math.random() * 100).toString()
    token = scope + 1
  }

  return new Promise((resolve, reject) => {
    if (!server) {
      reject('server 地址未指定')
    }
    if (files.length === 0) {
      reject('没有可供上传的文件')
    }
    config.params = {
      scope,
      fileToken: token,
      // isSingle: '1',
      storeId: 'image'
    }
    BH_MOBILE_SDK.file.uploadToServer(server + '/sys/emapcomponent/file/uploadTempFile.do', files, config, (result) => {
      let error = false
      result.forEach((fileResult) => {
        if (fileResult.code !== 200) {
          error = true
        } else {
          try {
            fileResult.response = JSON.parse(fileResult.response)
            if (!fileResult.response.success) {
              error = true
            }
          } catch (e) {
            error = true
          }
        }
      })
      if (error) {
        reject(result)
      } else {
        let data = new FormData();
        data.append("scope", scope);
        data.append("fileToken", token);
        data.append("attachmentParam", "{\"storeId\": \"image\"}");

        let xhr = new XMLHttpRequest();
        xhr.withCredentials = true;

        xhr.open("POST", server + "/sys/emapcomponent/file/saveAttachment.do");
        xhr.send(data);
        xhr.onload = function () {
          if (this.status >= 200 && this.status < 300) {
            try {
              let result = JSON.parse(this.responseText)
              if (result.success) {
                resolve({
                  success: true,
                  token
                })
              }
            } catch (e) {
              reject(e)
            }
          } else {
            reject(this.statusText);
          }
        };
        xhr.onerror = function () {
          reject(this.statusText);
        };
      }
    })
  })
}
export let getPasteboard = (cb) => {
  cb('')
}
export let sendGetRequest = (url, cb) => {
  cb({
    code: '404'
  })
}
export let openWebView = (url, config) => {
  window.open(url)
}
export let openFullWebView = (url, config) => {
  window.open(url)
}
export let closeWebView = (url, config) => {
  window.close()
}
export let webviewOnResume = (cb) => {
  if (document.addEventListener) {
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'visible') {
        cb()
      }
    })
  }
}
export let formatImageToBase64 = (img, cb) => {
  cb(img)
}
export let parseInfoFromHTML = (url, cb) => {
  cb({img: "http://www.baidu.com/img/bd_logo1.png", title: "百度一下，你就知道"})
}
export let openCommentView = (url, freshId) => {
  window.open(url)
}
export let scan = (callback, mock) => {
  callback(mock)
}

let pullRefresh = null
export let togglePullRefresh = (flag, callback) => {
  if (flag) {
    pullRefresh = callback
  } else {
    pullRefresh = null
  }
}
export let startPullRefresh = () => {
  pullRefresh && pullRefresh()
}

export let togglePullUp = (flag, callback) => {
  if (flag) {
    return callback
  } else {
    return null
  }
}

export let getTenantID = (callback, mock) => {
  callback(mock)
}
export let getUserInfo = (callback, mock) => {
  callback(mock)
}
export let getCircleList = (callback) => {
  callback([])
}
export let getTenantInfo = (callback, mock) => {
  callback(mock)
}
export let getConnectionType = (mock) => {
  return mock
}
export let registerNetworkChangeCallback = (callback, mock) => {
  if (mock) {
    setTimeout(() => {
      callback(mock)
    }, 10000)
  }
}
