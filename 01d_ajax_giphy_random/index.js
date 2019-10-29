// fetch da imagem
// [] adicionar a tag <script> no html
// [] verificar se está lendo index.js
// [] usar o método fetch() para a url da API Giphy
// [] transformar o dado recebido
// [] apresentar <img>
// [] usar async/await, then(), .catch(), arrow function

alert('jscjn')

const request = new XMLHttpRequest()

const urlRequest = http://api.giphy.com/v1/stickers/random?api_key=dc6zaTOxFJmzC&tag=oops

request.onreadystatechange = mostraGif;
request.open('GET', urlRequest);
request.send();


function mostraGif() {
    if (request.readyState === 4 && request.status === 200) {
    const response = request.response;
    // console.log(response);
    const jason = Json.parse(response);
    console.log(json);
    
    const imgSrc = json.data[2].images.original.url
    
    document.querySelector('#imagem').src = imgSrc;

    console.log(json,data,images,original,url);
    

    } else {
        // console.log();
        
    }

}

    



