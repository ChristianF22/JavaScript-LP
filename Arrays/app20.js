//Execício 001(Arrays):
// const listaDeconpras = ["Açucar, false"]
// console.log(listaDeconpras)

// listaDeconpras[0] = "Arroz"
// listaDeconpras[1] = "Feijão"
// listaDeconpras[2] = "Carne"
// listaDeconpras[3] = 10
// listaDeconpras[5] = "Batata"

// console.log(listaDeconpras)

// console.log(listaDeconpras[4])

//Execício 002(Arrays):
// const valores = [1, 2, 5, 8, 12]
// console.log(valores) 

// valores[1] = "Christian"
// valores[3] = 20
// valores[4] = "JS"


// console.log(valores)

// console.log(valores[30])

//Exeício 003 Fila de espera (Arrays):
let lista = []
let opções = prompt(
  "Pacientes na fila:" +
  "\nDigite 1 para entrar na fila." +
  "\nDigite 2 para consultar um paciente." +
  "\nDigite 3 para sair do sistem."
)

do{
  let paciente = ""
  for(i = 0; i < lista.length; i++){
    paciente += (i+1) + "°" + "- lista[i] + \n"
  }
  opções = prompt("Pacientes na Fila:\n"+
  patients+
  "\nDigite 1 para entrar na fila\n"+
  "Digite 2 para consultar um paciente\n"+
  "Digite 3 para sair do sistema"
  )
  switch (opções){
    case "1":
        const newPatient = prompt("Digite o nome do novo paciente: ")
        lista.push(newPatient)
        console.log(newPatient)
        break
    case "2":
        const patientConsult = lista.shift()
        if(patientConsult != undefined){
            alert("O paciente "+patientConsult+" entrou para a consulta")
        } else {
            alert("Não há pacientes na fila!")
        }
        break
    case "3":
        alert("Encerrando o sistema...")
        break
    default:
        alert("Opção inválida!")
        break            
}
}while(opções !== "3")

// Execício 004  Pilha de cartas :
const baralho = []
let escolhaUmaOpção = ""

do{
  escolhaUmaOpção = prompt(
    "Cartas no baralho: " + baralho.length + 
    "\n1. Adicionar uma carta." +
    "\n2. Puxar uma carta." +
    "\n3. Sair do jogo"
  )

  switch(escolhaUmaOpção){
    case "1":
      const novaCarta = prompt("Qual é a carta?")
      baralho.push(novaCarta)
      break
    case "2":
      const cartaPuxada = baralho.pop()
      if(!cartaPuxada){
        alert("Não há nenhuma carta no baralho")
      }else{
        alert("Você puxou um(a) " +cartaPuxada)
      }
    case "3":
      alert("Saindo............")
      break
      default:
        alert("Opção inválida!")
  }
}while(escolhaUmaOpção !== 3)

//Execicio 005:










