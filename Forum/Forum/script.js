function enviarPergunta() {

    console.log("Iniciando o processo de envio da Pergunta...");

    // Obter os dados da pergunta
    var cardUserElement = document.getElementById("username");
    var cardTitleElement = document.getElementById("titulo");
    var cardSubjectElement = document.getElementById("Assunto");

    var cardUser = cardUserElement.value;
    var cardTitle = cardTitleElement.value;
    var cardSubject = cardSubjectElement.value;

    console.log("Dados da pergunta obtidos.");

    // Obter a descrição digitada na textarea
    var perguntaInput = document.getElementById("conteudo");
    var pergunta = perguntaInput.value;

    console.log("Pergunta obtida.");

    // Gerar data e hora da pergunta
    var data_hora_atual = new Date();
    var datahora = data_hora_atual.toLocaleString();

    // Criar um objeto com os dados da pergunta
    var dados = {
        
            nomedeusuario: cardUser,
            horario: datahora,
            Pergunta: cardTitle,
            assunto: cardSubject,
            textpergunta: pergunta
        
    };

    console.log("Dados formatados para armazenamento em JSON:");
    console.log(dados);

    // Verificar se já existem dados armazenados no LocalStorage
    var storedData = localStorage.getItem("TopicosData");
    var newData;

    if (storedData) {
        // Se existir, converter para array e adicionar novo item
        var storedDataArray = JSON.parse(storedData);
        if (Array.isArray(storedDataArray)) {
            storedDataArray.push(dados);
        } else {
            storedDataArray = [storedDataArray, dados];
        }
        newData = JSON.stringify(storedDataArray);
    } else {
        // Se não existir, criar um novo array com o objeto atual
        newData = JSON.stringify([dados]);
    }

    // Armazenar os dados atualizados no LocalStorage
    localStorage.setItem("TopicosData", newData);

    // Limpar os campos de entrada de texto e textarea
    cardUserElement.value = "";
    cardTitleElement.value = "";
    cardSubjectElement.value = "";
    perguntaInput.value = "";

    console.log("Dados armazenados no LocalStorage com a chave 'TopicosData'.");
}
