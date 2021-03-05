// creamos el onjeto ws para acceder desde cualquier function
let ws
const Router = {
    routes:[],
    mode:null,
    root:'/',
    config: function(options) {
        this.mode = options && options.mode && options.mode == 'history'
        && !!(history.pushState) ? 'history' : 'hash';
        this.root = options && options.root ? '/' + this.clearSlashes(options.root) + '/' : '/';
        return this;
    },
    getFragment: function(){
        var fragment = '';
        if(this.mode === 'history'){
            fragment = this.clearSlashes(decodeURI(location.pathname + location.search));
            fragment = fragment.replace(/\?(.*)$/, '');
            fragment = this.root != '/' ? fragment.replace(this.root,'') : fragment;    
    }else{
        var match= window.location.href.match(/#(.*)$/);
        fragment= match ? match[1] : '';
    }
    return this.clearSlashes(fragment);
},
clearSlashes: function(path){
    return path.toString().replace(/\/$/,'').replace(/^\//, '');   
},
// agregar una ruta 
add: function(re, handler){
   if(typeof re == 'function'){ 
       handler = re ;
        re=  '';
}
this.routes.push({re: re, handler: handler});
 return this;
},
remove: function(param){
    for(var i=0, r; i<this.routes.length, r= this.routes[i]; i++){
        if(r.handler === param || r.re.toString() === param.toString()){
            this.routes.splice(i,1);
            return this;
        }
    }
    return this;
},
flush: function(){
    this.routes = [];
    this.mode = null;
    this.root = '';
    return this;

},
check: function (f) {
    var fragment= f || this.getFragment();
    for(var i=0; i<this.routes.length; i++) {
        var match = fragment.match(this.routes[i].re);
        if(match){
            match.shift();
            this.routes[i].handler.apply({}, match);
            return this;
        }
    }
    return this;
},
listen: function(){
    var self = this;
    var current = self.getFragment();
    var fn = function(){
        if(current !== self.getFragment()){
            current = self.getFragment();
            self.check(current);
        }
    }
    clearInterval(this.interval);
    this.interval = setInterval(fn,50);
    return this;
},
navigate: function (path){
    path = path ? path : '';
    if(this.mode === 'history'){
        history.pushState(null,null,this.root +  this.clearSlashes(path));
    }else{
        window.location.href = window.location.href.replace(/#(.*)$/,'') + '#' + path;
    }
    return this;
    }
}


// configuration
Router.config({mode: 'history'});

// resturning the user to the initial state
Router.navigate();

// agregando rutas  a nuestros servidores 

Router.add(/login/, function() {
    console.log('Estoy en el login')
    document.body.classList.add('login-page')
    document.body.classList.remove('container')
    document.body.innerHTML = `
    <div class="login-container">
        <div class="brand-login">
            <img src="https://api.ed.team/public-files/bloginlineimg/5b557c57-8969-45ca-b880-a05441ca353b.png" alt="" class="logo">
        </div>
        <form class="form-login" id="form-login">
            <input type="text" class="form-login--user" placeholder="Usuario" name="userName">
            <input type="password" class="form-login--pass" placeholder="Contraseña" name="userPass">
            <input type="submit"  value="Ingresar" class="form-login--submit">
        </form>
        <a href="#" id="linkRegistro">Registro</a>
    </div>
    ` 
    linkRegistro.addEventListener('click',e=>{
        e.preventDefault()
        Router.navigate('/registro')
    })
    eventFormLogin()
}).add(/registro/, function() {
    console.log('Estoy en el registro')
    document.body.classList.add('login-page')
    document.body.classList.remove('container')
    document.body.innerHTML = `
    <div class="login-container">
    <div class="brand-login">
    <img src="https://api.ed.team/public-files/bloginlineimg/5b557c57-8969-45ca-b880-a05441ca353b.png" alt="" class="logo">
    </div>
    <form class="form-login" id="form-registro">
        <input type="text" class="form-login--user" placeholder="Usuario" name="userName">
        <input type="password" class="form-login--pass" placeholder="Contraseña" name="userPass">
        <input type="submit" value="Registrarse" class="form-login--submit">
    </form>
</div>
    ` 
eventFormRegister()

}).add(/chat/, function() {
    // wsInit()
    console.log('Estoy en el chat')
    document.body.classList.add('container')
    document.body.classList.remove('login-page')
    document.body.innerHTML = `
 <aside class="sidebar-container">
        <div class="brand">
        <img src="https://api.ed.team/public-files/bloginlineimg/5b557c57-8969-45ca-b880-a05441ca353b.png" alt="" class="logo">
        </div>
        <div class="users" id="usersConnected">
            <h2>Usuarios contectados</h2>

        </div>
        <div class="account">
            <a id="cerrarSesion" href="#">Cerrar Sesión</a>
        </div>
    </aside>
    <main class="main-container">
        <div class="chat-details">
            <h1 class="title">Canal público</h1>
            <span class="sub-title">Sala general de comunicación</span>
        </div>
        <div class="messages-container" id="messages-container">
            
        </div>
        <div class="form-container" >
        <form class="message-form" id="message-form" >
            <input  class="message-form--text" id="messagetext" type="text" autocomplete="off" placeholder="Ingrese sus mensaje" name="messageText">
            <input class="message-form--submit" id="messageformsubmit"  type="submit" >
        </form>
    </div>
    </main>
    ` 
//     <div class="user" id="userDisconnect" >
//     <span class="user--name" >Beto Quiroga</span>
//     <span class="user--status">En linea</span>
// </div>

        cerrarSesion.addEventListener('click', e => {
            e.preventDefault()
            ws.close()
            localStorage.clear()
            Router.navigate('/login')

        })

    wsInit()
        
        eventForm1()
}).listen()

// original
// if(localStorage.getItem('token') === "8e47f8c9-858e-4c9b-8bc6-9b2aa4bff448"){
//     Router.navigate('/chat')
// }else{
//     Router.navigate('/login')
// }

const wsInit = () => {
    const user1 = localStorage.getItem('user')
    if (user1) {
        // const token1 = localStorage.getItem('token')
        const token1 = '8e47f8c9-858e-4c9b-8bc6-9b2aa4bff448'
        const wsURL = `ws://localhost:9999/ws?uname=${user1}&token=${token1}`

        ws = new WebSocket(wsURL);
        ws.onopen = () => { console.log("Se ha establecido conexión con el websocket") }
        ws.onerror = error => { console.log(error) }

        ws.onmessage = mensaje => { 
            // modificar log
            console.log(mensaje)
            mensajeImpreso(JSON.parse(mensaje.data))
        }
    }
}


if (localStorage.getItem('token') === "8e47f8c9-858e-4c9b-8bc6-9b2aa4bff448" ) {
    // wsInit()
  
    // wsInit()
    Router.navigate('/chat')
} else {
    Router.navigate('/login')
}

