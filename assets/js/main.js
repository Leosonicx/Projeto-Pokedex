const carregarMaisBotao = document.getElementById('carregarMaisBotao')
const limit = 10
let offset = 0;

function loadPokemonItens(limit, offset) {
  pokeApi.getPokemons(limit, offset).then((pokemons = []) => {
    const newHtml = pokemons.map(convertPokemonToLi).join('')
    pokemonList.innerHTML += newHtml
    }
  )}

function convertPokemonToLi(pokemon) {
  return `
      <li class="pokemon ${pokemon.type}">
          <span class="numero-pokemon">#${pokemon.number}</span>
          <span class="nome">${pokemon.name}</span>
          <div class="detalhe">
              <ol class="tipos">
                  ${pokemon.types.map((type) => `<li class="tipo ${type}">${type}</li>`).join('')}
              </ol>
              <img src="${pokemon.photo}" alt="${pokemon.name}">
          </div>
      </li>
  `
}

const pokemonList = document.getElementById('pokemonList')

pokeApi.getPokemons().then((pokemons = []) => {
  const newHtml = pokemons.map(convertPokemonToLi).join('')
  pokemonList.innerHTML = newHtml
})

loadPokemonItens(limit, offset)

carregarMaisBotao.addEventListener('click', () => {
  offset += limit
  loadPokemonItens(limit, offset)
})

  // const listItems = []

  //   for (let i = 0; i < pokemons.length; i++) {
  //     const pokemon = pokemons[i];
  //     listItems.push(convertPokemonToLi(pokemon))
  //   }
  //   console.log(listItems)
  // })
  // .catch((error) => console.error(error))

