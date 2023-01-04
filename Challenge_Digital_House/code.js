/* --------------------------- NO TOCAR DESDE ACÁ --------------------------- */
let datosPersona = {
  nombre: "",
  edad: 0,
  ciudad: "",
  interesPorJs: "",
};

const listado = [{
    imgUrl: "https://huguidugui.files.wordpress.com/2015/03/html1.png",
    lenguajes: "HTML y CSS",
    bimestre: "1er bimestre",
  },
  {
    imgUrl: "https://jherax.files.wordpress.com/2018/08/javascript_logo.png",
    lenguajes: "Javascript",
    bimestre: "2do bimestre",
  },
  {
    imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png",
    lenguajes: "React JS",
    bimestre: "3er bimestre",
  },
];

const profileBtn = document.querySelector("#completar-perfil");
const materiasBtn = document.querySelector("#obtener-materias");
const verMasBtn = document.querySelector("#ver-mas");
const cambiarTema = document.querySelector('#cambiar-tema');

profileBtn.addEventListener("click", renderizarDatosUsuario);
materiasBtn.addEventListener("click", recorrerListadoYRenderizarTarjetas);
cambiarTema.addEventListener("click", alternarColorTema);
/* --------------------------- NO TOCAR HASTA ACÁ --------------------------- */

function obtenerDatosDelUsuario() {
  /* --------------- PUNTO 1: Escribe tu codigo a partir de aqui --------------- */
 datosPersona.nombre=prompt("Ingrese su nombre: ");
 let fecNacimiento=parseInt(prompt("Ingrese su año de nacimiento: ")); 
 datosPersona.edad=((new Date().getFullYear())-fecNacimiento);
 datosPersona.ciudad=prompt("Ingrese la cuidad de residencia");
 let interesJS=confirm("Tenés interes por JavaScript?: ");
 if(interesJS==true){
   datosPersona.interesPorJs="Sí";
 }else{
    datosPersona.interesPorJs="No";
 } 
}

function renderizarDatosUsuario() {
  /* ------------------- NO TOCAR NI ELIMINAR ESTA FUNCION. ------------------- */
  obtenerDatosDelUsuario();
  /* --------------- PUNTO 2: Escribe tu codigo a partir de aqui --------------- */
  
  const nombreHTML = document.getElementById("nombre").innerText=datosPersona.nombre;
  const edadHTML =  document.getElementById("edad").innerText=datosPersona.edad;
  const ciudadHTML =  document.getElementById("ciudad").innerText=datosPersona.ciudad;
  const interesJSHTML =  document.getElementById("javascript").innerText=datosPersona.interesPorJs;
}

let condition = true;

function recorrerListadoYRenderizarTarjetas() {
  /* ------------------ PUNTO 3: Escribe tu codigo desde aqui ------------------ */ 
 
  while (condition) {
    listado.forEach((element, index) => {    
      const cajaMateria = document.createElement('div');
      cajaMateria.classList.add('caja');
      document.querySelector('#fila').insertAdjacentElement('afterbegin', cajaMateria);
      
      const imagenMateria = document.createElement('img');
      imagenMateria.classList.add("img")
      document.querySelector('.caja').insertAdjacentElement('afterbegin', imagenMateria);  
      imagenMateria.setAttribute('src',listado[index].imgUrl);
      imagenMateria.setAttribute('alt',listado[index].lenguajes);
      
      const lenguajes = document.createElement('p');
      lenguajes.classList.add('lenguajes');
      document.querySelector('.img').insertAdjacentElement('afterend', lenguajes);
      lenguajes.innerText="Lenguaje: "+listado[index].lenguajes;
      
      const bimestre = document.createElement('p');
      bimestre.classList.add('bimestre');
      document.querySelector('.lenguajes').insertAdjacentElement('afterend', bimestre);
      bimestre.innerText="Bimestre: "+listado[index].bimestre;           
    }); 
    document.getElementById("fila").style.flexDirection = "row-reverse"; 
    condition=false;   
  }  
    
}

function alternarColorTema() {
  /* --------------------- PUNTO 4: Escribe tu codigo aqui --------------------- */
  let sitio = document.querySelector('#sitio');  
  sitio.classList.toggle('dark')
}

/* --------------------- PUNTO 5: Escribe tu codigo aqui --------------------- */
  
  document.addEventListener('keydown',(event)=>{
    if(event.key==="F"){
      document.getElementById("sobre-mi").classList.remove("oculto");
    }
  });