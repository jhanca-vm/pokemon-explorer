'use client'

import { useEffect, useRef } from 'react'
import clsx from 'clsx/lite'
import Image from 'next/image'
import useModal from '@/_lib/use-modal'
import Item from './item'

export default function Modal() {
  const ref = useRef<HTMLDialogElement>(null)
  const data = useModal((state) => state.data)
  const setData = useModal((state) => state.setData)

  useEffect(() => {
    if (data) ref.current?.showModal()
  }, [data])

  return (
    <dialog
      ref={ref}
      className={clsx(
        'w-72 m-auto rounded-md bg-dark font-medium text-sm text-accent',
        'backdrop:bg-dark/56'
      )}
      onClose={() => setData(null)}
    >
      <figure
        className={
          'shape mr-3 pt-2 pb-8 pl-2 pr-8 float-left rounded-br-full bg-light'
        }
      >
        {data?.image && (
          <Image src={data.image} alt="" width="96" height="96" />
        )}
      </figure>
      <header className="py-1.5 pr-3 flex items-center justify-between gap-4">
        <h2 className="font-bold text-base text-light capitalize">
          {data?.name}
        </h2>
        <button
          className="text-secondary hover:text-primary"
          onClick={() => ref.current?.close()}
        >
          <svg
            className="w-3 fill-none stroke-[1.75] stroke-current"
            viewBox="0 0 14 14"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M13 1 1 13M1 1l12 12" />
          </svg>
        </button>
      </header>
      <ul className="mb-6 mx-3 space-y-0.5">
        <Item name="ID" value={data?.id} />
        <Item name="Height" value={`${data?.height}m`} />
        <Item name="Weight" value={`${data?.weight}kg`} />
        <Item name="Types" value={data?.types.join(', ')} />
      </ul>
      <h3
        className={clsx(
          'mx-5 pb-1 border-b border-accent font-bold text-center text-sm',
          'text-light'
        )}
      >
        Stats
      </h3>
      <ul className="mt-2 mx-5 pb-4 grid grid-cols-2 gap-1">
        <Item name="Health" value={data?.health} />
        <Item className="text-right" name="Attack" value={data?.attack} />
        <Item name="Speed" value={data?.speed} />
        <Item className="text-right" name="Defense" value={data?.defense} />
        <Item name="Experience" value={data?.experience} />
        <Item
          className="col-span-2"
          name="Special Attack"
          value={data?.specialAttack}
        />
        <Item
          className="col-span-2"
          name="Special Defense"
          value={data?.specialDefense}
        />
      </ul>
    </dialog>
  )
}
