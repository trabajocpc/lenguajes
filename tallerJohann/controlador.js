let contador1=0;
let contador2=0;

let calcular=document.getElementById("calcular");
let boton=document.getElementById("siguiente");
let puntaje=document.getElementById("puntaje");

calcular.addEventListener("click",verificarRespuesta);
boton.addEventListener("click",cambiardatos);
 puntaje.addEventListener("click",);   
    
       

function verificarRespuesta(){

        let numero1=document.getElementById("numero1").value;
        let numero2=document.getElementById("numero2").value;
       
        
    
        let resultado=document.getElementById("resultado").value;
        let gif=document.getElementById("yay");
      
   

    let calcularResultado= Number(numero1)+Number(numero2);

    

    if(resultado==calcularResultado){

        console.log("ok")
        contador1++;
        console.log(contador1)

        gif.classList.add("visible")
        gif.classList.remove("invisible")
        gif.src="https://giphy.com/embed/TdfyKrN7HGTIY"
        setTimeout(function(){
            gif.src=""
            gif.classList.remove("visible")
            gif.classList.remove("invisible")

            
        },5000)
        


    }else{

        console.log("sad")
        contador2++;
        console.log(contador2)

        gif.classList.add("visible")
        gif.classList.remove("invisible")
        gif.src="https://giphy.com/embed/BEob5qwFkSJ7G"
        setTimeout(function(){
            gif.src=""
            gif.classList.remove("visible")
            gif.classList.remove("invisible")

       
       
   
    },5000)
    
}






}

function calcularPuntaje(){

    let trofeo=document.getElementById("trofeo")
    trofeo.classList.remove("invisible")
    trofeo.classList.add("visible") 

    setTimeout(function(){
        trofeo.src=""
        trofeo.classList.remove("invisible")
        trofeo.classList.add("visible")
        titulo1
    },5000)




}

function cambiardatos(){

    let numero1=document.getElementById("numero1");
    let numero2=document.getElementById("numero2");

    numero1.value=getRandomInt(1,10)
    numero2.value=getRandomInt(1,10)

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
      }

    
    
}