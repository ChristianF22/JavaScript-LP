//Execício 001(For):
let spaceship = "Helmet";
let newSpaceship = "";

for(let i = 0; i < spaceship.length; i++){
  if(spaceship[i] == "e"){
    newSpaceship += "i"
  }else{
    newSpaceship += spaceship[i]
  }
}
alert(newSpaceship)

//Execício 002(For):
let spaceship = prompt("Digite o nome da nave:")

let caractere = prompt("Qual caractere vc deseja substituir?")

let newCaractere = prompt("Por qual caractere vc quer substitui?")

let newSpaceship = ""

for(let pp = 0; pp < spaceship.length; pp++){
   if(spaceship[pp] == caractere){
    newSpaceship += newCaractere
   } else {
    newSpaceship += spaceship[pp]
   }
}
alert("O novo nome da nave é: " + newSpaceship)

//Execício 003(For):
let number = Number(prompt("Numero a ser calculado"))

for(let i = 0 ; i <=20 ; i++){
   alert(`${number} * ${i} =` + number * i )
}

//Execício 004:
let palavra = prompt("Infome uma palavra:")
let newPalavra = ""

let confime = confirm("Essa palavra " + palavra + " é um polindromo?")

if(confime === true){
   alert("Palavra: " + palavra)
}else{
   for(let i = palavra.length - 1 ; i >= 0 ; i--){
      newPalavra += palavra[i]
   }
   alert("Palavra: " + palavra + "\nPalvra invertida: " +newPalavra)
}

//Execício 005:

