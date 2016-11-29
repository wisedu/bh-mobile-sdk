/**
 * sdk 的控制白名单, 只有存在于白名单中的 api 能够被导出
 * 1. 控制能导出的 module
 * 2. 控制导出 module 里的内部 api
 */

export default {
  UI: {
    actionSheet: true,
    alertView: true,
    closeWebView: true,
    multiPicker: true,
    multiSelect: true,
    openWebView: true,
    preViewImages: true,
    setNavHeader: true,
    setTitleText: true,
    setNavBarBgColor: true,
    setStatusBarTintColor: true,
    singleSelect: true,
    showToast: true,
    toggleNavBar: true,
    webviewOnResume: true
  },
  systemAbility: {
    takeCamera: true,
    takePhoto: true
  },
  file: {
    uploadToServer: true,
  },
  wisedu: {
    uploadToEMAP: true
  },
  social: {
    share: true
  },
  cpdaily: {
    getTenantID: true,
    getUserBasicInfos: true,
    getUserInfo: true,
    mainAppListChange: true,
    onMineAppChanged: true,
    openApp: true,
    openHomePage: true,
    openMarketList: true,
    openUsersPage: true,
    setStatusBarColor: true,
    showLoginView: true,
    showMain: true,
    showOrHideTabbar: true,
    showSettingView: true,
    startIMChat: true,
    toggleFocus: true,
    uploadToOSS: true,
    zhugeioTrack: true
  }
}
