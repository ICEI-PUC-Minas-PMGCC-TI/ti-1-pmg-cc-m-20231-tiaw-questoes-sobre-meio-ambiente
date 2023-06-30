function carregaPerfil() {
    var info = JSON.parse(localStorage.getItem('Cadastro'));
    console.log(info[info.length - 1]);

    // Obtém uma referência ao elemento
    var usuarioNomeElement = document.getElementById('usuario');

    // Atualiza o elemento com o nome do usuário
    usuarioNomeElement.textContent = info[info.length - 1].usuario;
    console.log(info[info.length - 1].usuario)

    var arrayPlantas = acharDados();


    exibeContatos(arrayPlantas);

}

function acharDados() {
    //Iterando pelos dados para achar as informações do usuario
    var info = JSON.parse(localStorage.getItem('db_contato'));
    var data = info.data;
    let arrayPlantas = [];
    var logado = localStorage.getItem('logado');
    for (let i = 0; i < data.length; i++) {
        if (data[i].logado === logado) {
            arrayPlantas.push(data[i]);
            console.log(arrayPlantas);
        }
    }
    return arrayPlantas;
}
function exibeContatos(db) {
    // Remove todas as linhas do corpo da tabela

    $("#table-contatos").html("");

    // Popula a tabela com os registros do banco de dados
    for (i = 0; i < db.length; i++) {   
        let contato = db[i];
        $("#table-contatos").append(`<tr><td scope="row">${contato.id}</td>
                                        <td>${contato.nome}</td>
                                        <td>${contato.local}</td>
                                        <td>${contato.cientifico}</td>
                                        <td>${contato.idade}</td>
                                        <td>${contato.logado}</td>
                                    </tr>`);
    }
}
