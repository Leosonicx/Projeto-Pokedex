const pokeApi = {}

pokeApi.getPokemonDetail = (pokemon) => {
  return fetch(pokemon.url).then((response) => response.json()) // Fiz um novo fetch pra URL do pokemon que quero acessar.Converti a response que ele me deu pra .json 
}

pokeApi.getPokemons = (offset = 0, limit = 10) => {
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
  fetch('https://pokeapi.co/api/v2/pokemon/10')
]).then((results) => {
  console.log(results)
})