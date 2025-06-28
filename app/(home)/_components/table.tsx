'use client'

import { Fragment } from 'react'
import { flexRender } from '@tanstack/react-table'
import clsx from 'clsx/lite'
import type { Pokemon } from '@/_lib/types'
import useTable from '../_hooks/use-table'
import IconArrowsSort from '../_icons/arrows-sort'
import IconSortAscending from '../_icons/sort-ascending'
import IconSortNumbers from '../_icons/sort-numbers'
import Dropdown from './dropdown'
import Pagination from './pagination'

interface Props {
  data: Pokemon[]
}

export default function Table({ data }: Props) {
  const table = useTable(data)

  return (
    <section>
      <div
        className={
          'overflow-auto h-[calc(100svh-(--spacing(40)))] scrollbar-thin'
        }
      >
        <table>
          <thead className="sticky top-0 z-1 bg-light">
            {table.getHeaderGroups().map(({ id, headers }) => (
              <tr className="group text-sm text-secondary uppercase" key={id}>
                {headers.map(({ id, column, getContext }, index) => (
                  <th
                    className={clsx(
                      index === 0 && 'ring-b',
                      index > 0 && 'bg-dark',
                      index > 1 && 'border-l border-accent'
                    )}
                    scope="col"
                    key={id}
                  >
                    {index === 0 ? (
                      <Dropdown
                        types={[...new Set(data.flatMap(({ types }) => types))]}
                        onChange={table.getColumn('types')!.setFilterValue}
                      />
                    ) : (
                      <div
                        className={
                          'py-1 px-4 flex items-center justify-between gap-4'
                        }
                      >
                        {flexRender(column.columnDef.header, getContext())}
                        <button
                          className={
                            column.getIsSorted()
                              ? 'text-primary'
                              : 'text-accent hover:text-secondary'
                          }
                          onClick={() => {
                            column.getIsSorted()
                              ? column.clearSorting()
                              : column.toggleSorting(index > 1 || undefined)
                          }}
                        >
                          {index === 1 ? (
                            <IconArrowsSort />
                          ) : index === 2 ? (
                            <IconSortAscending />
                          ) : (
                            <IconSortNumbers />
                          )}
                        </button>
                      </div>
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody className="font-medium text-center">
            {table.getRowModel().rows.map(({ id, getVisibleCells }) => (
              <tr className="group" key={id}>
                {getVisibleCells().map(({ id, column, getContext }) => (
                  <Fragment key={id}>
                    {flexRender(column.columnDef.cell, getContext())}
                  </Fragment>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Pagination table={table} />
    </section>
  )
}
