// 1.
// [] adicionar a tag <script> no html
// [] verificar se está lendo index.js
// [] alterar cor de <body>
// [] escutar o clique do botão
// [] criar função de alterar a cor usando rgb()
// [] usar Math.random() e Math.floor() ou parseInt()

// alert("JS OK")
// console.log("ola");


//pegar o body
const body = document.body;
console.log(body);


//mudar a cor do body
// body.style.backgroundColor = 'purple'


// const n = Math.random();
// const n2 = n * 255;
// const int = parseInt(n2)

// console.log('numero', n);
// console.log('numero2', n2);
// console.log('int', int);

// const intRandom = parseInt(Math.random()* 255)

// console.log(intRandom);



//Pegar o botao
const botao = document.getElementById('trocaCor');
console.log(botao);


//ouvir o click e mudar a cor com rgb
botao.addEventListener('click',clicoubotao);
function clicoubotao() {
    const r =parseInt(Math.random()* 255);
    const g = parseInt(Math.random()* 255);
    const b = parseInt(Math.random()* 255);

    body.style.backgroundColor = 'rgb('+r+', '+g+', '+b+')'
    console.log(r,g,b);
    
    
       
}
