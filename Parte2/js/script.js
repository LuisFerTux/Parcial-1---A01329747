///////////////////////////////////////////////////////////////
//
//
//
//
// CADA PARTE FUNCIONA POR SI SOLA PERO YA NO PUDE ARREGLAR QUE 
// FUNCIONE TODO JUNTO POR TIEMPO DE QUE ME QUEDE SIN LUZ ... 
//
//
//
//
//
//
//
///////////////////////////////////////////////////////////////

/*
  Desarrolla la lógica para convertir los valores del textArea en minusculas: 

  Tip: Divide el problema en partes pequeñas. 

  1) Primero recupera los valores utilizando el DOM y los metodos que vimos en clase. 
  2) Parte los valores por la coma (,). TIP. Utiliza la función split
  3) convierte los valores a minuscula con alguna de las funciones de javascript. 
  4) Escribe en el textArea los nuevos valores

  Realiza todo lo anterior al hacer click en el botón. 
  */

const btn = document.getElementById("btn_mayusculas");
btn.addEventListener('click', textToLowerCase)

function textToLowerCase(event) {
  event.preventDefault();
  let textFromTextArea = document.getElementById("txt_may");
  let lowerCaseText = textFromTextArea.value.toLowerCase();
  console.log(lowerCaseText);
  txt_may.value = lowerCaseText;
}



/*
  Crea una funcion llamada "calculateDogAge" que: 
 
- reciba como argumento un número representando la edad en años humanos.
- realiza el cálculo de la edad en base a la conversión 1 año humano = 7 años perro.  
- Deberá escribir en valor convertido. 
- Recuerda utilizar preventDefault() como lo vimos en clase para evitar que el formulario se envie. 
- Ojo: Cuando se lee un valor de cualquier formulario, el tipo de dato por default es string. 
     Deberás convertir el string a Entero. 
 
*/

const btn2 = document.getElementById("btn_añoshumano");
btn2.addEventListener('click', calculateDogAge);

function calculateDogAge (){
  event.preventDefault();
  let humanAge = document.getElementById("edad_humano");
  //falto convertir explicitamente el valor a entero, pero ya no me alcanza el tiempo de que se me fue la luz. 
  edad_perro.value = humanAge.value * 7;
  console.log(edad_perro.value);
}


/*  OBJETOS
 
A) Crea un constructor de tipo "Pokemon" que reciba 4 parametros
 
1) Nombre
2) Especie
3) Ataque
4) Defensa
 
 
B) Crea 2 objectos  con diferentes valores. Para los despistados, existen 18 especies de pokeon: 
 Bicho, Dragón, Eléctrico, Hada, Lucha, Fuego, Volador, Fantasma, Planta, Tierra, Hielo, Normal, Veneno, Psíquico, Roca, Acero y Agua
 El Nombre y la Especie son Strings, Ataque y Defensa numericos.
 
 Registra un evento de "click", para que cuando se de click en el botón, se muestren las propiedades de cada objeto en el input correspondiente. 

*/

////COMENTADO PARA QUE FUNCIONE LO ANTERIOR 
//Se iban a leer cada campo y se iban a mostrar todo por consola o insertando codigo html directamente
//Pero ya no me da tiempo

// const btn3 = document.getElementById("btn_muestra");
// btn3.addEventListener('click', muestraPokemons);

// function muestraPokemons () {
//   event.preventDefault();

// }

// function Pokemon (Nombre, Especie, Ataque, Defensa){
//   this Nombre = Nombre;
//   this Especie = Especie;
//   this.Ataque = Ataque;
//   this.Defensa = Defensa;
// }

// var pokemon1Charizard = new Pokemon ('Charizard','Fuego', '1000','1000');
// var pokemon2Magikcarp = new Pokemon ('Magikcarp','Agua', '500','500');
