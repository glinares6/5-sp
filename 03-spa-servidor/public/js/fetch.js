// alert('usando el metodo fetch')

const STATUS_OK =200
const STATUS_CREATED=201
const STATUS_NOT_FOUND=404

const hash = '67ee4a032b207c32c7c960d187e24ae0'
const apiKey = 'd301ed535c3bae3b08f88ae546ec24a5'
const url = 
`https://gateway.marvel.com/v1/public/characters?ts=1&apikey=${apiKey}&hash=${hash}&limit=10&nameStartsWith=iron%20man`

btn.addEventListener('click',()=>{
    loadComics()
}) 

// METODO FETCH SIN ASYNC Y AWAIT
// const loadComics = () => {
//     fetch(url)
//     .then(response =>{ 
//  switch (response.status) {
//         case STATUS_OK:
//                return   response.json()
//             break;
//         case STATUS_NOT_FOUND:
//             console.log('no se encontro información');
//             break
//         }
        
//     })

//     .then(response =>{
//        draw(response.data.results);
//     })
//     .catch(error => console.log(error))
// }

const loadComics = async () => {
    const response =await fetch(url)
 switch (response.status) {
        case STATUS_OK:
               const marv = await response.json()
               draw(marv.data.results)
               break 
        case STATUS_NOT_FOUND:
            console.log('no se encontro información')
            break
        }
        
    }

const draw = data => {
    const container = document.createElement('div')
    data.forEach(comic => {
        const comicHTML = 
        `
        <div>
        </H2>${comic.name}<h2>
                <img src="${comic.thumbnail.path}/portrait_incredible.${comic.thumbnail.extension}" alt="${comic.name}">
        </div>`
        container.insertAdjacentHTML('beforeend',comicHTML)
    })

    myContent.appendChild(container)
}


// METODO POST

// const persona = {
//     name :document.getElementById('name'.value),
//     lastname :document.getElementById('lastName'.value),
//     age: parseInt(document.getElementById('age'.value)),
//     active:document.getElementById('active'.checked)
// }

// const myHeaders = new Headers()
// myHeaders.append('Content-Type','application/json')
// // myHeaders.append('Authorization','Bearer lasdlkasdljadfadadsfasfdsfasdfsdffasfdsdf')

// const myConfing = {
//     method : 'POST',
//     headers : myHeaders,
//     body:persona
// }
// btnenv.addEventListener('click',()=>{
//    myHeaders()
// }) 
// se requiere el uso  de CORS
//https://ed.team puerto 443  ed.team:443
//http://ed.team puerto 80  ed.team:80
//https://app.ed.team puerto 443  app.ed.team:443

// fetch('http://127.0.0.1:5500',myConfing)
// .then(response => response.json())
// .then(response=>draw(response.data))