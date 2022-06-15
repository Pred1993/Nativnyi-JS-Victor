// обработчик - handler, подписчик - subscriber, слушатель - listener -> function
// Handler будет вызван при наступлении события
// Handler будет вызван с аргументом ({})
// {} (сведения о произошедшем событии) -> event, ev, e, evt

const sm = document.getElementById("small")
const md = document.getElementById("medium")
const a = document.getElementById("a")

function onClickHandlerSm(e) {
    e.stopPropagation()
   alert('dad')
}
// sm.onclick = onClickHandler
// sm.onclick = null
function anchorHandler(e){
    e.preventDefault()
    alert('deth')
}

sm.addEventListener("click",onClickHandlerSm)
md.addEventListener("click",() => alert('adwaw'))
a.addEventListener("click",anchorHandler)


// sm.onclick= onClickHandler
// sm.onclick= null

