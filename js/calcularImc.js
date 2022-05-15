// var titulo = document.querySelector("h1"); //se elige la etiqueta h1
// 			console.log(titulo); //muestra la etiqueta h1 y el contenido
// 			console.log(titulo.textContent); //muestra solo el contenido de la etiqueta h1

// 			titulo.textContent = "buena vida nutricion"; //se cambia el contenido del titulo con la variable.textocontenido y se le da un valor...
//             alert(titulo.textContent);

   

//hola



     // imc = peso / altura * altura

var pacientes = document.querySelectorAll(".paciente"); //buscamos el id en html

for(var i = 0; i < pacientes.length; i++){ //se crea un ciclo for para buscar todos los pacientes que htm guarda auto en un array...
   paciente = pacientes[i]; //la variable paciente se le cambia al valor a todos los pacientes con todos los del array[i]...


  var tdPeso = paciente.querySelector(".info-peso"); //ingresamos a la clase que queremos capturar que se encuentra en la lista paciente
  var peso = tdPeso.textContent; //ingresamos al contenido de la clase
  var tdaltura =paciente.querySelector(".info-altura");
  var altura = tdaltura.textContent;
  
   
   
  
  
  var imc = peso / (altura * altura); //se calcula el imc
  
  var tdimc = paciente.querySelector(".info-imc"); // se va a la clase del imc en htm
  tdimc.textContent = imc; // se le agrega el valor imc a la casilla en html 
  
  //se usan las funciones de validador de peso y altura
  pesoValido = validarPeso(peso);
  alturaValida = validarAltura(altura);
  
   //verdadero o falso = verdadero
  if(!pesoValido){ // se pone limite en los pesos a calcular... || = significa or
  
    console.log("porfavor ingrese un peso valido");
    tdimc.textContent = "peso incorrecto";
    pesoValido = false; //si entra en la condicion se cambia a falso para que no se ejecute el calculo
    paciente.classList.add("paciente-incorrecto"); //se agrega una nueva clase desde el css que pone de color coral donde esta el dato incorrecto
  }
  
  
  
  
   //verdadero o falso = verdadero
  if(!alturaValida){ //se pone limite a la altura... (!niega una afirmacion) 
  
      console.log("porfavor ingrese una altura valida");
      tdimc.textContent = "altura incorrecta";
      alturaValida = false; //si entra en la condicion se cambia a falso para que no se ejecute el calculo
      paciente.classList.add("paciente-incorrecto");  
       
    }
  
  
        //verdadero y verdadero = verdadero
        //verdadero y falso = falso
        //falso y falso = falso
    if(pesoValido && alturaValida){ //se entra y las dos son true y se imprime el imc... && = significa and...
       
      tdimc.textContent = calcularIMC(peso,altura); //se pasa la funcion para calcular el imc
       
    }
  
}

function calcularIMC(peso,altura){
  var imc = peso / (altura * altura); //se crea una funcion con la formula del imc para reutilizarla
  return imc.toFixed(2); //se coloca dos decimales al valor imc despues del punto con tofixed...
}


//se crean funciones para validar el peso y la altura que returne falso o verdadero
function validarPeso(peso){
  if(peso >= 0 && peso < 1000){
    return true;
  }else{
    return false;
  }
}

function validarAltura(altura){
  if(altura >= 0 && altura < 3.00){
  return true;
}
 else{
  return false;
  }
}

 
 

  

 