'use server'

import axios from 'redaxios'
import type { Pokemon } from './types'

const instance = axios.create({ baseURL: 'https://pokeapi.co/api/v2/pokemon' })

async function getPokemon(name: string): Promise<Pokemon | null> {
  try {
    const { data } = await instance.get(`/${name}`)

    return {
      id: data.id,
      name: data.name,
      experience: data.base_experience,
      height: data.height,
      weight: data.weight,
      image: data.sprites.front_default,
      health: data.stats[0].base_stat,
      attack: data.stats[1].base_stat,
      defense: data.stats[2].base_stat,
      specialAttack: data.stats[3].base_stat,
      specialDefense: data.stats[4].base_stat,
      speed: data.stats[5].base_stat,
      types: data.types.map(
        (data: { type: { name: string } }) => data.type.name
      )
    }
  } catch {
    return null
  }
}

export async function getPokemonList() {
  const { data } = await instance.get('/', { params: { limit: 151 } })

  const list = await Promise.all<Pokemon | null>(
    data.results.map((pokemon: { name: string }) => getPokemon(pokemon.name))
  )

  return list.filter(Boolean) as Pokemon[]
}
