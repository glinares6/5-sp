
// se modifico el endpoint de apiRegistro/apiLogin
const apiURL = 'http://localhost:9999/api'
const apiRegister = apiURL + '/v1/registro'
const apiLogin = apiURL + '/v1/login'



const prepareRegister = async user =>{
    const data=await  executeService(apiRegister,'POST',user)
    return data;
    // register(user)
}

// const register = async user => { 
//     const header = new Headers()
//     header.append('Content-Type', 'application/json')

//     const myInit ={ 
//         method : 'POST',
//         headers : header,
//         body : JSON.stringify(user)
//     }
  
//     const resp = await fetch(apiRegister, myInit)
//     const json = await resp.json()
//     console.log(json);
// } 

const prepareLogin = async user =>{
    
    const data=await  executeService(apiLogin,'POST',user)
  if (data.type === 'ok'){
      localStorage.setItem('token', data.data)
        console.log('token guardado')
        console.log(data)
        return data
    }



    console.log(data);
//   login(user)
}

// const login = async user => {
//     const header = new Headers()
//     header.append('Content-Type', 'application/json')
    
//     const myInit ={ 
//         method : 'POST',
//         headers : header,
//         body : JSON.stringify(user)
//     }
    
//     const resp = await fetch(apiLogin, myInit)
//     const json = await resp.json()
//     console.log(json);
    
// }

// refactorizando codigo de registro y login

const executeService = async  (uri,met ,user) =>{
    const header = new Headers()
    header.append('Content-Type', 'application/json')
    
    const myInit ={ 
        method : met,
        headers : header,
        body : JSON.stringify(user)
    }

    const resp = await fetch(uri, myInit)
    const json = await resp.json()
    return json
}
// prepareRegister()

