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
      isSingle: '1',
      storeId: 'image'
    }
    BH_MOBILE_SDK.file.uploadToServer(server, files, config, (result) => {
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

        xhr.addEventListener("readystatechange", function () {
          if (this.readyState === 4 && xhr.status == 200) {
            try {
              resolve(JSON.parse(this.responseText))
            } catch (e) {
              reject(e)
            }
          } else {
            reject(xhr)
          }
        });

        xhr.open("POST", "http://amptest.wisedu.com/publicapp/sys/emapcomponent/file/saveAttachment.do");
        xhr.setRequestHeader("cache-control", "no-cache");
        xhr.setRequestHeader("postman-token", "c5696e9c-d1c1-1dd4-677f-42b591f8b678");

        xhr.send(data);
        resolve(result)
      }
    })
  })
}
