// const myContent = document.getElementById('myContent')
// const btn = document.getElementById('btn')

const setText = data => {
    myContent.textContent = data
}

const getData = () => {
    return new Promise((resolve,reject) =>{

        setText('solicitando información')
        setTimeout(() => {
           resolve(true)
        }, 2000);
        
    })
}

const showData = () => {
    return new Promise((resolve,reject) =>{
        
        setText('esperando a mostrar la información ')
        setTimeout(() => {
            resolve({name : 'carol'})
        }, 2000);
    })
}

// PROMESA CON EL METODO THEN -> USADO AL TERMINAR UNA ACCION REALIZA LO SIGUIENTE 
// btn.addEventListener('click', () =>{
//     getData().then( autorization =>{

//         if(autorization) {
//            return showData()
//         }else{
//             setText('no es un usuario autorizado')
//         }
//     }).then(user => {
//         setText(user.name)
//     })
// })
// PROMESA ASYNC Y AWAIT
btn.addEventListener('click',async () =>{
    let user = null
   const autorization = await   getData()
    if(autorization){
       user =await showData()
       setText(user.name)
    }else{
            setText('no es un usuario autorizado')    
    }
})

const ejecutar= () =>  {
    console.log('hola mundo');
    await()
    }