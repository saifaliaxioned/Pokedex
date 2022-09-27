// Pokedex apiCall function
var pokemonCards = document.querySelector('.pokemon-cards');

var counter = 150;

getPokemon();

function getPokemon() {
  for (let i = 1; i <= counter; i++) {
    fetchPokemons(i);
  }
}

function fetchPokemons(i) {
  fetch('https://pokeapi.co/api/v2/pokemon/')
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    showPokemons(data.results);
  })
}

function showPokemons(cards) {
  console.log(cards);
}



















