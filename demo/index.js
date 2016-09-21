import SDK, {init} from 'src/index'

init(() => {
  let {UI:{setNavHeader}} = SDK()
  setTimeout(() => {
    console.log(setNavHeader)
  }, 1000)
})
