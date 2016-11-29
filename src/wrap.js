export let webviewOnResume = (original) => {
  let called = false
  let handlerStack = []
  return (handler) => {
    handlerStack.push(handler)
    if (called) return
    original(() => {
      handlerStack.forEach((handler) => {
        handler()
      })
    })
    called = true
  }
}

export let uploadToServer = (original) => {
  return (server, filePaths, config, cb) => {
    original(server, filePaths, cb, config)
  }
}
