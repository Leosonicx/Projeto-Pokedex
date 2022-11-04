function converPokemonTypesToLi(pokemonTypes) {
  return pokemonTypes.map((typeSlot) => `<li class="tipo">${typeSlot.type.name}</li>`)
}

function convertPokemonToLi(pokemon) {
  return `
  <li class="pokemon">
        <span class="numero-pokemon">${pokemon.order}</span>
        <span class="nome">${pokemon.name}</span>

        <div class="detalhe">

          <ol class="tipos">
            ${converPokemonTypesToLi(pokemon.types).join('')}
          </ol>

          <img src="${pokemon.sprites.other.dream_world.front_default}" alt="${pokemon.name}">
        </div>
      </li>
   `
}

const pokemonList = document.getElementById('pokemonList')

pokeApi.getPokemons().then((pokemons = []) => {
  const newHtml = pokemons.map(convertPokemonToLi).join('')
  pokemonList.innerHTML += newHtml

  // const listItems = []

  //   for (let i = 0; i < pokemons.length; i++) {
  //     const pokemon = pokemons[i];
  //     listItems.push(convertPokemonToLi(pokemon))
  //   }
  //   console.log(listItems)
  // })
  // .catch((error) => console.error(error))

})