/**
 * sdk 的控制白名单, 只有存在于白名单中的 api 能够被导出
 * 1. 控制能导出的 module
 * 2. 控制导出 module 里的内部 api
 */

export default {
  UI: {
    setNavHeader: true,
    setTitleText: true,
    preViewImages: true,
    openWebView: true,
    closeWebView: true,
    actionSheet: true,
    singleSelect: true,
    multiSelect: true,
    multiPicker: true,
    alertView: true,
    toggleNavBar: true,
    webviewOnResume: true,
    showToast: true
  },
  systemAbility: {
    takeCamera: true,
    takePhoto: true
  },
  file: {
    uploadToOSS: true
  },
  cpdaily: {
    showLoginView: true,
    showOrHideTabbar: true,
    showSettingView: true,
    mainAppListChange: true,
    openMarketList: true,
    showMain: true,
    getTenantID: true,
    setStatusBarColor: true,
    startIMChat: true,
    onMineAppChanged: true
  }
}
