//Execico 001 de Objetos:

let imoveis = {
  cadastro: [],
  proprietário: [],
  quartos: [],
  banheiros: [],
  garagem: [],
};

let menu;

let garagem;

do {
  menu = prompt(
    `Cadastro de imóveis.\nQuantidade de imóveis cadastrados ${imoveis.cadastro.length}\n1 - Salvar um imóvel 2 - Mostrar imóveis salvos 3- Sair`
  );

  switch (menu) {
    case "1":
      imoveis.cadastro.push("Imóvel 01");
      imoveis.proprietário.push(prompt("Nome do proprietário"));
      imoveis.quartos.push(Number(prompt("Quantidade de quartos")));
      imoveis.banheiros.push(Number(prompt("Quantidade de banheiros")));
      imoveis.garagem.push(prompt("Tem garagem?"));
      break;
    case "2":
      alert(
        `Imóvel do: ${imoveis.proprietário} - \nNúmero de quartos: ${imoveis.quartos} - \nNúmero de banheiros: ${imoveis.banheiros} - \nPossui garagem? ${imoveis.garagem} - `
      );
      break;
    case "3":
      alert("Programa encerrado");
      break;
  }
} while (menu != "3");

//Execicio 002:
let identificação = {
  nome: [],
  idade: [],
  comida: [],
  musica: [],
  hobbs: []
}

let gg

do{
  gg = prompt("Fale mas sobre vc:\n1-iniciar\n2-suas informações\n3-sair")

  switch(gg){
    case "1":
      identificação.nome.push(prompt("Digite o seu nome:"))
      identificação.idade.push(prompt("Digite a sua idade:"))
      identificação.comida.push(prompt("Digite a sua comidade favorida:"))
      identificação.musica.push(prompt("Digite a suas musica favorita:"))
      identificação.hobbs.push(prompt("Oq vc gosta de fazer no tempo livre:"))
      break
    case "2":
     alert(
      `Seu nome: ${identificação.nome}\nSua idade: ${identificação.idade}\nSua comida favorita: ${identificação.comida}\nSua musica favorita: ${identificação.musica}\nSeu hobb: ${identificação.hobbs}`
     )
     break
    case "3":
      alert("Saindo......") 
  }
}while(gg !== 3)