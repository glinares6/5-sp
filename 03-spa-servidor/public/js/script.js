let ws = null , theChart= null
const dataChart=[5,15,12]

const setSystemMessage = data => {
    systemMessage.textContent = data
}

const login = async ()=>{

    const user = {
        name: usrName.value,
        password: password.value
    }
    const header = new Headers()
    header.append('Content-type', 'application/json')
    const options = {
        method: 'POST',
        headers: header,
        body: JSON.stringify(user)
    }


    let data = {}
    const response = await fetch('/login',options)
    switch (response.status) {
        case 200:
            // console.log(options);
            data = await response.json()
            connectWS(data)
            loadChart()
            // console.log(data);
            // procesar el json de respuesta
            setSystemMessage('conectado correctamente')
            break;
        case  401:
            setSystemMessage('Usuario o contraseña no valido')
            break;
        default:
            setSystemMessage('estado no esperado' +response.status)
            break;
    }
}
btnLogin.addEventListener('click', e => {
    e.preventDefault()
    login()
})

const connectWS= data =>{
    ws= new WebSocket(`ws://localhost:9999/ws?uname=${usrName.value}&token=${data.token}`)
    ws.onopen = e =>{
        setSystemMessage('conextado al web sockets  correctamente')

        }
        ws.onerror = e => {
            setSystemMessage(e)
        }
        ws.onmessage = e =>{
            console.log(e.data)

            const data = JSON.parse(e.data)
          switch (data.type) {
              case 'message':
                  content.insertAdjacentHTML('beforeend', `<div>De: ${data.data_response.name}, Mensaje: ${data.data_response.message}</div>`)
                  break;
                case 'sale':
                dataChart[data.data_sale.product] +=data.data_sale.quantity
                theChart.update()
                break;
                case 'pong':
                console.log('sigo vivo');
                break;
              default:
                  break;
          }
        }
        setInterval(()=>{
            ws.send(JSON.stringify({type:'ping'}))
        },60000)
}
    btnSendMessage.addEventListener('click', e =>{
        // validar que el mensaje no este vacio
        e.preventDefault()
        const data = {
            type : 'message',
            message : txtmsg.value
        }
    //  ws.send(JSON.stringify(data))

    //  llalmado al id del  HTML(CLASICO)
    //  document.getElementById("txtmsg").value = "";

    if(txtmsg.value.trim() ){
        ws.send(JSON.stringify(data)) 
        txtmsg.value=""
    }else{
        console.log('no se envio valor');
    }
     
    })  

    btnSale.addEventListener('click',e =>{
        e.preventDefault()
        // todo validar que la cantidad sea mayor que cero
        const data = {
            type : 'sale',
            product : parseInt(product.value,10),
            quantity : parseInt(quantity.value,10)
        }
        ws.send(JSON.stringify(data))
    })
    
    const  loadChart = ()=>{
const ctx = myChart.getContext('2d');
        myChart.width=400
        myChart.height=400

    theChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Zapatos', 'Camisas', 'Billeteras'],
        datasets: [{
            label: 'Sale',
            data: dataChart,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

    }




// let ws = null, theChart = null
// const dataChart = [5, 15, 12]

// const setSystemMessage = data => {
//     systemMessage.textContent = data
// }

// const login = async () => {
//     const user = {
//         name: usrName.value,
//         password: password.value
//     }
//     const header = new Headers()
//     header.append('Content-type', 'application/json')
//     const options = {
//         method: 'POST',
//         headers: header,
//         body: JSON.stringify(user)
//     }

//     let data = {}
//     const response = await fetch('/login', options)
//     switch (response.status) {
//         case 200:
//             data = await response.json()
//             // connectWS(data)
//             // loadChart()
//             console.log(data);
//            setSystemMessage('conextado correctamente');
//             break
//         case 401:
//             setSystemMessage('Usuario o contraseña no valido')
//             break
//         default:
//             setSystemMessage('Estado no esperado: ' + response.status)
//     }
// }

// btnLogin.addEventListener('click', e => {
//     e.preventDefault()
//     login()
// })

