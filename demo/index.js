import SDK, {init} from 'src/index'

init(() => {
  let {
    UI:{
      setNavHeader,
      preViewImages,
      openWebView,
      webviewOnResume
    },
    systemAbility: {
      takeCamera,
      takePhoto
    }
  } = SDK()

  document.getElementById('setNavHeader').addEventListener('click', () => {
    var config = {
      left:{
        left1:
        {
          title:'返回',
          callFunction:function(){
            alert('点击了返回');
            mamp.UI.closeWebView();
          }
        },
        left2:
        {
          title:'关闭',
          callFunction:function(){
            alert('点击了关闭');
          }
        }
      },
      title:'标题1',
      right:[{
        title:'按钮1',
        callFunction:function(){
          alert('点击了按钮1');
        }
      },
        {
          title:'按钮2',
          callFunction:function(){
            alert('点击了按钮2');
          }
        }]
    };
    setNavHeader(config);
  })
  document.getElementById('preViewImages').addEventListener('click', () => {
    preViewImages([
      {url:'http://pic41.nipic.com/20140509/18696269_121755386187_2.png',desc:'描述描述描述描述'},
      {url:'http://pic10.nipic.com/20101001/4438138_140843092127_2.jpg',desc:'描述描述描述描述'}],
      1
    )
  })
  document.getElementById('takeCamera').addEventListener('click', () => {
    takeCamera((ret) => {
      console.log(ret)
    })
  })
  document.getElementById('takePhoto').addEventListener('click', () => {
    takePhoto((ret) => {
      console.log(ret)
    }, 3)
  })
  document.getElementById('openWebview').addEventListener('click', () => {
    openWebView('http://www.baidu.com')
  })
  document.getElementById('uploadToServer').addEventListener('click', () => {
    BH_MOBILE_SDK.systemAbility.takePhoto((ret) => {
      BH_MOBILE_SDK.wisedu.uploadToEMAP(
        'http://amptest.wisedu.com/publicapp/sys/emapcomponent/file/uploadTempFile.do',
        ret.map((file) => {
          return file.url
        })
      ).then((result) => {
        console.log(result)
      }).catch((error) => {
        console.error(error)
      })
    })
  })
  webviewOnResume(() => {
    console.log('aaaa')
  })
  webviewOnResume(() => {
    console.log('bbbbb')
  })
})
