import { gql } from '@apollo/client';

export const GET_POKEDEX = gql`
  query get_pokedex {
    species: pokemon_v2_pokemonspecies(order_by: {id: asc}) {
      name
      id
      pokemon_v2_pokemons {
        pokemon_v2_pokemontypes {
          pokemon_v2_type {
            name
          }
        }
        name
      }
    }
  }
`

export const GET_POKEMON = gql`
query get_pokemon ($pokemon: String){
    pokemon_v2_pokemon(where: {name: {_eq: $pokemon}}) {
        id
        name
        pokemon_species_id
        height
        pokemon_v2_pokemontypes {
          pokemon_v2_type {
            name
            id
          }
        }
        pokemon_v2_pokemonstats {
          stat_id
          base_stat
        }
        pokemon_v2_pokemonmoves(limit: 3, order_by: {}) {
          pokemon_v2_move {
            id
            name
          }
        }
        weight
        pokemon_v2_pokemonabilities {
          pokemon_v2_ability {
            name
            id
          }
        }
      }
    }
`