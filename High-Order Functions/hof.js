function calcular(a,b, operacao){
  console.log("Realizar uma operação")
  const resultado = operacao(a,b) // somar(a, b)
  return resultado
}


 function somar(x,y){
  console.log("Realizando uma soma")
  return x + y
}

console.log(calcular(3,5, somar))

console.log(calcular(8,4, function(x,y){
  console.log("Realizando uma subtração.")
  return x - y
}))

// EXEMPLO 001:

function exibirElemntos(elemento, indice, array){
  console.log({
    elemento,
    indice,
    array
  })
}

const lista = ["Maça", "Banana", "Laranja", "Limão"]

// for (let i = 0; i < lista.length; i++){
//   exibirElemntos(lista[i], i, lista)
// }

lista.forEach(exibirElemntos)

lista.forEach(function(elemento, indice, array){
  console.log(
    elemento,
    indice,
    array
  )
})


