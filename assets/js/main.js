const offset = 0
const limit = 150
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${10}`

fetch(url).then(function (response) {
  console.log(response)
})