// prepareLogin()
// cambiar el nombre de la funcion por algo como prpcessMessage 
const mensajeImpreso = data => {
    const now = new Date()
    const element = document.getElementById('messages-container')
    // inicio del for 
    let cad =["conectado","desconectado"]

//    var inc=1;

// window.addEventListener('load',e=>{
    
         
//     x++;
//     console.log(x);    

// })


// let x=1;

let arreg = [1,2,3,4,5,6,7,8,9,10]
let conca = [1,2,3,4,5,6,7,8,9,10,11]

switch(data.type){
    case "connect":
        
//         messageformsubmit.addEventListener('click',e=>{   
//     x++;
//     console.log(x); 
// }) 



// for (i =0; i <arreg.length; i++) { 
// }
   
    // if (i>5 && i<2 ) { break } 
    //     console.log("Contador: " + i);
        // if(i>4 ) { continue}
        // console.log("este es el inpostor");
 
    const person= [
        `
        <div class="user" id="conectado1" >
        <span class="user--name" >${data.from}</span>
        <span class="user--status">En linea</span>
        </div>
        `,   
        `
        <div class="user"   id="conectado2" >
        <span class="user--name" >${data.from}</span>
        <span class="user--status">En linea</span>
        </div>
        `   
    ]
    if(usersConnected){
        const conectado1=document.getElementById('conectado1')
        if(conectado1){
            usersConnected.insertAdjacentHTML('beforeend',person[1])
            
            
        }else{
            usersConnected.insertAdjacentHTML('beforeend',person[0])
            
        }
        //   const desconectado = document.getElementById('desconectado')
        //   if(desconectado){
        //     usersConnected.insertAdjacentHTML('beforeend',person[1])
        //     console.log('bloque 1');

        //   }

          
        }
        


   
        
       
    




        

// const element = cad[i];
    // console.log(element);

    // diss.parentNode.replaceChild(conn,diss)
    // usersConnected.insertAdjacentHTML('beforeend',person)

    // usersConnected.innerHTML =usersConnected.innerHTML+person
    
    
    break
case "message":
    
                // const now = new Date()
                const contenidoMensaje = `
            <div class="message">
            <div class="message--avatar">
            <img src="https://www.gravatar.com/avatar/00000000000000000000000000000000?d=retro&f=y" alt="">
            </div>
            <div class="message-info">
            <div class="message-user">
            <span class="message--user_name">${data.name}</span>
            <div class="message--user_time">${now.getHours()}:${now.getMinutes()}</div>
            </div>
            <div class="message-content">${data.message}</div>
            </div>
            </div>
            `
               

    //    const element = document.getElementById('messages-container')
        // element.innerHTML =element.innerHTML + contenido

        element.insertAdjacentHTML('beforeend',contenidoMensaje) 

        break
            case "disconnect":
   
               

                // let tenar = Object.assign(arreg,conca)
                // console.log(conca);
                
              
        // const elemment = document.getElementById('messages-container')
        
        // element.insertAdjacentHTML('beforeend',contenidoMensaje)
        // no es que no me hacia el loco por querer practicar sino que 
        // me ayudaba a escribir para cosas en general 
        
        
  
        //     const modificar=  `
            //     <div class="user" id="repito" >
            //        <span class="user--name">${data.from}</span>
            //        <span class="user--status">En linea</span>
            //    </div>
            //     `



        //    const desconectado = document.getElementById('desconectado')
          
            
        
        // const usersConnected= document.getElementById('usersConnected')
        
        
        
     
        const disconnect=
        `
        <div class="user" id="desconectado">
        <span class="user--name">${data.from}</span>
        <span class="user--status">Desconectado</span>
        </div>
        `    
      
        
        if(usersConnected){
            usersConnected.insertAdjacentHTML('beforeend',disconnect) 
                        // const desconectado=document.getElementById('desconectado');
                        // if(desconectado){
                        //     usersConnected.insertAdjacentHTML('beforeend',disconnect[1])
                        //     console.log('bloque 2');
                        // }
                        const conectado2= document.getElementById('conectado2')
                        if(conectado2) document.getElementById('usersConnected').removeChild(document.getElementById('conectado2'))
                    }

            
            // const disconnect=  `
            // <div class="user"id="${cad[1]}" >
            // <span class="user--name">${data.from}</span>
            //     <span class="user--status">Desconectado</span>
            //     </div>
            //     `
                
                //  document.getElementById('usersConnected').insertAdjacentHTML('beforeend',disconnect)
                //  document.getElementById('usersConnected').replaceChild(document.getElementById('diss').insertAdjacentHTML('beforeend',disconnect),document.getElementById('conn'))
                //   document.getElementById('usersConnected').removeChild(document.getElementById('conn'))
                
                
                // usersConnected.innerHTML =usersConnected.innerHTML.replace() +  disconnect
        
             

                // document.getElementById('usersConnected').removeChild(document.getElementById('0'))
                // if(usersConnected) usersConnected.insertAdjacentHTML('beforeend',disconnect)

                
                break
                case "giphy":
                    // const now = new Date()
                    const contenidoGiphy = `
                    <div class="message">
                    <div class="message--avatar">
                    <img src="https://www.gravatar.com/avatar/00000000000000000000000000000000?d=retro&f=y" alt="">
                    </div>
                    <div class="message-info">
                    <div class="message-user">
                    <span class="message--user_name">${data.name}</span>
                    <div class="message--user_time">${now.getHours()}:${now.getMinutes()}</div>
                    </div>
                    <div class="message-content">
                    <img src="${data.message}" alt="este es un gif">
                    </div>
                    </div>
                    </div>
                        `
                           
            
                        //    const element = document.getElementById('messages-container')
                        // element.innerHTML =element.innerHTML + contenido
                    element.insertAdjacentHTML('beforeend',contenidoGiphy) 
                    
                        break
                        
           
                        default:
                            console.log("no se recibio ningun tipo valido");
                            
                        }
                        
                        // fin del for
                        
                        

                        
                    }
                    
                    // setTimeout(()=>{
                        //     mensajeImpreso({
                            //        data: "Loren ipsu adsfasdfas  sadfads   ssa ",
                            //         from: 'Beto Quiroga'
                            //     })
                            // },3000)
                            
