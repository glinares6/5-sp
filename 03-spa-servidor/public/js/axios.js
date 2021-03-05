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
const loadComics = ('click',async()=>{
    const response = await axios.get(url)
    console.log(response)
    switch (response.status) {
        case STATUS_OK:
                draw(response.data.data.results)
            break;
        case STATUS_NOT_FOUND:
            console.log('no se encontro información');
            break
    }
})

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

