const Key1 ="rHwAkmfzXTGty4tmSXrpEbGrQ81C0FvdpKbsSqZNd2jN3W1wIs";


function lerImagem() {
    var imagem = "imagens/31.png"
  
      toDataURL(imagem, function(dataUrl) {
        imagem = dataUrl;
        //console.log('RESULT:', imagem)
        APIRequest(imagem);
      })
  }

function toDataURL(imagem, callback) {
    var xhr = new XMLHttpRequest();
    xhr.onload = function() {
      var reader = new FileReader();
      reader.onloadend = function() {
        callback(reader.result);
      }
      reader.readAsDataURL(xhr.response);
    };
    xhr.open('GET', imagem);
    xhr.responseType = 'blob';
    xhr.send();
  }

function APIRequest(imagem) {
  var data = JSON.stringify({
    "images": [
      imagem
    ],
    "similar_images": true,
    "health": 'all'
  });
  
  var xhr = new XMLHttpRequest();
  var dados;
  xhr.withCredentials = false;
  
  xhr.addEventListener("readystatechange", function() {
    if(this.readyState === 4) {
      //console.log(this.responseText);
      dados = JSON.parse(this.responseText);
      dados = dados.access_token;
      fullData(dados);

    }
  });
  
  xhr.open("POST", "https://plant.id/api/v3/identification");
  xhr.setRequestHeader("Api-Key", Key1);
  xhr.setRequestHeader("Content-Type", "application/json");
  
  xhr.send(data);
}

function fullData(chave) {

var xhr = new XMLHttpRequest();
var dados;
xhr.withCredentials = false;

xhr.addEventListener("readystatechange", function() {
  if(this.readyState === 4) {
    console.log(this.responseText);
    //dados = JSON.parse(this.responseText);
    localStorage.setItem("dados", dados);
  }
});

xhr.open("GET", "https://plant.id/api/v3/identification/" + chave + "?details=common_names,url,description,taxonomy,rank,gbif_id,inaturalist_id,image,synonyms,edible_parts,watering%20&language=pt");
xhr.setRequestHeader("Api-Key", Key1);
xhr.setRequestHeader("Content-Type", "application/json");

xhr.send();
}