
function logar() {
    var login = document.getElementById('Login').value;
    var senha = document.getElementById('Senha').value;
    var dados = localStorage.getItem('Cadastro');
    if (dados) {
        dados = JSON.parse(dados);
        console.log(dados);
        for (let i = 0; i < dados.length; i++) {
            if (dados[i].usuario === login && dados[i].senha === senha) {
                localStorage.setItem('logado', login);
                //window.location.href = "../Sprint 4/home.html";
                console.log(login);
                break;
            }
        }
    }
    else {

        //faça algo aqui se o banco de dados estiver vazio
    }
}