// CODIGO NECESARO PARA HACER WEBSOCKETS

// se modifico la variable de clase que recibe al usuario(nick=>uName)



// const  user1=  localStorage.getItem('user')
// // const  token1= '8e47f8c9-858e-4c9b-8bc6-9b2aa4bff448'
// const token1 = localStorage.getItem('token')
// const wsURL = `ws://localhost:9999/ws?uname=${user1}&token=${token1}`

// const ws= new WebSocket(wsURL);
// ws.onopen = () => { console.log("Se ha establecido conexión con el websocket") }
// ws.onerror = error => { console.log(error) }
// ws.onmessage = message =>{ console.log(message.data);
//     mensajeImpreso(JSON.parse(message.data))
// }


const eventForm1Original=()=> {    
const form2 = document.getElementById('messageformsubmit')

if(form2){
    form2.addEventListener('click', e=>{

        e.preventDefault()
        
        let mensajeParaEnviar={
           type: 'message',
           message: messagetext.value
        }
        //    el websockets espera un string por eso se parsea el json a string
        ws.send(JSON.stringify(mensajeParaEnviar))
        messagetext.value= ""
        })
        
}

}


const eventFormRegister = () =>{
    const formRegister = document.getElementById('form-registro')
if(formRegister){
    formRegister.addEventListener('submit',e =>{
        e.preventDefault()
        let user ={
            nick_name:e.target.userName.value,
            password:e.target.userPass.value
        }
        prepareRegister(user)
            .then(data => {
                console.log(data);
                formRegister.innerHTML = `
                <p>usted ha sido registrado exitosamente  ahora puede iniciar sesión</p>
                <a href="#" id="linkLogin">Iniciar  Sesión</a>
                `
                linkLogin.addEventListener('click',e=>{
                    e.preventDefault()
                    Router.navigate('/login')
                })
        }) 
    })
}
} 
const eventFormLogin = () =>{
    const formLogin= document.getElementById('form-login')
    if(formLogin){
 
        formLogin.addEventListener('submit',e =>{
            e.preventDefault()
            let user ={
                nick_name: e.target.userName.value,
                password: e.target.userPass.value
            }
            prepareLogin(user)
                .then(data => {
                    if(data.type == 'ok'){
                        Router.navigate('/chat')
        localStorage.setItem('user',e.target.userName.value)
                    }
                }).catch(e=>{
                    console.log(e);
                })
        })
    }

}
const eventForm1 = () => {
    const form1 = document.getElementById('message-form')
    if (form1) {
        form1.addEventListener('submit', async e => {
            e.preventDefault()
            let mensajeParaEnviar = {}
            let mensajeEscrito = e.target.messageText.value
            if (mensajeEscrito.startsWith('/giphy')) {
                const q = encodeURI(mensajeEscrito.substring(7))
                // el codigo copiado para refactorizar
                const headers = new Headers()
                headers.append('Content-Type', 'application/json')
                const myInit = {
                    method: 'GET', 
                    headers: headers,  
                    mode: 'cors', 
                    cache: 'default'
                }
                // const apiKey = 'mto0q23ZXsGlZDFANOaT1yeVDeR2mmwX'
                const apiKey = 'skLTrieJYCrTrGSeUExZ3fVnL5bPTFLE'
                const uri = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${q}&limit=1`
                const res = await fetch(uri, myInit)
                const data = await res.json()
                console.log(data);
                // console.log(data)
                mensajeParaEnviar.type = 'giphy'
                mensajeParaEnviar.message= data.data[0].images.fixed_height.url
            } else {
                mensajeParaEnviar.type = 'message'
                mensajeParaEnviar.message = mensajeEscrito
            }

            console.log(JSON.stringify(mensajeParaEnviar))
            ws.send(JSON.stringify(mensajeParaEnviar))
            e.target.messageText.value = ""

           
   
        
        
            
         
        })
    }
}


// btnSend.addEventListener('click',async()=>{
//     const q=encodeURI(searchGif.value)

//     const headers=  new Headers()
//     headers.append('Content-Type','application')
//     const myInit = {method: 'GET',
//                      headers : headers,
//                       mode: 'cors',
//                        cache: 'default'
//                      }

//     const apiKey='dsdfafd'
//     const uri=''
//     const res=await fetch(`https://api.giphy.com/v1/gifs/search?api_jey=${apiKey}&q=${q}&limit=1`) 
//     const data=await res.json()
//     draWGif(data.data[0].images.fixed_height.url)

// })
// const draWGif= gif =>{
//     const html= `<img src="${gif}" alt="un gif bornio">`
//     contenido.insertAdjacentHTML('beforeend',html)
// }



// const eventForm1 = () => {
//     const form1 = document.getElementById('messageformsubmit')
//     if (form1) {
//         form1.addEventListener('click', async e => {
//             e.preventDefault()
//             let mensajeParaEnviar = {}
//             let mensajeEscrito = messagetext.value
//             if (mensajeEscrito.startsWith('/giphy')) {
//                 const q = encodeURI(mensajeEscrito.substring(7))
//                 const headers = new Headers()
//                 headers.append('Content-Type', 'application/json')
//                 const myInit = {
//                     method: 'GET', 
//                     headers: headers,  
//                     mode: 'cors', 
//                     cache: 'default'
//                 }
//                 const apiKey = 'mto0q23ZXsGlZDFANOaT1yeVDeR2mmwX'
//                 const uri = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${q}&limit=1`
//                 const res = await fetch(uri, myInit)
//                 const data = await res.json()
//                 // console.log(data)
//                 mensajeParaEnviar.type = 'giphy'
//                 mensajeParaEnviar.message = data.data[0].images.fixed_height.url
//             } else {
//                 mensajeParaEnviar.type = 'message'
//                 mensajeParaEnviar.message = mensajeEscrito
                
//             }
//             ws.send(JSON.stringify(mensajeParaEnviar))
//             messagetext.value = ""
//         })
//     }
// }






// registro u login modificado*******************************
/* 
const urlApi ='http://localhost:9999'
const urlLogin = urlApi+'/login'
const urlRegister = urlApi+'/registro'


    let lettheChart= null
const dataChart=[5,15,12]

const setSystemMessage = data => {
    systemMessage.textContent = data
}

// para registrarse de manera automatica
// es este caso los datos de registro ya se encuentran en el servidor

// para logearse de manera automatica se debe poner los datos que estan en el servidor 

const prepareRegister = async ()=>{
    const user={
        nick_name:'luis',
        password:'123'
    }
    const data =await  executeService(urlRegister,'POST',user)
    console.log(data);
}


const prepareLogin = async ()=>{
    const user={
        nick_name:'luis',
        password:'123'
    }
    const data =await  executeService(urlLogin,'POST',user)
    
    // guardando el token en el navegador
    if(data.type === 'ok'){
        localStorage.setItem('token',data.data)
        console.log('token guardado');
    }

    console.log(data);

    
}

// creamos una funcion para refactorizar el codigo tanto para login y registro mas adelante 

const executeService =async (uri,met,user) =>{
   
    const header = new Headers()
    header.append('Content-Type','application/json')

    const myInit ={
        method : met,
        headers : header,
        body: JSON.stringify(user)
    } 

    const resp = await fetch(uri,myInit)
    const json=await resp.json()
 

// PREPARANDO EL ENLACE AL WEBSOCKETS



// ws.send()

    return json
}


// prepareRegister()
prepareLogin()

//  const connectWS1= ()=>{

    const  user1= 'luis'
    const  token1= '8e47f8c9-858e-4c9b-8bc6-9b2aa4bff448'
    const wsURL = `ws://localhost:9999/ws?uname=${user1}&token=${token1}`
    
    
    const ws1 = new WebSocket(wsURL);
    ws1.onopen = () => { console.log("Se ha establecido conexión con el websocket de manera automatica") }
    ws1.onerror = error => { console.log(error) }
    ws1.onmessage = e =>{
        console.log(e.data)
        console.log(e)
        const data = JSON.parse(e.data)
      switch (data.type) {
          case 'message':
              content.insertAdjacentHTML('beforeend', `<div>De: ${data.data_response.name}, Mensaje: ${data.data_response.message}</div>`)
              break;
          default:
              break;
      }
    }


//  ws.send(JSON.stringify(data))

//  llalmado al id del  HTML(CLASICO)
//  document.getElementById("txtmsg").value = "";



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
        ws1.send(JSON.stringify(data)) 
        setSystemMessage('se envio el web-sockets')
        txtmsg.value=""
    }else{
        console.log('no se envio valor');
    }
     
    }) 


// }

// ENVIO DE MENSAJE SUSTITUTORIO

// btnSendMessage.addEventListener('click', e =>{
//     // validar que el mensaje no este vacio
//     e.preventDefault()
//     const data = {
//         type : 'message',
//         message : txtmsg.value
//     }
// //  ws.send(JSON.stringify(data))

// //  llalmado al id del  HTML(CLASICO)
// //  document.getElementById("txtmsg").value = "";

// if(txtmsg.value.trim() ){
//     ws1.send(JSON.stringify(data)) 
//     setSystemMessage('se envio el web-sockets')
//     txtmsg.value=""
// }else{
//     console.log('no se envio valor');
// }
 
// })  

// cuando envia datos al imput y le sa enter
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
    const response = await fetch(urlLogin,options)
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

// invoca al metodo login luego de hacer click
btnLogin.addEventListener('click', e => {
    e.preventDefault()
    login()
    // prepareLogin()
    
})

// const connectWS= data =>{


//     ws= new WebSocket(`ws://localhost:9999/ws?uname=${usrName.value}&token=${data.token}`)
//     ws.onopen = e =>{
//         console.log('conectado al web-sockets');
//         setSystemMessage('conextado al web sockets  correctamente')

//         }
//         ws.onerror = e => {
//             setSystemMessage(e)
//         }
//         ws.onmessage = e =>{
//             console.log(e.data)

//             const data = JSON.parse(e.data)
//           switch (data.type) {
//               case 'message':
//                   content.insertAdjacentHTML('beforeend', `<div>De: ${data.data_response.name}, Mensaje: ${data.data_response.message}</div>`)
//                   break;
//                 case 'sale':
//                 dataChart[data.data_sale.product] +=data.data_sale.quantity
//                 theChart.update()
//                 break;
//                 case 'pong':
//                 console.log('sigo vivo');
//                 break;
//               default:
//                   break;
//           }
//         }
//         setInterval(()=>{
//             ws.send(JSON.stringify({type:'ping'}))
//         },60000)
// }

// boton del mensaje
    // btnSendMessage.addEventListener('click', e =>{
    //     // validar que el mensaje no este vacio
    //     e.preventDefault()
    //     const data = {
    //         type : 'message',
    //         message : txtmsg.value
    //     }
    // //  ws.send(JSON.stringify(data))

    // //  llalmado al id del  HTML(CLASICO)
    // //  document.getElementById("txtmsg").value = "";

    // if(txtmsg.value.trim() ){
    //     ws1.send(JSON.stringify(data)) 
    //     setSystemMessage('se envio el web-sockets')
    //     txtmsg.value=""
    // }else{
    //     console.log('no se envio valor');
    // }
     
    // }) 



    // boton del producto suma o resta
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



 */


/* borrador

https://codingpotions.com/javascript-foreach-bucles
https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Object/assign */