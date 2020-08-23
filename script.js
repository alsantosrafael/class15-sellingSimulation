/*
  Não altere nada ABAIXO disso até o próximo comentário;

  -- Este código permite que tenhamos uma 
  -- experiência interativa com o usuário;
  -- Não é necessário entendê-lo neste momento.
*/
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

/*
  Não altere nada ACIMA deste comentário;;
*/

/**
 * Escreva seu código aqui embaixo;
 */
const chalk = require('chalk');
const vendinhaDeFrutas = [
  {
    nome: 'uva',
    preco: 300,
    quant: 5
  },
  {
    nome: 'mamao papaya',
    preco: 400,
    quant: 3
  },
  {
    nome: 'banana',
    preco: 350,
    quant: 10
  },
  {
    nome: 'maca',
    preco: 400,
    quant: 20
  }
]

rl.question('Olá, querido cliente! Qual fruta você gostaria de comprar?', 
(resposta) => {
  let flag = false;
  for(let i = 0; i < vendinhaDeFrutas.length; i++){
    if(resposta === vendinhaDeFrutas[i].nome){
      console.log(chalk.greenBright(`Achei aqui o(a) ${resposta}!`))
      flag = true
      rl.close()
    }
  } if(flag === false){
    console.log(chalk.redBright('Não consegui achar ' + `${resposta}!`))
    rl.close()
  }
  
});