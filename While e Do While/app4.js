//Execício 001 (WHILE):
let velocidade = 0
while(velocidade > 0){
   alert("O carro está a " + velocidade + "Km/h")
   velocidade -= 20
   alert("Diminuindo 20 Km/h")
}
alert("O carro parou.")

//Execício 002(WHILE):

//Execício 003(WHILE):
const turista = prompt("E aí, turista! Qual é o seu nome?")
let cidades = ""
let contagem = 0
let continuar = prompt("Você visitou alguma cidade? (Sim/Não)")

while (continuar === "Sim") {
  let cidade = prompt("Qual é o nome da cidade visitada?")
  cidades += " - " + cidade + "\n"
  contagem++
  continuar = prompt("Você visitou alguma outra cidade? (Sim/Não)")
}
alert(
  "Turista: " + turista +
  "\nQuantidade de cidades visitadas: " + contagem +
  "\nCidades visitadas:\n" + cidades
)

//Execício 005( Do While):
let opçao = ""

do{
 opçao = prompt(
  "Seja bem-vindo(a)\n" +
  "\nEscolha uma das opções abaixo:" +
  "\n1. Opção 1" +
  "\n2. Opção 2" +
  "\n3. Opção 3" +
  "\n4. Opção 4" +
  "\n5. Encerra" 
 )

switch(opçao){
 case "1":
  alert("Você escolheu a opção 1")
  break
 case "2":
  alert("Você escolheu a opção 2")
  break
 case "3":
  alert("Você escolheua opção 3")
  break
 case "4":
  alert("Você escolheu a opção 4")
  break
 case"5":
  alert("Você escolheu encerra.")
  alert("Encerrando....")
 break
 default:
  alert("Opção inválida.")
 }

}while (opçao !== "5")

//Execício 006(Do while):
let saldo = prompt("Informe a quantidade de dinheiro disponível:")
saldo = parseFloat(saldo)
 let opção = ""

 do{
  opção = prompt(
    "Saldo disponível: R$" + saldo +
    "\n1. Adicionar dinheiro" +
    "\n2. Remover dinheiro" +
    "\n3. Sair"
  )

  switch(opção){
    case "1":
      saldo += parseFloat(prompt("Informe o valor a ser adicionado:"))
    break
    case "2":
        saldo -= prompt("Informe o valor a ser removido:")
    break    
    case "3":
      alert("Saindo...")
    break  
    default:
      alert("Opção invalida")
  }
   
 }while(opção !== "3")

//Execício 007:
let sorte = ""
do{
  sorte = prompt(
    "Escolha o seu número e veja uma frase para motivar o seu dia:" +
    "\n 1" +
    "\n 2" +
    "\n 3" +
    "\n 4" +
    "\n 5" 
  )
  switch(sorte){
    case "1":
      alert("A persistência é o caminho do êxito.")
      break
    case "2":
      alert("O sucesso nasce do querer, da determinação e persistência em se chegar a um objetivo. Mesmo não atingindo o alvo, quem busca e vence obstáculos, no mínimo fará coisas admiráveis.")  
      break
    case "3":
      alert("Lute. Acredite. Conquiste. Perca. Deseje. Espere. Alcance. Invada. Caia. Seja tudo o quiser ser, mas, acima de tudo, seja você sempre.")
      break
    case "4":
      alert("A vitalidade é demonstrada não apenas pela persistência, mas pela capacidade de começar de novo.")
      break
    case "5":
      alert("Só se pode alcançar um grande êxito quando nos mantemos fiéis a nós mesmos.")  
      break
    default:
      alert("Opção invalida.............!!!!!!!!!!!!!!!!!!!")  

  }
}while(sorte !== "5")




  






