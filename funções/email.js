// Valida Email

function validarEmail(email) {
    if (!email.includes('@') || !email.includes('.')) {
        return {
            valido:false,
            mensagem: "Email deve conter @ e pelo menos um ponto."
        };
    }

    // Verificar se @ vem antes do ponto
    let posicaoArroba = email.indexOf('@');
    let posicaoPonto = email.lastIndexOf('.');

    if(posicaoArroba >= posicaoPonto) {
        return {
            valido:false,
            mensagem: "Formato de email inválido."
        };
    }

    return {
        valido:true,
        mensagem:"Email válido."
    };
}

console.log(validarEmail("victorhugo@gmail.com.br"));
console.log(validarEmail("usuario"));
console.log(validarEmail("usuario_usuariocom"));

//booleano true or false


//capitulina_guaira@gmail.com
//digite um e-mail somente com as letras minúsculas.