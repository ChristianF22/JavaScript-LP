
//Exercício 01 de LP:
let pilotName = prompt("Qual seu nome, piloto?")
let velocity = 0
let newVelocity = prompt("A que velocidade você gostaria de acelerar?")
let confirmVelocity = confirm("Estamos acelerando para " + newVelocity + "km/s")
if(confirmVelocity) {
    velocity = newVelocity
}
if(velocity <= 0) {
    alert("Nave está parada. Considere partir e aumentar a velocidade")
} else if(velocity < 40) {
    alert("Você está devagar. Podemos aumentar mais.")
} else if(velocity < 80) {
    alert("Parece uma boa velocidade para manter.")
} else if(velocity < 100) {
    alert("Velocidade alta. Considere diminuir")
} else {
    alert("Velocidade perigosa. Controle automático forçado.")
}
alert("Piloto: " + pilotName + "\nVelocidade: " + velocity + "km/s")

// //Exercício 02 de LP:
let aluno = prompt("Qual o seu nome, aluno?")
let nota = 0
let nota1= prompt("Qual foi a sua nota?")
let ageconfirm = confirm("Aluno: " + aluno + "\nA sua nota nota foi " + nota1 + ".")
if(ageconfirm){
    nota = nota1
}
if(nota >= 7){
    alert("Aprovado.")
}else if(nota == 10){
    alert("Aprovado com Distinção.")
}else if(nota < 7){
    alert("Reprovado.")
}else{
    alert("Seu burro!!")
}

// //Exercício 03 de LP:
var salario;
var salarioNovo;
var aumento;

salario = parseFloat(prompt("Digite o Salário do Colaborador: ") + ".");

if (salario <= 280) {
    aumento = (salario * 20 / 100);
    salarioNovo = aumento + salario;
    alert("Salário Antes do Reajuste: R$ " + salario.toFixed(2) + ".\n-- Aumento Aplicado 20% ----\nValor do Aumento: R$ " + aumento.toFixed(2) + ".\nSalário Após o Aumento: R$ " + salarioNovo.toFixed(2) + ".");
}

else if (salario > 280 && salario <= 700) {
    aumento = (salario * 15 / 100);
    salarioNovo = aumento + salario;
    alert("Salário Antes do Reajuste: R$ " + salario.toFixed(2) + ".\n-- Aumento Aplicado 15% --\nValor do Aumento: R$ " + aumento.toFixed(2) + ".\nSalário Após o Aumento: R$ " + salarioNovo.toFixed(2) + ".");
}

else if (salario > 700 && salario <= 1500) {
    aumento = (salario * 10 / 100);
    salarioNovo = aumento + salario;
    alert("Salário Antes do Reajuste: R$ " + salario.toFixed(2) + ".\n-- Aumento Aplicado 10% --\nValor do Aumento: R$ " + aumento.toFixed(2) + ".\nSalário Após o Aumento: R$ " + salarioNovo.toFixed(2) + ".");
}

else {
    aumento = (salario * 5 / 100);
    salarioNovo = aumento + salario;
    alert("Salário Antes do Reajuste: R$ " + salario.toFixed(2) + ".\n-- Aumento Aplicado 5% --\nValor do Aumento: R$ " + aumento.toFixed(2) + ".\nSalário Após o Aumento: R$ " + salarioNovo.toFixed(2) + ".");
}
//Exercício 04 de LP:




