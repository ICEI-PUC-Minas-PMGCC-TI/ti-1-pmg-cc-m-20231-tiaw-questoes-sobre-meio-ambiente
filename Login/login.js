var User = "usuário";
console.log(User);

function logar(){
    var login = document.getElementById('Login').value;
    console.log(login);
    var senha = document.getElementById('Senha').value;
    console.log(senha);
    senha = CryptoJS.MD5(senha).toString();
    console.log(senha);
    var dados = localStorage.getItem('Comerciantes');
    console.log(dados);
    if (dados) {
        dados = JSON.parse(dados);
        console.log(dados);
        for (let i = 0; i < dados.length; i++) {
            if (dados[i].nome === login && dados[i].senha === senha) {
                User = dados[i].nome;
                console.log(User);
            }
        }
    } else {
        //faça algo aqui se o banco de dados estiver vazio
    }
}