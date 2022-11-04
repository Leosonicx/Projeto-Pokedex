const pokeApi = {}

pokeApi.getPokemonDetail = (pokemon) => {
  return fetch(pokemon.url).then((response) => response.json()) // Fiz um novo fetch pra URL do pokemon que quero acessar.Converti a response que ele me deu pra .json 
}

pokeApi.getPokemons = (offset = 0, limit = 50) => {
  const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

  return fetch(url) // Peguei a lista no servidor
  .then((response) => response.json()) // Ela me deu o HTTP response e eu converti pra .json
  .then((jsonBody) => jsonBody.results) // Peguei a lista de pokémons
  .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail)) // Mapeei a lista de pokemons em uma lista de requisições do detalhe dos pokémons. (Linha 4 do código pra entender)
  .then((detailRequests) => Promise.all(detailRequests)) // Estou com a lista de requisição e estou agora esperando que todas as requisições terminem.
  .then((pokemonsDetails) => pokemonsDetails) // Após as requisições terminarem nos dará uma lista dos detalhes de cada pokémon.
  }

Promise.all([
  fetch('https://pokeapi.co/api/v2/pokemon/1'),
  fetch('https://pokeapi.co/api/v2/pokemon/2'),
  fetch('https://pokeapi.co/api/v2/pokemon/3'),
  fetch('https://pokeapi.co/api/v2/pokemon/4'),
  fetch('https://pokeapi.co/api/v2/pokemon/5'),
  fetch('https://pokeapi.co/api/v2/pokemon/6'),
  fetch('https://pokeapi.co/api/v2/pokemon/7'),
  fetch('https://pokeapi.co/api/v2/pokemon/8'),
  fetch('https://pokeapi.co/api/v2/pokemon/9'),
  fetch('https://pokeapi.co/api/v2/pokemon/10'),
  fetch('https://pokeapi.co/api/v2/pokemon/11'),
  fetch('https://pokeapi.co/api/v2/pokemon/12'),
  fetch('https://pokeapi.co/api/v2/pokemon/13'),
  fetch('https://pokeapi.co/api/v2/pokemon/14'),
  fetch('https://pokeapi.co/api/v2/pokemon/15'),
  fetch('https://pokeapi.co/api/v2/pokemon/16'),
  fetch('https://pokeapi.co/api/v2/pokemon/17'),
  fetch('https://pokeapi.co/api/v2/pokemon/18'),
  fetch('https://pokeapi.co/api/v2/pokemon/19'),
  fetch('https://pokeapi.co/api/v2/pokemon/20'),
  fetch('https://pokeapi.co/api/v2/pokemon/21'),
  fetch('https://pokeapi.co/api/v2/pokemon/22'),
  fetch('https://pokeapi.co/api/v2/pokemon/23'),
  fetch('https://pokeapi.co/api/v2/pokemon/24'),
  fetch('https://pokeapi.co/api/v2/pokemon/25'),
  fetch('https://pokeapi.co/api/v2/pokemon/26'),
  fetch('https://pokeapi.co/api/v2/pokemon/27'),
  fetch('https://pokeapi.co/api/v2/pokemon/28'),
  fetch('https://pokeapi.co/api/v2/pokemon/29'),
  fetch('https://pokeapi.co/api/v2/pokemon/30'),
  fetch('https://pokeapi.co/api/v2/pokemon/31'),
  fetch('https://pokeapi.co/api/v2/pokemon/32'),
  fetch('https://pokeapi.co/api/v2/pokemon/33'),
  fetch('https://pokeapi.co/api/v2/pokemon/34'),
  fetch('https://pokeapi.co/api/v2/pokemon/35'),
  fetch('https://pokeapi.co/api/v2/pokemon/36'),
  fetch('https://pokeapi.co/api/v2/pokemon/37'),
  fetch('https://pokeapi.co/api/v2/pokemon/38'),
  fetch('https://pokeapi.co/api/v2/pokemon/39'),
  fetch('https://pokeapi.co/api/v2/pokemon/40'),
  fetch('https://pokeapi.co/api/v2/pokemon/41')
]).then((results) => {
  console.log(results)
})