function alterarStatus(id) {
   let gameSelecionado = document.getElementById(`game-${id}`);
   let imagem = gameSelecionado.querySelector('.dashboard__item__img');
   let botaoAlugarDevolver = gameSelecionado.querySelector('.dashboard__item__button');

     if (imagem.classList.contains('dashboard__item__img--rented')) {
        imagem.classList.remove('dashboard__item__img--rented');
        botaoAlugarDevolver.classList.remove('dashboard__item__button--return');
        botaoAlugarDevolver.textContent = 'Alugar';

     } else {
        imagem.classList.add('dashboard__item__img--rented');
        botaoAlugarDevolver.classList.add('dashboard__item__button--return');
        botaoAlugarDevolver.textContent = 'Devolver';
     }
   
}


