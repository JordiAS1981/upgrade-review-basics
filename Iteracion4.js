// Crea una función llamada findArrayIndex que reciba como parametros un array de textos y un texto y 
// devuelve la posición del array cuando el valor del array sea igual al valor del texto que enviaste como parametro. 
// Haz varios ejemplos y compruebalos.

array = ['Caracol', 'Mosquito', 'Salamandra', 'Ajolote']

function findArrayIndex(array, value) {
    return array.indexOf(value);
}
console.log(findArrayIndex(array, 'Caracol'));
console.log(findArrayIndex(array, 'Mosquito')); 
console.log(findArrayIndex(array, 'Salamandra'))
console.log(findArrayIndex(array, 'Ajolote'));
console.log(findArrayIndex(array, 'Serpiente')); 