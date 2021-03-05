// esquema como era anteriomente
// const xhr =new XMLHttpRequest()
// xhr.open(method,url,true)
// xhr.addEventListener('load',()=> {
    
// })

// xhr.send()
// const setText = data => {
//     myContent.textContent = data
// }

// const getData = () => {
//     return new Promise((resolve,reject) =>{

//         setText('solicitando información')
//         setTimeout(() => {
//            resolve(true)
//         }, 2000);
        
//     })
// }

const setText = data => {
    myContent.textContent = data
}

// CREANDO NUESTRA LIBRERIA
const ajax = request =>{
    return new Promise((resolve,reject) => {
        const xhr = new XMLHttpRequest()
        xhr.open(request.method,request.url,true)
        xhr.addEventListener('load',e =>{
            resolve(e.target)
        })
        xhr.send()
    })
}
// ASYNC -> DEVOLVERA TODA LA INFORMACIÓN Y LUEGO LO PROCESARA UNO POR UNO
const showMarvel =  async()=>{
    // console.log('recuperando la intro');
    const hash = '67ee4a032b207c32c7c960d187e24ae0'
    const apiKey = 'd301ed535c3bae3b08f88ae546ec24a5'
    const url = 
    `https://gateway.marvel.com/v1/public/characters?ts=1&apikey=${apiKey}&hash=${hash}&limit=10&nameStartsWith=iron%20man`

/*
https://gateway.marvel.com/v1/public/characters?ts=1&apikey=d301ed535c3bae3b08f88ae546ec24a5&hash=67ee4a032b207c32c7c960d187e24ae0&limit=20&nameStartsWith=iron%20man
*/
    
    const  r ={method : 'GET' , url:url}
    const response =await ajax(r)  
    
    switch (response.status) {
        case 200:
            console.log(JSON.parse(response.responseText))
           draw(JSON.parse(response.responseText).data.results)
           break
           case 400:
               setText('Error del cliente'+response.status)
            break
            default:
                setText('Error desconocido ' +response.status)
            }
        }
        
        
        
        
        const draw = data  => {
            const fragment = document.createDocumentFragment()
            data.forEach(comic => {
       const container = document.createElement('div') 
       const title = document.createElement('h2')
       const image = document.createElement('img')
       title.textContent = comic.name
       image.src=
        `
        ${comic.thumbnail.path}/portrait_incredible.${comic.thumbnail.extension}
        `
        container.appendChild(title)
        container.appendChild(image)
        fragment.appendChild(container)
    });

    myContent.appendChild(fragment)
}
btn.addEventListener('click',e =>{showMarvel()})