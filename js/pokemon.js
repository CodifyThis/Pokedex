"use strict";
// pokemon tcg api key  19ae96ee-d959-40e6-854d-a4e1ee0c7ca0

const pokemonTypeChart = {
  normal:
  {
    advantage: {
      rock: .5,
      ghost: 0,
      steel: .5,
    },
    weakness: {
      fighting: 2,
      ghost: 0
    }
  },
  fire:
  {
    advantage: {
      fire: .5,
      water: .5,
      grass: 2,
      ice: 2,
      bug: 2,
      rock: .5,
      dragon: .5,
      steel: 2,
    },
    weakness:
    {
      fire: .5,
      water: 2,
      grass: .5,
      ice: .5,
      ground: 2,
      bug: .5,
      rock: 2,
      dragon: .5,
      steel: .5,
      fairy: .5
    }
  },
  water:
  {
    advantage: {
      fire: 2,
      water: .5,
      grass: .5,
      ground: 2,
      rock: 2,
      dragon: .5,
    },
    weakness:
    {
      fire: .5,
      water: .5,
      grass: 2,
      electric: 2,
      ice: .5,
      steel: .5,
    },

    grass:
    {
      advantage: {
        normal: [null, null],
        fire: .5,
        water: 2,
        grass: .5,
        electric: null,
        ice: null,
        fighting: null,
        poison: null,
        ground: 2,
        flying: null,
        psychic: null,
        bug: null,
        rock: 2,
        ghost: null,
        dragon: null,
        dark: null,
        steel: null,
        fairy: null
      },
      weakness: {
        normal: null,
        fire: .5,
        water: 2,
        grass: .5,
        electric: null,
        ice: null,
        fighting: null,
        poison: null,
        ground: 2,
        flying: null,
        psychic: null,
        bug: null,
        rock: 2,
        ghost: null,
        dragon: null,
        dark: null,
        steel: null,
        fairy: null
      },
      normal:
      {
        normal: null,
        fire: null,
        water: null,
        grass: null,
        electric: null,
        ice: null,
        fighting: null,
        poison: null,
        ground: null,
        flying: null,
        psychic: null,
        bug: null,
        rock: null,
        ghost: null,
        dragon: null,
        dark: null,
        steel: null,
        fairy: null
      },
      normal:
      {
        normal: null,
        fire: null,
        water: null,
        grass: null,
        electric: null,
        ice: null,
        fighting: null,
        poison: null,
        ground: null,
        flying: null,
        psychic: null,
        bug: null,
        rock: null,
        ghost: null,
        dragon: null,
        dark: null,
        steel: null,
        fairy: null
      },
      normal:
      {
        normal: null,
        fire: null,
        water: null,
        grass: null,
        electric: null,
        ice: null,
        fighting: null,
        poison: null,
        ground: null,
        flying: null,
        psychic: null,
        bug: null,
        rock: null,
        ghost: null,
        dragon: null,
        dark: null,
        steel: null,
        fairy: null
      },
      normal:
      {
        normal: null,
        fire: null,
        water: null,
        grass: null,
        electric: null,
        ice: null,
        fighting: null,
        poison: null,
        ground: null,
        flying: null,
        psychic: null,
        bug: null,
        rock: null,
        ghost: null,
        dragon: null,
        dark: null,
        steel: null,
        fairy: null
      },
      normal:
      {
        normal: null,
        fire: null,
        water: null,
        grass: null,
        electric: null,
        ice: null,
        fighting: null,
        poison: null,
        ground: null,
        flying: null,
        psychic: null,
        bug: null,
        rock: null,
        ghost: null,
        dragon: null,
        dark: null,
        steel: null,
        fairy: null
      },
      normal:
      {
        normal: null,
        fire: null,
        water: null,
        grass: null,
        electric: null,
        ice: null,
        fighting: null,
        poison: null,
        ground: null,
        flying: null,
        psychic: null,
        bug: null,
        rock: null,
        ghost: null,
        dragon: null,
        dark: null,
        steel: null,
        fairy: null
      },
      normal:
      {
        normal: null,
        fire: null,
        water: null,
        grass: null,
        electric: null,
        ice: null,
        fighting: null,
        poison: null,
        ground: null,
        flying: null,
        psychic: null,
        bug: null,
        rock: null,
        ghost: null,
        dragon: null,
        dark: null,
        steel: null,
        fairy: null
      },
      normal:
      {
        normal: null,
        fire: null,
        water: null,
        grass: null,
        electric: null,
        ice: null,
        fighting: null,
        poison: null,
        ground: null,
        flying: null,
        psychic: null,
        bug: null,
        rock: null,
        ghost: null,
        dragon: null,
        dark: null,
        steel: null,
        fairy: null
      },
      normal:
      {
        normal: null,
        fire: null,
        water: null,
        grass: null,
        electric: null,
        ice: null,
        fighting: null,
        poison: null,
        ground: null,
        flying: null,
        psychic: null,
        bug: null,
        rock: null,
        ghost: null,
        dragon: null,
        dark: null,
        steel: null,
        fairy: null
      },
      normal:
      {
        normal: null,
        fire: null,
        water: null,
        grass: null,
        electric: null,
        ice: null,
        fighting: null,
        poison: null,
        ground: null,
        flying: null,
        psychic: null,
        bug: null,
        rock: null,
        ghost: null,
        dragon: null,
        dark: null,
        steel: null,
        fairy: null
      },
      normal:
      {
        normal: null,
        fire: null,
        water: null,
        grass: null,
        electric: null,
        ice: null,
        fighting: null,
        poison: null,
        ground: null,
        flying: null,
        psychic: null,
        bug: null,
        rock: null,
        ghost: null,
        dragon: null,
        dark: null,
        steel: null,
        fairy: null
      },
      normal:
      {
        normal: null,
        fire: null,
        water: null,
        grass: null,
        electric: null,
        ice: null,
        fighting: null,
        poison: null,
        ground: null,
        flying: null,
        psychic: null,
        bug: null,
        rock: null,
        ghost: null,
        dragon: null,
        dark: null,
        steel: null,
        fairy: null
      },
      normal:
      {
        normal: null,
        fire: null,
        water: null,
        grass: null,
        electric: null,
        ice: null,
        fighting: null,
        poison: null,
        ground: null,
        flying: null,
        psychic: null,
        bug: null,
        rock: null,
        ghost: null,
        dragon: null,
        dark: null,
        steel: null,
        fairy: null
      },
      normal:
      {
        normal: null,
        fire: null,
        water: null,
        grass: null,
        electric: null,
        ice: null,
        fighting: null,
        poison: null,
        ground: null,
        flying: null,
        psychic: null,
        bug: null,
        rock: null,
        ghost: null,
        dragon: null,
        dark: null,
        steel: null,
        fairy: null
      }
    }
  }
}

