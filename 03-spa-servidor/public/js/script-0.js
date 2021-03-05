// alert('hola mundo')

const c = document.getElementById('myContent')
const b = document.getElementById('btnLoad')
const  l = document.getElementById('loading')

l.style.display =  'none'

b.addEventListener('click', evt => {
    l.style.display =  'block'
    const xhr= new XMLHttpRequest()
    console.log('objeto creado',xhr.readyState);
    
    xhr.open('GET','/data.html',true)
    console.log('objeto abuerto (open)',xhr.readyState);
    
    // Quw se debe hacer con la data 
        xhr.addEventListener('load',e => {
            console.log(e.target);
        console.log('objeto cargado',xhr.readyState);
        c.innerHTML = e.target.responseText 
        l.style.display =  'none'
        // Realice la petición
    })
    
    console.log('accion solicitada',xhr.readyState);
    setTimeout(() => {
    xhr.send()
    
    },5000)
    
 
  
})


