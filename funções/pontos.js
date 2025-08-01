console.log("===👉Sistema De Pontuação👌===")

let pontuacao = 0;
let nivel = 1;
let vidas = 3;

//-Simulando as rodadas do jogo
for (let rodada = 1; rodada <= 8; rodada++); {
    let pontosRodada = Math.floor(Math.random() * 101);
}

console.log(`\n--- RODADA ${rodada} ---`);
console.log(`Pontos Obitidos: ${pontosRodada}`);

//-Adicionando pontos à pontuação total

pontuacao += pontosRodada;

//-Bônus baseado na performance+

if(pontosRodada >= 80) {
    console.log("🎆Exelente! Bônus De 20 Pontos!");
    pontuacao += 20;
} else if (pontuacao >= 60) {
    console.log("🎉Bom! Bônus De 10 Pontos");
    pontuacao += 10;
} else if (pontuacao < 30) {
    console.log("😒Ruim! Perdeu 1 Vida.");
    vidas--;
    if (vidas <= 0) {
        console.log("☠️Game Over☠️ Suas Vidas Acabaram!");
        break;
    }
}

//-Sistema de progressão de nível

if (pontuacao >= nível * 150) {
    nível++;
    console.log(`✨Subiu De Nível! Agora Você Está No Nível✨ ${nivel}`);
    console.log("❤️Vida Extra Ganha!❤️");
    vidas++;
}

//-Exibindo Status Atual

console.log(`Pontuação Total: ${pontuacao}`);
console.log(`Nível Atual: ${nivel}`);
console.log(`Vidas Restante: ${vidas}`);

//-Pausa Entre As Rodadas

console.log("⌛Preparando a próxima rodada...⌛\n");

//-Relatório Final Do Jogo

console.log("\n" + "=".repeat(40));
console.log("Relatório Final Do Jogo");
console.log("=".repeat(40));
console.log(`🏆Pontuação Final: ${pontuacao}pontos`);
console.log(`🏴Nível Alcançado: ${nivel}`);
console.log(`❤️Vidas Restantes: ${vidas}`);

//-Sistema De Classificação

let Classificacao;
if(pontuacao >= 600) {
    Classificacao = "🥇 1°Lugar";
}else if (pontuacao >= 450) {
    Classificacao = "🥈 2°Lugar";
}else if (pontuacao >= 300) {
    Classificacao = "🥉 3°Lugar";
}else if (pontuacao >= 150) {
    Classificacao = "👎Treine Mais👎";
}else {
    Classificacao = "🤮N00B🤮";
}

console.log(`🎖️ Classificação: ${}`)