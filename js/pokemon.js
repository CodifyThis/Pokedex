"use strict";
// pokemon tcg api key  19ae96ee-d959-40e6-854d-a4e1ee0c7ca0

const pokemonTypeChart =
  [
    { "type": "normal", "immunes": ["ghost"], "weaknesses": ["rock", "steel"], "strengths": [] },
    { "type": "fire", "immunes": [], "weaknesses": ["fire", "water", "rock", "dragon"], "strengths": ["grass", "ice", "bug", "steel"] },
    { "type": "water", "immunes": [], "weaknesses": ["water", "grass", "dragon"], "strengths": ["fire", "ground", "rock"] },
    { "type": "electric", "immunes": ["ground"], "weaknesses": ["electric", "grass", "dragon"], "strengths": ["water", "flying"] },
    { "type": "grass", "immunes": [], "weaknesses": ["fire", "grass", "poison", "flying", "bug", "dragon", "steel"], "strengths": ["water", "ground", "rock"] },
    { "type": "ice", "immunes": [], "weaknesses": ["fire", "water", "ice", "steel"], "strengths": ["grass", "ground", "flying", "dragon"] },
    { "type": "fighting", "immunes": ["ghost"], "weaknesses": ["poison", "flying", "psychic", "bug", "fairy"], "strengths": ["normal", "ice", "rock", "dark", "steel"] },
    { "type": "poison", "immunes": ["steel"], "weaknesses": ["poison", "ground", "rock", "ghost"], "strengths": ["grass", "fairy"] },
    { "type": "ground", "immunes": ["flying"], "weaknesses": ["grass", "bug"], "strengths": ["fire", "electric", "poison", "rock", "steel"] },
    { "type": "flying", "immunes": [], "weaknesses": ["electric", "rock", "steel"], "strengths": ["grass", "fighting", "bug"] },
    { "type": "psychic", "immunes": ["dark"], "weaknesses": ["psychic", "steel"], "strengths": ["fighting", "poison"] },
    { "type": "bug", "immunes": [], "weaknesses": ["fire", "fighting", "poison", "flying", "ghost", "steel", "fairy"], "strengths": ["grass", "psychic", "dark"] },
    { "type": "rock", "immunes": [], "weaknesses": ["fighting", "ground", "steel"], "strengths": ["fire", "ice", "flying", "bug"] },
    { "type": "ghost", "immunes": ["normal"], "weaknesses": ["dark"], "strengths": ["psychic", "ghost"] },
    { "type": "dragon", "immunes": ["fairy"], "weaknesses": ["steel"], "strengths": ["dragon"] },
    { "type": "dark", "immunes": [], "weaknesses": ["fighting", "dark", "fairy"], "strengths": ["psychic", "ghost"] },
    { "type": "steel", "immunes": [], "weaknesses": ["fire", "water", "electric", "steel"], "strengths": ["ice", "rock", "fairy"] },
    { "type": "fairy", "immunes": [], "weaknesses": ["fire", "poison", "steel"], "strengths": ["fighting", "dragon", "dark"] }
  ]

class Pokemon {
  constructor() {
    this.name
    this.types
    this.order

  }
}

function checkType(damage = 0, damageType = "normal") {
  //get the chart for the damage type

  return 'critacal'
}



// fetched the pokemon video games raw data
//O(n)
async function populate(count) {
  for (let x = 1; x < count + 1; x++) {
    //fetch all pokemon from 1 - count.
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${x}/`);
    const data = await res.json();

    // log results
    const { name, height, order, types } = data
    console.log(`Name: ${name}, Order: ${order}`)
    console.log(data)

    for (const x of types) {
      console.log(x['type']['name'])
    }
  }
}

// fetched the pokemon video games raw data

async function get_pokemon_information(index) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${index}`);
  const data = await response.json();

  document.querySelector("#pokemon_name").innerHTML = data.name;
  document.querySelector("#pokemon_image").src = data.sprites.front_default;
}

async function get_pokemon_tcg_information() {
  //gets the card info
  const response = await fetch(`https://api.pokemontcg.io/v2/cards`);
  // const response = await fetch(`https://api.magicthegathering.io/v1/cards`);
  const data = await response.json();

  console.log(data)


  // //create img element and apply image to it.
  // const pokemon_card = document.createElement("img");
  // pokemon_card.src = object_data.data.images.small;

  // //append img to container
  // const container = document.getElementById("Card-Section");
  // container.appendChild(pokemon_card);
}
get_pokemon_tcg_information()

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
