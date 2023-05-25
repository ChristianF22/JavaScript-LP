//Parâmetros de uma Função:
function dobro(x){
  alert("O dobro de " + x + " é " + (x * 2))
}
// dobro(4)
// dobro(5)
// dobro(6)
// dobro(7)

// dobro()

function dizerOla(nome = "mundo"){
  alert("Olá, " + nome + "!")
}
// dizerOla("Christian")
// dizerOla()

function soma(a , b, c){
  alert("O resultado da soma é " + (a + b + c) + ".")
}
// soma(12 , 2 , 5)
// soma(40 , 3 , 2) 

function criarUsuario(nome, email, senha, tipo = "admin"){
  const usuario = {
    nome, // o mesmo que nome : nome
    email, 
    senha, 
    tipo 
  }
  // console.log(usuario)
}

function mutiosParemetros(nome, telefone, endereço, email, senha){
  //,.....
}
mutiosParemetros("nome", "telefone", "endereço", "email", "senha")

// tranfomando uma função com muitos parametros em apenas um utilizando objeto:
function objetoComParemetros(usuario){
  usuario.nome 
  usuario.senha 
  usuario.email 
  usuario.telefone 
  usuario.endereço 
}

const dadosDoUsuario = {
  nome: "",
  senha: "",
  email: "",
  telefone: "",
  endereço: ""
}

// objetoComParemetros(dadosDoUsuario)
// console.log(objetoComParemetros(dadosDoUsuario))

//Retorno de uma função:
function calcularMedia(a, b){
  const media = (a + b) / 2
  return media
}
const resultado = calcularMedia(7, 5)

// console.log(resultado)

function criarProduto(nome, preco){
  const protudo = {
    nome,
    preco,
    estoque : 1
  }
  return protudo
}
// console.log(criarProduto("Notebook Intel core i5 16GB", 2500))

function areaRetangulo(altura, base){
  return base * altura
}

function areaQuadrado(lado){
  return areaRetangulo(lado, lado)
}
// console.log(areaRetangulo(5, 2))

// console.log(areaQuadrado(9))

function ola(){
  let texto = ""
  texto = "Olá, mundo"
  return texto
  console.log(texto);
  
}
// console.log(ola())

function maiorIdade(idade){
  if(idade >= 18){
    return "Maior de idade"
  }else{
    return "Menor de idade"
  }
}

//  console.log(maiorIdade(23))
//  console.log(maiorIdade(12))

//Escopo

// Escopo externo:
let pokemon = "Charmander"

function evoluir(){
  pokemon = "Charmeleon"
}

// console.log(pokemon)
// evoluir()
// console.log(pokemon)

//Execicio 001:
let option = ""
let res = 0
let base = 0
let altura = 0
let lado = 0
let baseMaior = 0
let baseMenor = 0
let pi = 3.14

function triangulo(base, altura){
  return base * altura / 2
}

function retangulo(base, altura){
  return base * altura;
}

function quadrado(lado){
  return lado * lado;
}

function trapezio(base_maior, base_menor, altura){
  return (base_maior + base_menor) * altura / 2;
}

function circulo(raio){
  return (pi * raio * raio)
}

do{
  option = parseInt(prompt(
    "Bem Vindo a Calculadora Geométrica:\n"
    + "==== Menu Opções =====\n"
    + "1. Área do triângulo:\n"
    + "2. Área do retângulo:\n"
    + "3. Área do quadrado\n"
    + "4. Área do trapézio\n"
    + "5. Área do círculo\n"
    + "6. Sair do programa"
  ))

  switch(option){
    case 1:
      base = parseFloat(prompt("Digite um valor da base de um triângulo:"));
      altura = parseFloat(prompt("Digite o valor da altura do triângulo:"));
      res = triangulo(base, altura);
      alert("O resultado do triângulo e: "+ res);
      break;
    case 2:
      base = parseFloat(prompt("Digite o Valor da base do retângulo:"));
      altura = parseFloat(prompt("Digite o valor da altura do retângulo:"));
      res = retangulo(base, altura);
      alert("O resultado do retângulo e: "+ res);
      break;
    case 3:
      lado = parseFloat(prompt("Digite um valor do lado de um Quadrado:"));
      res = quadrado(lado);
      alert("O resultado do quadrado é: "+ res);
      break;
    case 4:
      baseMaior =  parseFloat(prompt("Qual e a base Maior do trapezio:"));
      baseMenor = parseFloat(prompt("Qual e a base Menor do trapezio:"));
      altura = parseFloat(prompt("Qual e a altura do trapezio:"));
      res = trapezio(baseMaior, baseMenor, altura);
      alert("O resultado do trapézio e: "+ res);
      break;
    case 5:
      raio = parseFloat(prompt("Digite um valor de um raio de um circulo:"));
      res = circulo(raio);
      alert("O resultado do círculo é: "+ res);
      break;
    case 6:
      alert("Saindo do Sistema..")
      break;
    default:
      alert("Opção Invalida!");
  }
} while(option !== 6);

// Métodos:

let pessoa = {
  nome: "Christian",
  idade: 19,
  dizerOla(){
    // console.log("Olá, mundo! Meu nome é " + this.nome + " Minha idade é " + this.idade)
  }
}

// console.log(pessoa)

// pessoa.dizerOla()

//FUNÇÕES RECURSIVAS:
      //Uma função que fica chamando ela mesma.
function dividir(num){
  console.log(num)
  if (num % 2 === 0){
    dividir(num / 2)
  }else{
    return num
  }
}
//  dividir()

  // fatorial de 5 : !5 === 5 * 4 * 3 * 2 * 1 === 5 * 4!
  function fatorial(num){
    console.log("Número: " + num)
    if(num === 0){ // caso base
      return 1
    } else if(num === 1){
      return 1
    }else{
      console.log(num + " * !" + (num - 1))
      return num * fatorial(num - 1)
    }
  }

  // console.log(fatorial())

  //FUNÇÕES ANÔNIMAS:
   function somar(a,b){
    return a + b
   }

   let opercao = somar
   
   console.log(opercao(4 ,5))

   opercao = function (a,b){
    return a - b
   }
   
   console.log(opercao(36, 13)) 












