const pokeApi = {}

function convertPokeApiDetailToPokemon(pokeDetail) {
    const pokemon = new Pokemon()
    pokemon.number = pokeDetail.id
    pokemon.name = pokeDetail.name

    const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name)
    const [type] = types

    pokemon.types = types
    pokemon.type = type

    pokemon.photo = pokeDetail.sprites.other.dream_world.front_default

    return pokemon
}

pokeApi.getPokemonDetail = (pokemon) => {
  return fetch(pokemon.url)
      .then((response) => response.json()) // Fiz um novo fetch pra URL do pokemon que quero acessar.Converti a response que ele me deu pra .json
      .then(convertPokeApiDetailToPokemon)
}

pokeApi.getPokemons = (offset = 0, limit = 10) => {
  const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

  return fetch(url) // Peguei a lista no servidor
      .then((response) => response.json()) // Ela me deu o HTTP response e eu converti pra .json
      .then((jsonBody) => jsonBody.results) // Peguei a lista de pokémons
      .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail)) // Mapeei a lista de pokemons em uma lista de requisições do detalhe dos pokémons. (Linha 4 do código pra entender)
      .then((detailRequests) => Promise.all(detailRequests)) // Estou com a lista de requisição e estou agora esperando que todas as requisições terminem.
      .then((pokemonsDetails) => pokemonsDetails)  // Após as requisições terminarem nos dará uma lista dos detalhes de cada pokémon.
  }