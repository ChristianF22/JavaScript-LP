//Execício 001:
// let distanceInLY = prompt("Digite a distância em anos-luz")
// let chosenOption = prompt("Para qual unidade deseja conveter?\n1. Parse(pc)\n2. Unidade Astronômica (AU)" + "\n3. Quilômetros (km)\n\n(Digite o número da opção desejada)")
// let chosenUnity
// let convertedDistance
// switch(chosenOption) {
//     case "1":
//         chosenUnity = "Parsec"
//         convertedDistance = distanceInLY * 0.306601
//         break
//     case "2":
//         chosenUnity = "Unidade Astronômica"
//         convertedDistance = distanceInLY * 63241.1
//         break
//     case "3":
//         chosenUnity = "Quilômetros"
//         convertedDistance = distanceInLY * 9.5 * Math.pow(10, 12)
//         break
//     default:
//         chosenUnity = "Unidade não identificada"
//         convertedDistance = "Conversão fora do escopo"
// }
// alert("Distância em Anos-luz: " + distanceInLY + "\n" + chosenUnity + ": " + convertedDistance)

//Execício 002:
// let valorReal = prompt("Digite quantos em reais vc tem:")
// let chosenOptions = prompt("Escolha qual a moeda vc dejesa trocar o seu real:\n1-Euro\n2-Dolar\n3-Francos suiços\n4-Libras esterlinas")
// let moeda 
// let Conversão
// switch(chosenOptions){
//   case "1":
//     moeda = "Euro"
//     Conversão = valorReal / 0.21
//     break
//   case "2":
//     moeda = "Dolar"
//     Conversão = valorReal / 0.20
//     break
//   case "3":
//     moeda = "Francos suiços"
//     Conversão =  valorReal / 0.19
//     break
//   case "4":
//     moeda = "Libras estelinas"  
//     Conversão = valorReal / 0.16
//     break
//     default:
//       moeda = "Moeda não encontrada"
//       Conversão = "Conversão invalida"
// }
// alert("Seu valor em reais: " + valorReal + "\nTipo da moeda escolhida" +moeda+ "\no valor convertido: " + Conversão + ".")

//Execício 003:
// let valor1 = prompt("Digite o primeiro valor:")
// let valor2 = prompt("Digite o segundo valor:")
// valor1 = parseFloat(valor1)
// valor2 = parseFloat(valor2)
// let operação = prompt(
//   "Escolha o tipo de operação:" +
//   "\n1.Soma" +
//   "\n2.Subtração" +
//   "\n3.Divisão" +
//   "\n4.Multiplicação"
// )
// let soma
// let subtração
// let divisão
// let multiplicação
// switch(operação){
//   case "1":
//     soma = valor1 + valor2
//     alert("O resultado da soma foi: " + soma )
//   break  
//   case "2":
//     subtração = valor1 - valor2
//     alert("O resultado da subtração foi: " + subtração )  
//   break  
//   case "3":
//     divisão = valor1 / valor2
//     alert("O resultado da divisão foi: " + divisão)
//   break  
//   case "4":
//     multiplicação = valor1 * valor2
//     alert("O resultado da multiplicação: " + multiplicação)  
//   break  
//   default:
//     alert("Opção não encontrada.")
//     alert("Operação invalida......")  
// }

//Execício 004:
// let total = prompt("Informe o valor da compra:")
// let valor_compra
// let codigo = prompt(
//   "Digite seu código: " +
//   "\n1. Cliente comum" +
//   "\n2. Funcionário" +
//   "\n3. Cliente vip"
// )

// switch(codigo){
//   case "1":
//     alert("Valor total a ser pago: R$" + total)
//   break
//   case "2":
//     valor_compra = total - (total * 0.1)
//     alert("Valor total a ser pago: R$" + valor_compra)
//   break  
//   case "3":
//     valor_compra = total - (total * 0.05)
//     alert("Valor total a ser pago: R$" + valor_compra)
//   break
//   default:
//     alert("Opção inválida")
// }

//Execício 005:
// var num = prompt("Escolha um número de 1 e 12:")
// switch(num){
//   case "1":
//     alert("Janeiro")
//   break
//   case "2":
//     alert("Fevereiro")
//   break
//   case "3":
//     alert("Março")
//   break
//   case "4":
//     alert("Abril")
//   break
//   case "5":
//     alert("Maio")
//   break
//   case "6":
//     alert("Junho")
//   break
//   case "7":
//     alert("Julho")
//   break
//   case "8":
//     alert("Agosto")
//   break
//   case "9":
//     alert("Setembro")
//   break
//   case "10":
//     alert("Outubro")
//   break
//   case "11":
//     alert("Novembro")
//   break
//   case "12":
//     alert("Dezembro")
//   break
//  default:
//   alert("Opção inválido") 

// }

//Execício 006:
// const menu = prompt(
//   "Digite (N ou M) para calcular a: " +
//   "\nN- A taxa de natalidade" +
//   "\nM- A taxa de mortalidade"
// )
// let taxa_natalidade
// let taxa_mortalidade
// let num_habit
// let num_obitos
// let num_nascimentos
// switch(menu){
//   case "N":
//     num_nascimentos = prompt("Digite o número de nascimentos: ")
//     num_habit = prompt("Digite o número de habitantes: ")
//     taxa_natalidade = (num_nascimentos * 1000)/num_habit
//     alert("A taxa de natalidade = " + taxa_mortalidade)
//   break
//   case "M":
//       num_obitos = prompt("Digite o número de obitos: ")
//       num_habit = prompt("Digite o número de habitantes: ")
//       taxa_mortalidade = (num_obitos * 1000)/num_habit
//       alert("A taxa de mortalidade = " + taxa_mortalidade)
//     break
//   default:
//     alert("Opção não válida")
// }

//Execício 007:
// let valor = prompt("Informe o valor do produto:")
// let opção = prompt(
//   "Forma de pagamento: " +
//   "\n1- À vista" +
//   "\n2-parcelado"
//  )
// let desconto
// let valor_Final

// switch(opção){
//   case "1":
//     desconto = valor * 0.05
//     valor_Final = valor - desconto
//     alert("O total a pagar à vista = R$" + valor_Final)
//   break
//   case "2":
//     alert("O total da compra parcelado foi = R$" +valor)
//   break
//   default:
//     alert("Ops, não é possível exibir, digite a opção 1 ou 2")
// }

//Execício 008:
// let fruta = prompt("Frutas:\n1.maçã\n2.Kiwi\n3.melancia")

// switch(fruta){
//   case "maçã":
//     alert("Não vendemos esta fruta aqui")
//   break
//   case "Kiwi":
//     alert("Estamos com escassez de Kiwis")
//   break
//   case "melancia":
//     alert("Aqui está, são 3 reais o quilo")
//   break
//   default:
//     alert("Erro no console")
// }

//Execício 009:








