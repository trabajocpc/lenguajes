let contador=0;

let puntuacion=document.getElementById("puntuacion");
let calcular=document.getElementById("calcular");
let siguiente=document.getElementById("siguiente");
let gif=document.getElementById("giff");
let gifpun=document.getElementById("gifpun");

calcular.addEventListener("click",verificarRespuesta);
siguiente.addEventListener("click",cambiarDatos);
puntuacion.addEventListener("click",mostrarPuntaje);



function verificarRespuesta(){
    
    let numero1=document.getElementById("numero1").value;
    let numero2=document.getElementById("numero2").value;
    let resultado=document.getElementById("resultado").value;

    

    let calcularResultado= Number(numero1)+Number(numero2);

    // console.log(resultado)
    //console.log(calcularResultado)
    
    if(resultado==calcularResultado){

        console.log("ok");
        gif.classList.remove("invisible");
        gif.src=("https://giphy.com/embed/3o7abKhOpu0NwenH3O");
        contador++;
        console.log(contador);

        setTimeout(function(){
            gif.src="";
            gif.classList.remove("visible")
            gif.classList.add("invisible")

        },5000)

    }else{

        console.log("ojo");
        gif.classList.remove("invisible")
        gif.src=("https://giphy.com/embed/3oEjI96ryYFtijYjss");

        setTimeout(function(){
            gif.src="";
            gif.classList.remove("visible")
            gif.classList.add("invisible")

        },5000)

    }


}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

 
function cambiarDatos(){

    let numero1=document.getElementById("numero1");
    let numero2=document.getElementById("numero2");

    numero1.value=getRandomInt(1,10);
    numero2.value=getRandomInt(1,10);

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
      }
  }


function mostrarPuntaje(){

    gifpun.classList.remove("invisible");
    gifpun.classList.add("visible")

    let buenas=document.getElementById("buenas")
    buenas.textContent="Tus puntos buenos son: "+contador;



    setTimeout(function(){
        
        gifpun.classList.remove("visible")
        gifpun.classList.add("invisible")
        buenas.textContent="";

    },5000)

}