import {
  createColumnHelper,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable
} from '@tanstack/react-table'
import type { Pokemon } from '@/_lib/types'
import ImageCell from '../_components/image-cell'
import HeadingCell from '../_components/heading-cell'
import BadgesCell from '../_components/badges-cell'
import Cell from '../_components/cell'

const columnHelper = createColumnHelper<Pokemon>()

const columns = [
  columnHelper.accessor('image', { header: undefined, cell: ImageCell }),
  columnHelper.accessor('name', { header: 'Name', cell: HeadingCell }),
  columnHelper.accessor('types', {
    header: 'Type',
    cell: BadgesCell,
    filterFn: 'arrIncludes',
    sortingFn(rowA, rowB) {
      const a = rowA.original.types
      const b = rowB.original.types

      return b[0].localeCompare(a[0]) || (b[1] || '').localeCompare(a[1] || '')
    }
  }),
  columnHelper.accessor('weight', { header: 'Weight', cell: Cell }),
  columnHelper.accessor('height', { header: 'Height', cell: Cell }),
  columnHelper.accessor('health', { header: 'Health', cell: Cell }),
  columnHelper.accessor('experience', { header: 'Experience', cell: Cell }),
  columnHelper.accessor('attack', { header: 'Attack', cell: Cell }),
  columnHelper.accessor('defense', { header: 'Defense', cell: Cell }),
  columnHelper.accessor('specialAttack', {
    header: 'Special Attack',
    cell: Cell
  }),
  columnHelper.accessor('specialDefense', {
    header: 'Special Defense',
    cell: Cell
  }),
  columnHelper.accessor('speed', { header: 'Speed', cell: Cell })
]

export default function useTable(data: Pokemon[]) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    initialState: { pagination: { pageSize: 12 } }
  })

  return table
}
