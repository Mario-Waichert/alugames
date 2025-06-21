//função para alterar o status ao clicar no botão
function alterarStatus(id) {
   //declaração de variáveis para modificar o necessário com base no index.html 
   let gameSelecionado = document.getElementById(`game-${id}`); //selecionar o game
   let imagem = gameSelecionado.querySelector('.dashboard__item__img');//selecionar o fundo
   let botaoAlugarDevolver = gameSelecionado.querySelector('.dashboard__item__button');//selecionar o botão Alugar ou Devolver
// condição para alterar os elementos necessários ao clicar o botão
     if (imagem.classList.contains('dashboard__item__img--rented')) {
        imagem.classList.remove('dashboard__item__img--rented');//altera o fundo
        botaoAlugarDevolver.classList.remove('dashboard__item__button--return');//altera o botão
        botaoAlugarDevolver.textContent = 'Alugar';//altera o texto do botão
     //lógica para a possibilidade contrária do que foi colocado acima
     } else {
        imagem.classList.add('dashboard__item__img--rented');
        botaoAlugarDevolver.classList.add('dashboard__item__button--return');
        botaoAlugarDevolver.textContent = 'Devolver';
     }
   
}


