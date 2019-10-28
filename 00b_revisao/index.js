// 1.
// [] adicionar a tag <script> no html
// [] verificar se está lendo index.js
// [] alterar cor de <body>
// [] escutar o clique do botão
// [] criar função de alterar a cor usando rgb()
// [] usar Math.random() e Math.floor() ou parseInt()

// ------------------------------------------------------------------------
// 2. melhorando o código
// [] remover repetição de código
// [] anonymous function
// [] arrow function
// [] template string

const body = document.body;
// console.log(body);

const botao = document.getElementById('trocaCor');
// console.log(botao);

botao.addEventListener('click', () =>{
    const r = geraInteiro();
    const g = geraInteiro();
    const b = geraInteiro();
    body.style.backgroundColor = 'rgb('+r+', '+g+', '+b+')'
    // console.log(r,g,b); 
});

 geraInteiro = () => {
     return  parseInt(Math.random()*255);          
}
