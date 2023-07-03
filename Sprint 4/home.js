const Key1 ="rHwAkmfzXTGty4tmSXrpEbGrQ81C0FvdpKbsSqZNd2jN3W1wIs";


function card(chave, i) {
     var xhr = new XMLHttpRequest();
    let dados;
    xhr.withCredentials = false;
    
    xhr.addEventListener("readystatechange", function() {
      if(this.readyState === 4) {
        dados = JSON.parse(this.responseText);
        card(dados);
        
      }
    });
    
    xhr.open("GET", "https://plant.id/api/v3/identification/" + chave + "?details=common_names,url,description,taxonomy,rank,gbif_id,inaturalist_id,image,synonyms,edible_parts,watering%20&language=pt");
    xhr.setRequestHeader("Api-Key", Key1);
    xhr.setRequestHeader("Content-Type", "application/json");
    
    xhr.send();

    function card(dados) {
        let div = document.getElementById("card" + i);
    let texto = '';
    console.log(dados);
    texto = texto + `
    <img class="card-img-top" src="${dados.input.images[0]}" alt="Card image cap">
    <div class="card-body">
        <h5 class="card-title">${dados.result.classification.suggestions[0].details.common_names[0]}</h5>
        
    </div>`;
    

div.innerHTML = texto;
    }
}

card("GOINwFyiQ4hi0xd", '1');

card("NkMj3d2scFhblMZ", '2');
   
card("SRN3sZ8vKV9nGO8", '3');