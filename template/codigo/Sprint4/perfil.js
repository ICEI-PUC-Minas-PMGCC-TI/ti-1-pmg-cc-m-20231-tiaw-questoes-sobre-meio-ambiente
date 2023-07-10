function navbar() {
    var logado = localStorage.getItem("logado");

    if (logado == "true") {
        var accountLink = document.getElementById("account-link");
        accountLink.innerHTML = '<a href="perfil.html">Perfil</a>'; // Substitui o link Cadastro por um link Perfil
        var loginLink = document.getElementById("login-link");
        loginLink.innerHTML = "<button onclick='logOut()' id = 'btnlogout'>Logout</button>"; // Substitui o link Login por um botão Logout que chama a função logOut()
    }
};


var db_contato_inicial = {
    "data": [
        {
            "id": "0",
            "nome": "Minha amiga Planta",
            "Local": "Terra",
            "científico": "Amigus Plantus",
            "idade": "2",
            "logado": "olivier"
        }
    ]
}

var db = JSON.parse(localStorage.getItem('db_contato'));
if (!db) {
    db = db_contato_inicial
};
function carregaPerfil() {
    console.log("teste")
    var nomeUsuario = localStorage.getItem('usuario');
    var cadastro = JSON.parse(localStorage.getItem('Cadastro'))
    var email = null;
    for (let i = 0; i < cadastro.length; i++) {
        if (cadastro[i].usuario === nomeUsuario) {
            email = cadastro[i].email
        }
    }

    // Obtém uma referência ao elemento
    var usuarioNomeElement = document.getElementById('usuario');
    var usuarioEmailElement = document.getElementById('email')
    // Atualiza o elemento com o nome do usuário
    usuarioNomeElement.textContent = nomeUsuario;
    usuarioEmailElement.textContent = email;
}

function acharDados() {
    //Iterando pelos dados para achar as informações do usuario


    localStorage.setItem('db_contato', JSON.stringify(db))

    var info = JSON.parse(localStorage.getItem('db_contato'));
    console.log(info)
    var data = info.data;
    let arrayPlantas = [];
    var usuario = localStorage.getItem('usuario');
    for (let i = 0; i < data.length; i++) {
        if (data[i].logado === usuario) {
            arrayPlantas.push(data[i]);
            console.log(arrayPlantas);
        }
    }
    return arrayPlantas;
}
// Função que atualiza a cor do texto da tabela com base no modo
function atualizaCorTabela() {
    // Obtém o modo atual do localStorage
    var mode = localStorage.getItem("mode");

    // Obtém todas as células da tabela
    var tableCells = document.querySelectorAll("#table-contatos td");

    // Define a cor do texto com base no modo
    var textColor = mode === "dark-mode" ? "white" : "black";

    // Atualiza a cor do texto de todas as células da tabela
    tableCells.forEach(function (cell) {
        cell.style.color = textColor;
    });
}

// Chama a função para atualizar a cor da tabela quando a página é carregada
window.onload = atualizaCorTabela;

// Chama a função para atualizar a cor da tabela quando o modo é alterado
modeToggle.addEventListener("click", atualizaCorTabela);

function exibeContatos(parametro) {
    // Remove todas as linhas do corpo da tabela
    $("#table-contatos").html("");

    // Popula a tabela com os registros do banco de dados
    for (i = 0; i < parametro.length; i++) {
        let contato = parametro[i];
        let novaLinha = $("<tr><td scope='row'>" + contato.id + "</td><td>" +
            contato.nome + "</td><td>" +
            contato.local + "</td><td>" +
            contato.cientifico + "</td><td>" +
            contato.idade + "</td><td>" +
            contato.logado + "</td></tr>");

        // Verifica qual tema está ativo
        if ($('body').hasClass('dark')) {
            // Se o modo dark estiver ativo, aplica a cor do texto branco
            novaLinha.css("color", "white");
        } else {
            // Se o modo light estiver ativo, aplica a cor do texto preto
            novaLinha.css("color", "black");
        }

        // Adiciona a nova linha à tabela
        $("#table-contatos").append(novaLinha);
    }

    atualizaCorTabela();
}



// Caso os dados já estejam no Local Storage, caso contrário, carrega os dados iniciais
// Exibe mensagem em um elemento de ID msg
function displayMessage(msg) {
    $('#msg').html('<div class="alert alert-warning">' + msg + '</div>');
}

function insertContato(contato) {
    // Calcula novo Id a partir do último código existente no array (PODE GERAR ERRO SE A BASE ESTIVER VAZIA)
    let novoId = 1;
    if (db.data.length != 0)
        novoId = parseInt(db.data[db.data.length - 1].id) + 1;  // Converte o ID para número antes de somá-lo
    console.log(novoId)
    let novoContato = {
        "id": novoId.toString(),  // Converte o ID novamente para string antes de atribuí-lo ao novo contato
        "nome": contato.nome,
        "local": contato.local,
        "idade": contato.idade,
        "cientifico": contato.cientifico,
        "logado": contato.logado
    };

    // Insere o novo objeto no array
    db.data.push(novoContato);
    displayMessage("Contato inserido com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_contato', JSON.stringify(db));
}

function updateContato(id, contato) {
    // Localiza o indice do objeto a ser alterado no array a partir do seu ID
    console.log(contato)
    let index = db.data.map(obj => parseInt(obj.id)).indexOf(id);

    // Altera os dados do objeto no array
    if (index != -1) { // Verifica se encontrou o índice correto
        db.data[index].nome = contato.nome,
            db.data[index].local = contato.local,
            db.data[index].idade = contato.idade,
            db.data[index].cientifico = contato.cientifico,
            db.data[index].logado = contato.logado

        displayMessage("Contato alterado com sucesso");

        // Atualiza os dados no Local Storage
        localStorage.setItem('db_contato', JSON.stringify(db));
    } else {
        displayMessage("ID do contato não encontrado");
    }
}


function deleteContato(id) {
    // Filtra o array removendo o elemento com o id passado
    db.data = db.data.filter(function (element) { return element.id != id });

    displayMessage("Contato removido com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_contato', JSON.stringify(db));
}