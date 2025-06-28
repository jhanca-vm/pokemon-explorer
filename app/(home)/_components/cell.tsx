import type { CellContext } from '@tanstack/react-table'
import clsx from 'clsx/lite'
import median from 'just-median'
import type { Pokemon } from '@/_lib/types'
import IconArrow from '../_icons/arrrow'

export default function Cell({
  table,
  column: { id },
  getValue
}: CellContext<Pokemon, number>) {
  const { rows } = table.getCoreRowModel()
  const values = rows.map((row) => row.original[id as keyof Pokemon] as number)
  const value = getValue()
  const isStat = id !== 'weight' && id !== 'height'
  const isSuccess = isStat && value > median(values)

  return (
    <td
      className={clsx(
        'px-4 border-b border-l border-accent',
        isStat && (isSuccess ? 'text-success' : 'text-error')
      )}
    >
      {id === 'weight' ? (
        `${value} kg`
      ) : id === 'height' ? (
        `${value} m`
      ) : (
        <span className="flex items-center justify-center gap-1">
          <IconArrow className={isSuccess && 'rotate-180'} />
          {value}
        </span>
      )}
    </td>
  )
}
