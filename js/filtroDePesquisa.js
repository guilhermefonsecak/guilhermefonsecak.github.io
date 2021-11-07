// esse arquivo "botao.js" altera o comportamento da nossa página

const filtroDePesquisaPorCampeao = () => {
    let input, filter, a, i, txtValue;
    input = document.getElementById("meu_input"); // pega o ID "meu_input" que foi definido no input (linha 30 no home.html)
    filter = input.value.toUpperCase(); // pega o valor do que o usuário for digitar e coloca em maiúsculo. Por exemplo: "AKALI"
    divHeroes = document.getElementById("divHeroes") // pega aquela div que encapsula todos os campeões pelo id "divHeroes"
    heroes = divHeroes.getElementsByClassName("hero"); // pega a div "hero" de cada campeão
    for (i = 0; i < heroes.length; i++) {  // faz uma iteração em cada campeão do LOL, ou seja, cada div "hero"
        hero = heroes[i].getElementsByTagName("h3")[0]; // para cada div "hero", ele captura a marcação "h3", ou seja, o nome do campeão. Exemplo: "Aatrox"
        txtValue = hero.textContent || hero.innerText; // aqui ele pega o valor do texto ou o que está dentro da marcação "h3"
        if (txtValue.toUpperCase().indexOf(filter) > -1) { // aqui ele usa uma função javascript "indexOf" para ver se encontrou o campeão digitado.
            heroes[i].style.display = ""; // se ele encontrou o campeão digitado, ele exibe com heroes[i].style.display
        } else {
            heroes[i].style.display = "none"; // se não, ele exibe tudo vazio.
        }
    }
}