import {init, MAMP} from 'src/index'

let {UI} = MAMP

alert(UI)

init(() => {
  setTimeout(() => {
    let {UI} = MAMP
    console.log(UI.setNavHeader)
  }, 3000)
})
