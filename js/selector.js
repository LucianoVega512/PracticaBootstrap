
window.onload = () => {
    let botones = document.querySelectorAll('button');

    botones[0].onclick = () => {
        resultadoLogin();
    };

    botones[1].onclick = () => {

    };

    botones[2].onclick = () => {
        
    };
};

function resultadoLogin(){
    document.getElementById("resultado").innerHTML = "<h1><span class='badge bg-primary mt-3'>Login</span></h1><form><div class='input-group my-3'>" +
    "<input type='text' class='form-control' placeholder='Nombre Usuario' aria-label='Usuario'></div><div class='input-group mb-3'><input type='text'" + 
    " class='form-control' placeholder='Clave' aria-label='Clave'></div><div class='input-group mb-3'><input type='button' class='form-control btn btn-primary'" +
    " value='Enviar'></div></form>"
}