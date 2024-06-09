//Crear una función que reciba un arreglo de números y //
//regrese la lista de números pares que se encuentran en el arreglo//
function numberPar(arregloNum) {
  const numPar = arregloNum.filter((num) => num % 2 === 0)

  return console.log('los números pares son: ' + numPar)
}

numberPar([5, 50, 30, 1, 2, 4, 10, 8])
