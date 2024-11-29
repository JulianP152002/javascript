let frutas = ['manzana', 'pera', 'mango']

//------------ACCEDER A UN ELEMENTO MEDIANTE EL INDICE
let primero = frutas[0];
// Manzana
let ultimo = frutas[frutas.length - 1];
// Banana


//----------------AÑADIR UN NUEVO ELEMENTO AL FINAL Del ARRAY

let nuevaLongitud = frutas.push("Naranja"); // Añade "Naranja" al final
// ["Manzana", "Banana", "Naranja"]

//_---------------------------Añadir un nuevo elemento al principio del array

let nuevaLongitud1 = frutas.unshift("Fresa"); // Añade "Fresa" al inicio
// ["Fresa" ,"Manzana", "Banana"]

//-------------ELIMINAR EL PRIMER ELEMENTO DE UNA ARRAY

let primero1 = frutas.shift(); // Elimina "Fresa" del inicio
// ["Manzana", "Banana"]
