// For loop - matriz de multiplicação 
console.log("Matriz");
const tamanhoMatriz = 4;
let matriz = [];

// Criando e preenchendo a matriz 
for (let linha = 0; linha < tamanhoMatriz; linha++) {
    matriz[linha] = [];

    for (let coluna = 0; coluna < tamanhoMatriz; coluna++) {
        matriz[linha] [coluna] =(linha + 1) * (coluna + 1);
    }
}

// exibir a matriz formatada
console.log("Matriz de multiplicação 4x4:");
console.log(" ", "1", "2", "3", "4" );
console.log(" +-------" );

for (let i = 0; i < tamanhoMatriz; i++) {
    let linhaFormatada = `${i + 1} |`;

    for (let j = 0; j < tamanhoMatriz; j++)  {
        linhaFormatada += `${matriz[i][j].toString().padStart(2,'')}`;
    }
    console.log(linhaFormatada);
}

// Calcular a soma da diagonal principal
let somaDiagonal = 0;
for (let d = 0; d < tamanhoMatriz; d++) {
    somaDiagonal += matriz[d][d];
}
console.log(`\nSoma da diagonal principal: ${somaDiagonal}`);

//testando
console.log("\n===Exemplo Bônus: While com Break e Continue===");;
let numerosAtual = 0;
let numerosPares = [];
let numerosImpares = [];

while (true) {
    numerosAtual++;
    if (numerosAtual > 20) {
        break;
    }
    if (numerosAtual % 5 === 0) {
        console.log(`Pulando o número ${numerosAtual} (múltiplo de 5)`);
        continue;
    }
    if (numerosAtual % 2 === 0) {
        numerosPares.push(numerosAtual);
    } else {
        numerosImpares.push(numerosAtual);
    }
}

console.log(`Números pares (execeto múltiplos de 5): [${numerosPares.join(",")}]`);
console.log(`Números pares (execeto múltiplos de 5): [${numerosImpares.join(",")}]`);