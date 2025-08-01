// Gerador de senhas

function gerarSenha(tamanho=8, incluirNumeros=true, incluirEspeciais=false) {
    let caracteres = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

    if (incluirNumeros) {
        caracteres += "0123456789";
    }

    if(incluirEspeciais) {
        caracteres += "@#$%&+-*/";
    }

    let  senha = "";
    for (let i = 0; i < tamanho; i++) {
        let indiceAleatorio = Math.floor(Math.random() * caracteres.length);
        senha += caracteres[indiceAleatorio];
    }

    return{
        senha: senha,
        tamanho: senha.length,
        configuracao: {
            incluirNumeros: incluirNumeros,
            incluirEspeciais: incluirEspeciais
        }
    };

}

// Gerar diferentes senhas

console.log("Senha com especial", gerarSenha(10,true,true));