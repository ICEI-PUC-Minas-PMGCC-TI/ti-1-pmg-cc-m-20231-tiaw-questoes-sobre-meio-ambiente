function cadastroFloricultura(){

    let objDados = leDados();
  
    let strNomedoproduto = document.getElementById('Nomedoproprietario').value;
    let strConjuntoAlimentar = document.getElementById('floricultura').value;
    let strValor = document.getElementById('Valor').value;
    let strEmpresa = document.getElementById('Empresa').value;
      let strContato = document.getElementById('Contato').value;
      let strEmail = document.getElementById('email').value;
      let strCEP = document.getElementById('CEP').value;
      let strNúmero = document.getElementById('Numero').value;
      let novoProduto = {
          Nomedoproduto: strNomedoproduto,
          ConjuntoAlimentar: strConjuntoAlimentar,
          Valor: strValor,
          Empresa: strEmpresa,
          Contato: strContato,
          Email: strEmail,
          CEP: strCEP,
          Número: strNúmero
      };
  
    objDados.produtos.push(novoProduto)
    salvaDados(objDados);
    console.log(objDados)
  
  }
  
  document.getElementById('iudi').addEventListener('click', incluirProduto);