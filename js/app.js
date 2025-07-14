let jogosAlugados = 0;

function contarEExibirJogosAlugados() {
   console.log (`Total de jogos alugados: ${jogosAlugados}`);   
}
//função para alterar o status ao clicar no botão
function alterarStatus(id) {
   //declaração de variáveis para modificar o necessário com base no index.html 
   let gameSelecionado = document.getElementById(`game-${id}`); //selecionar o game
   let imagem = gameSelecionado.querySelector('.dashboard__item__img');//selecionar o fundo
   let botaoAlugarDevolver = gameSelecionado.querySelector('.dashboard__item__button');//selecionar o botão Alugar ou Devolver
   let nomeJogo = gameSelecionado.querySelector('.dashboard__item__name');
// condição para alterar os elementos necessários ao clicar o botão
     
     if (imagem.classList.contains('dashboard__item__img--rented')) {
       if (confirm(`Você tem certeza que deseja devolver o jogo ${nomeJogo.textContent}?`)) {
        imagem.classList.remove('dashboard__item__img--rented');//altera o fundo
        botaoAlugarDevolver.classList.remove('dashboard__item__button--return');//altera o botão
        botaoAlugarDevolver.textContent = 'Alugar';//altera o texto do botão
        jogosAlugados--;
     //lógica para a possibilidade contrária do que foi colocado acima
         }
     } else {
        imagem.classList.add('dashboard__item__img--rented');
        botaoAlugarDevolver.classList.add('dashboard__item__button--return');
        botaoAlugarDevolver.textContent = 'Devolver';
        jogosAlugados++;
     }

     contarEExibirJogosAlugados();

}
// Inicializa a contagem considerando que os jogos já começam alugados
document.addEventListener('DOMContentLoaded',function(){
    jogosAlugados = document.querySelectorAll('.dashboard__item__img--rented').length;
    contarEExibirJogosAlugados();
});

// Saber se a palavra é um palindromo
function palavraPalindromo() {
let palavra = prompt('Digite uma palavra por favor');
let letrasSeparadas = palavra.split("");
let palavraInvertida = letrasSeparadas.reverse();
palavraInvertida = palavraInvertida.join("");
if (palavra == palavraInvertida) {
   console.log (`A palavra ${palavra} é um palindromo!`); 
} else {
   console.log (`A palavra ${palavra} não é um palindromo!`);  
}

}

palavraPalindromo();
