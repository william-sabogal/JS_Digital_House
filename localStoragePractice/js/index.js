/*
REQUERIMIENTOS
- utilizar el formulario para captar el texto ingresado

- implmentar el evento "submit", utilizarlo para guardar el comentario en un array

- cada vez que se agrega un nuevo comentario renderizarlo en una etiqueta "p"(sacar del html los hardcodeados y hacerlo dinamico)

- constantemente guardar la informacion en localStorage, si se recarga la pagina deberian mantenerse los comentarios
*/
window.addEventListener("load",(event)=>{
    renderizarHistorial();
})

const formulario = document.querySelector('form');

document.querySelector('input').setAttribute("name","comentario");

let listaComentarios = document.querySelectorAll('.comentarios p');
listaComentarios.forEach(comentario => comentario.remove());

const tituloPrincipal = document.querySelector('h1');
tituloPrincipal.style.textAlign = "center";


let tituloHistorial = document.createElement('h2');
tituloHistorial.innerHTML = "Historial de Busquedas";
tituloHistorial.style.textAlign = "center";
let historialHtml = document.getElementsByClassName('comentarios')
historialHtml.item(0).insertAdjacentElement('beforebegin',tituloHistorial);


let historialComentarios = JSON.parse(localStorage.getItem("historial"));



function renderizarHistorial(){
    if(historialComentarios){
        historialComentarios.forEach((comentario)=>{        
            const parrafo = document.createElement('p');
            parrafo.innerText = comentario;
            document.querySelector('.comentarios').insertAdjacentElement('afterbegin',parrafo);
        })
    }else{
        historialComentarios=[];
    }
}


formulario.addEventListener("submit", (event)=>{
    event.preventDefault();   
    const formData = new FormData(event.target);        
    const comentario = formData.get('comentario');    
    historialComentarios.push(comentario);
    localStorage.setItem("historial",JSON.stringify(historialComentarios)); 
    document.getElementById('comentario').value="";
    renderizarHistorial();
})




