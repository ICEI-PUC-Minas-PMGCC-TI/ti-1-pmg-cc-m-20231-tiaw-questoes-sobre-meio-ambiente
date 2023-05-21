// Função para salvar os dados do formulário no localStorage
function salvarsalvarPequenoAgricultor() {
  // Obtém os valores dos campos do formulário
  var nome = document.getElementById('nome').value;
  var sobrenome = document.getElementById('sobrenome').value;
  var senha = document.getElementById('senha').value;
  //var Telefone = document.getElementById('Televone').value;
  var email = document.getElementById('email').value;
  /*var AreaCultivo = document.getElementById('D2B1').value; 
  var Cereal = document.getElementsByClassName('D2B2_1').value;
  var Fruticultura = document.getElementsByClassName('D2B2_2').value;
  var Horticultura = document.getElementsByClassName('D2B2_3').value;
  var Cafeicultura = document.getElementsByClassName('D2B2_4').value;
  var Producao = document.getElementById('D2B3').value;
  var interesse = document.getElementById('D2B4').value;*/

  // Criptografa a senha usando MD5
  var senhaCriptografada = CryptoJS.MD5(senha).toString();

  // Verifica se já existem dados no localStorage
  var dadosArmazenados = localStorage.getItem('cadastroPA');
  var salvarPequenoAgricultor = [];

  if (dadosArmazenados) {
      // Se já existem dados, converte o JSON para array de objetos
      salvarPequenoAgricultor = JSON.parse(dadosArmazenados);
  }

  // Cria um objeto com os dados do formulário
  var novoFormulario = {
      nome: nome,
      sobrenome: sobrenome,
      senha: senha,
     // Telefone: Televone,
      email: email,
     /* Area: D2B1,
      Cereais: D2B2_1,
      Frutas: D2B2_2,
      Folhas: D2B2_3,
      Cafe: D2B2_4,
      Producao: D2B3,
      Interesses: D2B4,*/
  };

  // Adiciona o novo objeto ao array
  salvarPequenoAgricultor.push(novoFormulario);

  // Converte o array em formato JSON
  var dadosJSON = JSON.stringify(salvarPequenoAgricultor);

  // Armazena os dados atualizados no localStorage com um nome específico
  localStorage.setItem('salvarPequenoAgricultor', dadosJSON);
}

// Chamada da função para salvar os dados do formulário quando o formulário for submetido
document.getElementById('F1').addEventListener('submit', function(e) {
e.preventDefault(); // Impede o envio do formulário
salvarsalvarPequenoAgricultor();
});