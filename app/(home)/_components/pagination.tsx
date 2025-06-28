import type { Table } from '@tanstack/react-table'
import type { Pokemon } from '@/_lib/types'
import IconChevrons from '../_icons/chevrons'
import IconChevron from '../_icons/chevron'
import PaginationButton from './pagination-button'

interface Props {
  table: Table<Pokemon>
}

export default function Pagination({ table }: Props) {
  return (
    <div
      className={
        'pt-1.5 pb-2 flex items-center justify-center rounded-b-md bg-primary'
      }
    >
      <PaginationButton
        className="p-1 pr-1.25"
        disabled={!table.getCanPreviousPage()}
        onClick={() => table.firstPage()}
      >
        <IconChevrons />
      </PaginationButton>
      <PaginationButton
        className="py-1.75 pl-0.75 pr-1"
        disabled={!table.getCanPreviousPage()}
        onClick={() => table.previousPage()}
      >
        <IconChevron className="rotate-90" />
      </PaginationButton>
      <p className="px-1.25 font-semibold text-sm">
        {`Page ${table.getState().pagination.pageIndex + 1} of ` +
          table.getPageCount()}
      </p>
      <PaginationButton
        className="py-1.75 pl-1 pr-0.75"
        disabled={!table.getCanNextPage()}
        onClick={() => table.nextPage()}
      >
        <IconChevron className="rotate-270" />
      </PaginationButton>
      <PaginationButton
        className="p-1 pl-1.25"
        disabled={!table.getCanNextPage()}
        onClick={() => table.lastPage()}
      >
        <IconChevrons className="rotate-180" />
      </PaginationButton>
    </div>
  )
}