class Card {
  constructor(name) {
    this.name = name;
    this.name;
    this.level;
    this.id;
    this.retreat_cost;
    this.image_link;
    this.type = [];
    this.weakness = [];
    this.advantage = [];
  }
}

// fetched the pokemon raw data
//O(n)
async function populate(count) {
  for (let x = 1; x < count + 1; x++) {
    //fetch all pokemon from 1 - count.
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${x}/`);
    const data = await res.json();

    // log results
    const { name, height, order, types } = data
    console.log(`Name: ${name}, Order: ${order}`)


    for (const x of types) {
      console.log(x['type']['name'])
    }


    //analyze each type



    // const poke_option = document.createElement("option");
    // poke_option.value = x;
    // poke_option.innerHTML = data.name;
    // document.querySelector("#pokemon_select").appendChild(poke_option);
  }
}

populate(4)

async function get_pokemon_information(index) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${index}`);
  const data = await response.json();

  document.querySelector("#pokemon_name").innerHTML = data.name;
  document.querySelector("#pokemon_image").src = data.sprites.front_default;
}

async function get_pokemon_tcg_information() {
  //gets the card info
  const response = await fetch(`https://api.pokemontcg.io/v2/cards/base1-4`);
  const object_data = await response.json();

  //create img element and apply image to it.
  const pokemon_card = document.createElement("img");
  pokemon_card.src = object_data.data.images.small;

  //append img to container
  const container = document.getElementById("Card-Section");
  container.appendChild(pokemon_card);
}

async function test_ids() {
  //if the local storage holds the data already, then skip the fetch api call.
  if (localStorage.getItem("Cards") == null) {
    //gets 250 pokemon cards
    const response = await fetch("https://api.pokemontcg.io/v2/cards/base1-4");
    const response_data = await response.json();
    //store in local storage
    localStorage.setItem("Cards", JSON.stringify(response_data));
    //download file
    download_file(JSON.stringify(response_data));
  } else {
    download_file(localStorage.getItem("Cards"));
  }
  console.log(localStorage.getItem("Cards"));
}

function change_index(num) {
  poke_index += num;
  if (poke_index > 0 && poke_index < 906) {
    get_pokemon_information(poke_index);
  } else if (poke_index < 1) {
    poke_index = 1;
    get_pokemon_information(poke_index);
  } else if (poke_index > 906) {
    poke_index = 906;
    get_pokemon_information(poke_index);
  }
}

//save json data to a file
function download_file(file) {
  let bb = new Blob([file], { type: "text/html" });
  //create download link
  let a = document.getElementById("download");
  //connects the href property to the local file
  a.href = window.URL.createObjectURL(bb);
  //simulates the link click
  a.click();
}

//generate a card object, when it is needed or put in a deck.

function createCard() {
  pokemon = new Card();
  return pokemon;
}

//Open local json file
async function OpenPokemonJSON() {
  try {
    const response = await fetch("pokemon_cards.json");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}
