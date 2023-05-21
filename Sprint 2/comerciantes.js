// Função para salvar os dados do formulário no localStorage
function salvarComerciantes() {
    // Obtém os valores dos campos do formulário
    var nome = document.getElementById('nome').value;
    var cnpj = document.getElementById('CNPJ').value;
    var email = document.getElementById('email').value;
    var local = document.getElementById('local').value;
    var senha = document.getElementById('Senha').value;
    var confirmarSenha = document.getElementById('Confirmar').value;

    // Criptografa a senha usando MD5
    var senhaCriptografada = CryptoJS.MD5(senha).toString();

    // Verifica se já existem dados no localStorage
    var dadosArmazenados = localStorage.getItem('Comerciantes');
    var Comerciantes = [];

    if (dadosArmazenados) {
        // Se já existem dados, converte o JSON para array de objetos
        Comerciantes = JSON.parse(dadosArmazenados);
    }

    // Cria um objeto com os dados do formulário
    var novoFormulario = {
        nome: nome,
        cnpj: cnpj,
        email: email,
        local: local,
        senha: senhaCriptografada,
        confirmarSenha: confirmarSenha
    };

    // Adiciona o novo objeto ao array
    Comerciantes.push(novoFormulario);

    // Converte o array em formato JSON
    var dadosJSON = JSON.stringify(Comerciantes);

    // Armazena os dados atualizados no localStorage com um nome específico
    localStorage.setItem('Comerciantes', dadosJSON);
}

// Chamada da função para salvar os dados do formulário quando o formulário for submetido
document.getElementById('cadastro').addEventListener('submit', function(e) {
e.preventDefault(); // Impede o envio do formulário
salvarComerciantes();
});