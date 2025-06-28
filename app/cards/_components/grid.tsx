'use client'

import clsx from 'clsx/lite'
import Image from 'next/image'
import type { Pokemon } from '@/_lib/types'
import useModal from '@/_lib/use-modal'

interface Props {
  data: Pokemon[]
}

export default function Grid({ data }: Props) {
  const setData = useModal((state) => state.setData)

  return (
    <main className="pb-12 grid grid-cols-fit-36 gap-6">
      {data.map((pokemon) => (
        <button
          className={clsx(
            'overflow-hidden relative py-2 px-4 rounded-md border',
            'border-accent font-semibold hover:bg-secondary/50'
          )}
          key={pokemon.name}
          onClick={() => setData(pokemon)}
        >
          <span
            className={clsx(
              'absolute top-0 left-0 p-1.25 rounded-br-md shadow-xs',
              'bg-primary text-sm/none'
            )}
          >
            {pokemon.id}
          </span>
          <Image
            className="mx-auto"
            src={pokemon.image}
            alt=""
            width="96"
            height="96"
          />
          <h2 className="pt-1 border-t border-accent capitalize">
            {pokemon.name}
          </h2>
        </button>
      ))}
    </main>
  )
}
