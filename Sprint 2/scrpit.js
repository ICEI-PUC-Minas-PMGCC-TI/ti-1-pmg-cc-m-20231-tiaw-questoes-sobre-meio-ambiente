function leDados() {
  let strDados = localStorage.getItem('db');
  let objDados = {};


  if (strDados) {
      objDados = JSON.parse(strDados);
  }else{
      objDados = {produtos: [ 
        {Nomeproprietario:"Gabriel Samarane",
          Floricultura:"Flores Seu José", 
          Senha:"carlosLIP",
          Confirmar:"carlosLIP",
          CNPJ:"111111/0001-01",
          Email:"verde@mar.com",
          CEP:"30150170",
          Número:"121"}]}
  }

  return objDados;
}

function salvaDados(dados) {
  localStorage.setItem('db', JSON.stringify(dados))
}

function cadastroFloricultura(){

    let objDados = leDados();
  
    let strNomedoproprietario = document.getElementById('Nomedoproprietario').value;
    let strFloricultura = document.getElementById('floricultura').value;
    let strSenha = document.getElementById('Senha').value;
    let strConfirmar = document.getElementById('Confirmar').value;
    let strCNPJ = document.getElementById('CNPJ').value;
    let strEmail = document.getElementById('email').value;
    let strCEP = document.getElementById('CEP').value;
    let strNúmero = document.getElementById('Numero').value;
      let novoCadastroFloricultura = {
          Nomeproprietario: strNomedoproprietario,
          Floricultura: strFloricultura,
          Senha: strSenha,
          Confirmar: strConfirmar,
          CNPJ: strCNPJ,
          Email: strEmail,
          CEP: strCEP,
          Número: strNúmero
      };
  
    objDados.produtos.push(novoCadastroFloricultura)
    salvaDados(objDados);
    console.log(objDados)
  
  }
  
  document.getElementById('iudi').addEventListener('click', cadastroFloricultura);