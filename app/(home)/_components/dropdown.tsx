import { useSelect } from 'downshift'
import clsx from 'clsx/lite'
import IconChevron from '../_icons/chevron'

interface Props {
  types: string[]
  onChange: (value: string) => void
}

export default function Dropdown({ types, onChange }: Props) {
  const {
    selectedItem,
    isOpen,
    getToggleButtonProps,
    getMenuProps,
    getItemProps,
    reset
  } = useSelect({
    items: types,
    onSelectedItemChange: ({ selectedItem }) => onChange(selectedItem as string)
  })

  return (
    <div className="relative w-24 mb-px mx-4 font-medium text-dark">
      <button
        className={clsx(
          'w-full pt-1 pb-1.5 px-2.5 flex justify-between rounded-md',
          'bg-secondary capitalize transition-colors hover:bg-primary'
        )}
        {...getToggleButtonProps()}
      >
        {selectedItem || 'All'}
        <IconChevron
          className={clsx(
            'transition-transform duration-200',
            isOpen && 'rotate-x-180'
          )}
        />
      </button>
      <ul
        className={clsx(
          'overflow-auto absolute inset-x-0 max-h-32 mt-1 shadow-xl',
          'bg-secondary scrollbar-thin',
          !isOpen && 'invisible'
        )}
        {...getMenuProps()}
      >
        {selectedItem && (
          <li>
            <button
              className={
                'w-full py-1 px-2.5 text-left capitalize hover:bg-primary'
              }
              onClick={() => reset()}
            >
              All
            </button>
          </li>
        )}
        {types.map((type, index) => (
          <li
            className={type === selectedItem ? 'hidden' : undefined}
            key={`dropdown-item-${type}`}
          >
            <button
              className={
                'w-full py-1 px-2.5 text-left capitalize hover:bg-primary'
              }
              {...getItemProps({ item: type, index })}
            >
              {type}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
