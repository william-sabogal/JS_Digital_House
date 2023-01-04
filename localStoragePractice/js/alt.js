/*
REQUERIMIENTOS
- utilizar el formulario para captar el texto ingresado

- implmentar el evento "submit", utilizarlo para guardar el comentario en un array

- cada vez que se agrega un nuevo comentario renderizarlo en una etiqueta "p"(sacar del html los hardcodeados y hacerlo dinamico)

- constantemente guardar la informacion en localStorage, si se recarga la pagina deberian mantenerse los comentarios
*/
const tituloPrincipal = document.querySelector('h1');
tituloPrincipal.style.textAlign = "center";
let tituloHistorial = document.createElement('h2');
tituloHistorial.innerText = "Historial de Busquedas";
tituloHistorial.style.textAlign = "center";
document.querySelector('.comentarios').insertAdjacentElement("beforebegin",tituloHistorial);

const botonClear = document.createElement("button");
botonClear.innerText = "Borrar Historial";
botonClear.style.width = "150px";
document.querySelector('main').insertAdjacentElement("beforeend",botonClear);
botonClear.addEventListener("click", (event)=>{
    event.preventDefault();    
    localStorage.clear();
    location.reload();
    
})

document.querySelectorAll('p').forEach(comentario => {comentario.remove();});

const formulario = document.forms[0];
const campoComentario = document.getElementById("comentario");

let listadoComentarios = JSON.parse(localStorage.getItem("historial"));

let rend = false;

window.addEventListener("storage",()=>{
    renderizar();
    rend=true;
});

renderizar();

function renderizar(){
    if(!rend&&listadoComentarios){
        listadoComentarios.forEach(comentario =>{
            insertarComentario(comentario);
        })
    }else{
        listadoComentarios = [];
    }
}



formulario.addEventListener("submit",(event)=>{
    event.preventDefault();
    const comentario = campoComentario.value;
    listadoComentarios.push(comentario);
    guardarHistorial(listadoComentarios);
    campoComentario.value="";
    insertarComentario(comentario);
})

function guardarHistorial(listadoComentarios) {
    localStorage.setItem("historial",JSON.stringify(listadoComentarios));     
}

function insertarComentario(comentario){    
    const espacioComentarios = document.querySelector('.comentarios');
    const comentarioRenderizado = document.createElement('p');
    comentarioRenderizado.innerText = comentario;
    espacioComentarios.insertAdjacentElement("afterbegin",comentarioRenderizado);
}

