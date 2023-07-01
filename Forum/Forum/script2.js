function enviarResposta(jsonIndex) {
    console.log("Iniciando o processo de envio da resposta...");

    // Obter os dados da pergunta
    /* var cardUserElement = document.querySelector(".card-user");
    var cardTitleElement = document.querySelector(".card-title");
    var cardSubjectElement = document.querySelector(".card-subject");
    var cardTextElement = document.querySelector(".card-text");

    var cardUser = cardUserElement.textContent;
    var cardTitle = cardTitleElement.textContent;
    var cardSubject = cardSubjectElement.textContent;
    var cardText = cardTextElement.textContent; */

    /**
     * Não vamos precisar de nada disso acima...
     * O unico dado da pergunta que precisamos é o index dela, que chega como parametro da funcao
     * Pois... e se tivesse mais de uma pergunta?
     */
    
    console.log("Dados da pergunta obtidos.");

    // Obter a resposta digitada na textarea
    // Veja que colocamos um indentificador para caso houver mais de uma pergunta
    var respostaInput = document.getElementById("resposta-input" + jsonIndex);
    var resposta = respostaInput.value;

    console.log("Resposta obtida.");

    // Criar um objeto com os dados da pergunta e resposta
    
    // Busca os dados armazenados no localStorage
    var dados = localStorage.getItem("forumData");

    // Se tiver dados, converte o JSON para array
    if(dados) {
        dados = JSON.parse(dados);
    }
    
    console.log("Dados formatados para armazenamento em JSON:");

    console.log(dados);

    // Se nao tiver dados, tem que definir a variavel dados como um array vazio
    if(dados == null) {
        dados = [];
    }

    // Adiciona uma resposta ao array, referenciada ao index da pergunta
    dados.push({
        pergunta: jsonIndex,
        resposta: resposta
    });

    // Converter o objeto para JSON
    var dadosJSON = JSON.stringify(dados);

    console.log("Dados convertidos para JSON:");

    console.log(dadosJSON);

    // Armazenar os dados no LocalStorage
    localStorage.setItem("forumData", dadosJSON);

    console.log("Dados armazenados no LocalStorage com a chave 'forumData'.");

    // Recarrega a pagina
    document.location.reload();
}

function toggleAnswerForm(jsonIndex) {
    var answerForm = document.getElementById("answer-form"+jsonIndex);
    var toggleButton = document.querySelector(".toggle-button"+jsonIndex);

    if (answerForm.style.display === "none") {
        answerForm.style.display = "block";
        toggleButton.textContent = "Ocultar Resposta";
    } else {
        answerForm.style.display = "none";
        toggleButton.textContent = "Responder";
    }
}

// Funcao que limpa a memoria de respostas
function limpaRespostas(chave) {
  localStorage.removeItem(chave);
    document.location.reload();
}

// Funcao que busca as respostas, a partir de um index da pergunta
function buscaRespostas(jsonIndex) {
    var r = '';
    // Busca as respostas
    var dados = localStorage.getItem("forumData");
    // Se tiver vazio, ja mostra que nao tem resposta e sai da funcao
    if(typeof dados == 'undefined' || dados == null) {
        return '<hr><p>Nenhuma resposta ainda.</p>';
    } else {
        // Possui respostas... convertendo para array
        var dataArray = JSON.parse(dados);
        // Para cada resposta, monta o html
        dataArray.forEach(function(resp, indexresp){
            // So pega se é da pergunta referenciada
            if(resp.pergunta == jsonIndex) {
                r += '<hr>';
                r += '<p style="margin-bottom:10px;">' +  resp.resposta + '</p>';
            }
        });
    }
    if(r == '') {
        return '<hr><p>Nenhuma resposta ainda.</p>';
    }
    return r;
}
/*
var request = new XMLHttpRequest();
request.open("GET", "db.json", true);
request.onreadystatechange = function() {
    if (request.readyState === 4 && request.status === 200) {
        // O jsonData agora é um ARRAY (vetor) pois pode ter mais de uma pergunta, certo?
        var jsonDataArray = JSON.parse(request.responseText);
        // Aqui eu vou passar pergunta por pergunta (num foreach), cada um com sua(s) resposta(s)
        var cardHTML = '';
        jsonDataArray.forEach(function(jsonData, index) {
            respostas = buscaRespostas(index);
            cardHTML += `
            <div class="user-info">
                <p class="card-user">${jsonData.nomedeusuario} // ${jsonData.horario}</p><br><br>
            </div>
            <h2 class="card-title">${jsonData.Pergunta}</h2><br>
            <p class="card-subject">${jsonData.assunto}</p><br>
            <p class="card-text">${jsonData.textpergunta}</p><br><br>

            <button class="toggle-button${index}" onclick="toggleAnswerForm(${index})">Responder</button>

            <div class="as-respostas">
            ${respostas}
            </div>

            <form id="answer-form${index}" style="display: none;"><br>
                <label for="resposta">Resposta:</label>
                <textarea id="resposta-input${index}" class="answer-input" placeholder="Digite sua resposta"></textarea>
                <div class="button-container">
                    <button type="button" class="submit-button" onclick="enviarResposta(${index})">Enviar</button>
                </div>
            </form>
            `; 
        });
        document.getElementById('card-container').innerHTML = cardHTML;
    }
};
request.send();*/


function obterDadosJSON() {
  var request = new XMLHttpRequest();
  request.open("GET", "db.json", true);
  request.onreadystatechange = function() {
    if (request.readyState === 4 && request.status === 200) {
      var jsonDataArray = JSON.parse(request.responseText);
      console.log(jsonDataArray);
      exibirPerguntas(jsonDataArray);
    }
  };
  request.send();
}

function obterDadosLocalStorage() {
  var jsonDataArray = JSON.parse(localStorage.getItem('TopicosData'));
  if (jsonDataArray) {
    console.log(jsonDataArray);
    exibirPerguntas(jsonDataArray);
  } else {
    console.log('Nenhum dado encontrado no LocalStorage.');
  }
}

function exibirPerguntas(jsonDataArray) {
  var cardHTML = '';
  jsonDataArray.forEach(function(jsonData, index) {
    var respostas = buscaRespostas(index);
    cardHTML += `
    <div calss="card-style">  
    <div class="user-info">
        <p class="card-user">${jsonData.nomedeusuario} // ${jsonData.horario}</p><br><br>
      </div>
      <h2 class="card-title">${jsonData.Pergunta}</h2><br>
      <p class="card-subject">${jsonData.assunto}</p><br>
      <p class="card-text">${jsonData.textpergunta}</p><br><br>

      <button class="toggle-button${index}" onclick="toggleAnswerForm(${index})">Responder</button>

      <div class="as-respostas">
        ${respostas}
      </div>

      <form id="answer-form${index}" style="display: none;"><br>
        <label for="resposta">Resposta:</label>
        <textarea id="resposta-input${index}" class="answer-input" placeholder="Digite sua resposta"></textarea>
        <div class="button-container">
          <button type="button" class="submit-button" onclick="enviarResposta(${index})">Enviar</button>
        </div>
      </form>
      </div>
    `;
  });

  document.getElementById('card-container').innerHTML = cardHTML;
}
