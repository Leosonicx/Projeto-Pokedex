function convertPokemonToLi(pokemon) {
  return `
  <li class="pokemon">
        <span class="numero-pokemon">#001</span>
        <span class="nome">${pokemon.name}</span>

        <div class="detalhe">

          <ol class="tipos">
            <li class="tipo">Planta</li>
            <li class="tipo">Veneno</li>
          </ol>

          <img src="Imagens/bulbasaur.png" alt="${pokemon.name}">
        </div>
      </li>
   `
}

const pokemonList = document.getElementById('pokemonList')

pokeApi.getPokemons().then((pokemons = []) => {
  pokemonList.innerHTML += pokemons.map(convertPokemonToLi).join('')


  // const listItems = []

  //   for (let i = 0; i < pokemons.length; i++) {
  //     const pokemon = pokemons[i];
  //     listItems.push(convertPokemonToLi(pokemon))
  //   }
  //   console.log(listItems)
  // })
  // .catch((error) => console.error(error))

})