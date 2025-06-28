import type { CellContext } from '@tanstack/react-table'
import Image from 'next/image'
import type { Pokemon } from '@/_lib/types'

export default function ImageCell({ getValue }: CellContext<Pokemon, string>) {
  return (
    <td className="border-b border-accent">
      <figure className="w-16 mx-auto">
        <Image src={getValue()} alt="" width="96" height="96" />
      </figure>
    </td>
  )
}
