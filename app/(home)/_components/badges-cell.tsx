import { useId } from 'react'
import type { CellContext } from '@tanstack/react-table'
import type { Pokemon } from '@/_lib/types'

export default function BadgeCell({
  getValue
}: CellContext<Pokemon, string[]>) {
  const id = useId()

  return (
    <td
      className={'py-2 px-4 border-b border-l border-accent text-sm capitalize'}
    >
      <div className="flex flex-col items-center gap-1">
        {getValue().map((label) => (
          <span className="px-2 rounded-full border" key={`${id}-${label}`}>
            {label}
          </span>
        ))}
      </div>
    </td>
  )
}
