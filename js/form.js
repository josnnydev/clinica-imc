
//se trae el boton con su id a js...
var botonAdicionar = document.querySelector("#adicionar-paciente"); 

//se crea una funcion anonima sin nombre y se crea ahi mismo
botonAdicionar.addEventListener("click", (event) => { 
  //previene que al dar click al boton se actualize la pagina
  event.preventDefault();
  
  //se ingresa el id del formulario
   var form = document.querySelector("#form-adicionar"); 
   //se llama la funcion que creamos del objeto
   var paciente = datoPaciente(form); 
   //se llama a la funcion construir tr
   var pacientetr = construirTr(paciente);

    //llamamos la funcion que creamos para validar el peso
    var errores = validarPaciente(paciente)
    console.log(errores);
   if(errores.length > 0){
     exhibirMensajesErrores(errores);
     return;
    
     
  }


     //capturando la tabla
    var tabla = document.querySelector("#tabla-pacientes"); 
   //se agrega a la tabla cada uno de los pacientetr al html
   tabla.appendChild(pacientetr); 






   
  //para resetear el formulario y no agregar un dato mas de una vez
   form.reset();

} ); 

//se crea una funcion capturando los datos de los pacientes creado en un objeto
function datoPaciente(form){
  
  var paciente = {

    nombre : form.nombre.value,
    peso : form.peso.value,  
    altura : form.altura.value,
    gordura : form.gordura.value,
    imc : calcularIMC(form.peso.value,form.altura.value)



  }
   
    
  return paciente;
}

//se crea una function que se usara en el boton
function construirTr(paciente){
  //se crea los td y tr de la tabla con createElement de cada uno de los valores de los inputs que se va a agregar
  var pacientetr = document.createElement("tr");
  
    

   //se llama a la funcion construirtd y se le da como valor a los parametros dato y clase... al padre pacientetr se entra a cada uno de sus hijos y se le pone el valor de la listas creada... se agrega datos al html desde js
  pacientetr.appendChild(construirTd(paciente.nombre,"info-nombre"));
  pacientetr.appendChild( construirTd(paciente.peso,"info-peso") );  
  pacientetr.appendChild(construirTd(paciente.altura,"info-altura"));
  pacientetr.appendChild( construirTd(paciente.gordura,"info-gordura"));
  pacientetr.appendChild(construirTd(paciente.imc,"info-imc"));

  return pacientetr;

}

//se crea funcion para construir los td y agregarle la clase y los datos como parametro
function construirTd(dato,clase){
  var td = document.createElement("td");
  td.classList.add(clase);
  td.textContent = dato;
  return td;

}

//creamos una funcion para validar los datos del peso usamos un if con la funcion de calcularim...
 
function validarPaciente(paciente){
  var errores = []
  if(!validarPeso(paciente.peso)){
    errores.push("peso incorrecto,porfavor agregue uno valido!");
  }
  if(!validarAltura(paciente.altura)){
    errores.push("la altura es incorrecta,porfavor agregue una valida!");
  }
  return errores;


}

//creamos una funcion para crear una lista en el html con los errores que apareceran en la web... foreach: para cada array
function exhibirMensajesErrores(errores){
  var ul = document.getElementById("mensajes-errores");

  errores.forEach((error) => {

    var li = document.createElement("li");
    li.textContent = error;
    ul.appendChild(li);
  
    
  });

}
