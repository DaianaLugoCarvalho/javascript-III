// [] instanciar XMLHttpRequest()
// [] o que fazer depois que receber a resposta
// [] fazer a requisição com open() e send()
// [] tratar response
const div = document.querySelector('#root');
const img = document.createElement('img');
const request = new XMLHttpRequest();


request.onreadystatechange = algumafuncao;

function algumafuncao() {
    console.log('olar');

    const response = request.response;
    const blob = response.blob();
    
    
    
}
const url = './img/cintiafumi.jpeg'
request.open('GET',url);
request.send();
