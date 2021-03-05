const c = document.getElementById('myContent')
const b = document.getElementById('btnLoadJSON')
const l = document.getElementById('loading')

l.style.display =  'none'
b.addEventListener('click', evt => {
    l.style.display =  'block'

    const xhr= new XMLHttpRequest()
    xhr.open('GET','ejemplo.json',true)
    
    // Quw se debe hacer con la data 
        xhr.addEventListener('load',e => {
            
            console.log(e.target.status)
        //    const stat =e.target.status =404
            switch (e.target.status) {
                case 200:
                    const data =JSON.parse(e.target.responseText)
                    draw(data)
                    break
                case 401:
                    c.textContent = 'no estas autorizado para realizar esta acción'
                    break
                case 404:
                c.textContent = 'no existe información ... pagina 404'
                break
                case 500:
                    c.textContent = 'hubo un error en el servidor, por favor vuelva a intentarlo'
                    break
            }

        
        l.style.display = 'none'
    })
    
    // Realice la petición
    setTimeout(() => {
        xhr.send()
        
        },5000)
    


})

const draw = data => {
    c.innerHTML = ''
    const f = document.createDocumentFragment()

    data.forEach(n => {
        const container =document.createElement('div')
        const title =document.createElement('h2')
        const content =document.createElement('p')
        const datenew =document.createElement('span')

        title.textContent = n.Titulo
        content.textContent =n.Contenido
        datenew.textContent =n.Fecha

        container.appendChild(title)
        container.appendChild(content)
        container.appendChild(datenew )

        f.appendChild(container)

        
    });
    c.appendChild(f)
}
