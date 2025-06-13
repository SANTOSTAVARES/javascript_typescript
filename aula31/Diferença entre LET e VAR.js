//Exemplo 1
const verdadeira = true;

// Let tem escopo de bloco { ... bloco }
// Var só tem escopo de função

let nome = 'Luiz'; // criando
var nome2 = 'Luiz';

if (verdadeira) {
    let nome = 'Otávio'; // criando
    // console.log(nome, nome2);

    if (verdadeira) {
        let nome = 'Outra coisa';
        console.log(nome, nome2);
    }
}

//Exemplo 2
//O código abaixo gera erro
const verdadeira = true;

// Let tem escopo de bloco { ... bloco }
// Var só tem escopo de função

let nome = 'Luiz'; // criando
var nome2 = 'Luiz';

if (verdadeira) {
    let nome = 'Otávio'; // criando
    
    if (verdadeira) {
        var nome2 = 'Otávio'; // Redeclarada
        console.log(nome, nome2);
        let nome = 'Outra coisa';
    }
}

//Exemplo 3
const verdadeira = true;

// Let tem escopo de bloco { ... bloco }
// Var só tem escopo de função

let nome = 'Luiz'; // criando
var nome2 = 'Luiz'; // criando

if (verdadeira) {
    let nome = 'Otávio'; // criando
    var nome2 = 'Rogerio'; // redeclarando

    if (verdadeira) {
        var nome2 = 'Ronaldo'; // redeclarando
        let nome = 'Outra coisa';
    }
}

console.log(nome, nome2);