import { getPokemonList } from '@/_lib/pokeapi'
import Table from './_components/table'

export default async function Home() {
  const data = await getPokemonList()

  return (
    <main>
      <Table data={data} />
    </main>
  )
}
