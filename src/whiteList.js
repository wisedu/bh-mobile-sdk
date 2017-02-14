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
    datePicker: true,
    dateTimePicker: true,
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
    togglePullRefresh: true,
    finishPullRefresh: true,
    startPullRefresh: true,
    togglePullUp: true,
    finishPullUp: true,
    webviewOnResume: true
  },
  systemAbility: {
    getPasteboard: true,
    setPasteboard: true,
    setIdleTimerDisabled: true,
    setBrightness: true,
    takeCamera: true,
    takePhoto: true,
    tel: true
  },
  file: {
    filePreview: true,
    uploadToServer: true,
  },
  wisedu: {
    uploadToEMAP: true
  },
  social: {
    share: true
  },
  http: {
    sendGetRequest: true
  },
  cpdaily: {
    clickHomeTab: true,
    checkPublishFresh: true,
    formatImageToBase64: true,
    getImagesInfo: true,
    getTenantID: true,
    getUserBasicInfos: true,
    getUserInfo: true,
    mainAppListChange: true,
    onMineAppChanged: true,
    onMainNavTabChanged: true,
    openApp: true,
    openCommentView: true,
    openFullWebView: true,
    openHomePage: true,
    openMarketList: true,
    openUsersPage: true,
    onPublishFreshListener: true,
    parseInfoFromHTML: true,
    postNotification: true,
    publishFresh: true,
    setStatusBarColor: true,
    showLoginView: true,
    showMain: true,
    showOrHideTabbar: true,
    showSettingView: true,
    showUserGuide: true,
    startIMChat: true,
    toggleFocus: true,
    toggleNavTransparent: true,
    uploadToOSS: true,
    zhugeioTrack: true
  }
}
