let departureDanteEntry= prompt("Digite a data de partida (formato DD/MM/YYYY)")

let departureDante = moment(departureDanteEntry, "DD/MM/YYYY")

let today = moment()

let dateDiff = today - departureDante

let chosenOption = prompt("Escolha como gostaria de exibir o tempo de partida\n1- Segundos\n2- Minutos\n3- Horas\n4- Dias ")

if(chosenOption == "1"){
  let secondsOfDeparture = Math.round(dateDiff / 1000)
  alert("Tempo de vôo: " + secondsOfDeparture + " segundos.")
}else if(chosenOption == "2"){
  let minutesOfDeparut = Math.round(dateDiff / 1000 / 60)
  alert("Tempo de vôo: " + minutesOfDeparut + " minutos.")
}else if(chosenOption == "3"){
  let horasOfDeparut = Math.round(dateDiff / 1000 / 3600)
  alert(" Tempo de vôo: " + horasOfDeparut + " horas.")
}else if(chosenOption == "4"){
  let diasOfDeparut = Math.round(dateDiff/ 1000 / 3600 / 24)
  alert("Tempo de vôo: " + diasOfDeparut + " dia.")
}else{
  alert("Opção invàlida.")
}