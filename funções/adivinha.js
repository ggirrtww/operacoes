// While loop //

console.log("***Jogo De Adivinhação***");
const numeroSecreto = 42;
let tentativa = 0;
let palpite = 0;
let acertou = false;

// Simulando palpites aleatórios //

const palpitesPossiveis = [25, 50, 30, 45, 40, 42, 35];
let indicePalpite = 0;
while(!acertou && tentativa < 6) {
    tentativa++
    palpite = palpitesPossiveis[indicePalpite];
    indicePalpite++;
    console.log(`tentiva ${tentativa}: Palpite = ${palpite}`);
    if(palpite === numeroSecreto) {
        acertou = true;
        console.log(`🎉parabéns🎉 você acertou em ${tentativa} tentativas`);
    }else if (palpite < numeroSecreto) {
        console.log("Muito baixo! tente um número maior!");
    } else {
        console.log("Muito alto! Tente um número menor!");
    }
}

    if (!acertou) {
        console.log(`***GAME OVER!!!*** o número era ${numeroSecreto}`);
    }

// Exibir a matriz formatada

console.log("Matriz de multiplicação 4x4:");
console.log(" ", "1", "2", "3", "4");
console.log("   +---------");

for (let i = 0; i < tamanhoMatriz; i++) {
    let linhaFormatada = `${i + i} |`;
}