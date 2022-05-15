const nombre = document.querySelector("#nombre");
const apellido = document.getElementById("apellido");
const fechaNacimiento = document.getElementById("fecha");
const email = document.getElementById("email");
const password = document.getElementById("password");
const boton = document.querySelector(".boton");
const form = document.getElementById("form");



boton.addEventListener("click",(event) =>{

     event.preventDefault();

     event.target.classList.add("color");



 
var nombre = form.nombre.value;

console.log(nombre);

 

if(nombre == ""){
   // form.nombre.value = "porfavor escriba un nombre";
    console.log("no"); 
        
    
}

else{
    alert("formulario enviado")
}




  form.reset();   


})

 



     

    

         
    

 

 

    



 

 
