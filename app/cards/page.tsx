import { getPokemonList } from '@/_lib/pokeapi'
import Grid from './_components/grid'

export default async function Page() {
  const data = await getPokemonList()

  return <Grid data={data} />
}
