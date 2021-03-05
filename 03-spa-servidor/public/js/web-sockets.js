
let ws = null

const setText = data => {
    const msg = `<div>${data}</div>`
    chat.insertAdjacentHTML('beforeend',msg)
}
const setMessage = data => {
    const   msg= `<div><span>${data.name}</span>: <span>${data.message}</span></div>`
    chat.insertAdjacentHTML('beforeend',msg)
}
btnConnect.addEventListener('click', e =>{
    ws = new WebSocket('ws://html5rocks.websocket.org/echo')
    ws.onopen = () => setText('conectado')
    ws.onclose = () => setText('desconectado')
    ws.onerror = e => setText(e)
    ws.onmessage = e => {
        const msg = JSON.parse(e.data)
        setMessage(msg)
        
    }
})
 
btnDisconnect.addEventListener('click',e =>{
    ws.close()
})

btnSend.addEventListener('click', e =>{
    const msg ={
        name : txtName.value,
        message : txtMsg.value
    }
    // console.log(JSON.stringify(msg));
    ws.send(JSON.stringify(msg))
    // ws.send(txtMsg.value)
})