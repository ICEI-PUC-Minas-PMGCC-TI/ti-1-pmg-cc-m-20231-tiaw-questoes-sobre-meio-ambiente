

function logar() {
    let logged = false;
    var login = document.getElementById('Login').value;
    var senha = document.getElementById('Senha').value;
    var dados = localStorage.getItem('Cadastro');
    if (dados) {
        dados = JSON.parse(dados);
        console.log(dados);
        for (let i = 0; i < dados.length; i++) {
            if (dados[i].usuario === login && dados[i].senha === senha) {
                logged = true;
                usuario = dados[i].usuario;
                localStorage.setItem('logado',logged)
                localStorage.setItem('usuario',usuario)
            }
        }
    }
    if (logged) {
        window.location.href = "index.html";
    }

    else {

        //faça algo aqui se o banco de dados estiver vazio
    }
}