
// Função para salvar os dados do formulário no localStorage
function salvarUsuario() {

    console.log("lançou");
    // Obtém os valores dos campos do formulário
    var email = document.getElementById('email').value;
    var senha = document.getElementById('Senha').value;
    var confirmarSenha = document.getElementById('Confirmar').value;
    var usuario = document.getElementById('usuario').value;

    // Verifica se já existem dados no localStorage
    var dadosArmazenados = localStorage.getItem('Cadastro');
    var Cadastro = [];

    if (dadosArmazenados) {
        // Se já existem dados, converte o JSON para array de objetos
        Cadastro = JSON.parse(dadosArmazenados);
    }
    for (let i = 0; i < Cadastro.length; i++) {
        if (Cadastro[i].usuario === usuario) {
            alert("Nome de usuário já existe.");
            return;
        }
    }

    // Cria um objeto com os dados do formulário
    var novoFormulario = {
        email: email,
        usuario: usuario,
        senha: senha,
        confirmarSenha: confirmarSenha,
    };
    //Alertar caso senha e confirmarsenha difentes
    if (senha == confirmarSenha) {
        // Adiciona o novo objeto ao array
        Cadastro.push(novoFormulario);

        // Converte o array em formato JSON
        var dadosJSON = JSON.stringify(Cadastro);

        // Armazena os dados atualizados no localStorage com um nome específico
        localStorage.setItem('Cadastro', dadosJSON);

        window.location.href = "../Sprint 4/login.html";
    }
    else {
        alert("SENHA E CONFIRMAR SENHA DIFERENTES");
    }
}

// Chamada da função para salvar os dados do formulário quando o formulário for submetido
document.getElementById('submitButton').addEventListener('click', function (e) {
    e.preventDefault(); // Impede o envio do formulário
    salvarUsuario();

});