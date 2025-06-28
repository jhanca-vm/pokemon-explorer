import type { CellContext } from '@tanstack/react-table'
import type { Pokemon } from '@/_lib/types'
import useModal from '@/_lib/use-modal'
import IconOpen from '../_icons/open'

export default function HeadingCell({
  getValue,
  row
}: CellContext<Pokemon, string>) {
  const setData = useModal((state) => state.setData)

  return (
    <th className="border-b border-accent font-semibold text-left" scope="row">
      <button
        className={
          'flex items-center gap-1 capitalize -translate-x-5 hover:underline'
        }
        onClick={() => setData(row.original)}
      >
        {getValue()}
        <IconOpen />
      </button>
    </th>
  )
}
