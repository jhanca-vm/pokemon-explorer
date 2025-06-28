import type { ReactNode } from 'react'
import clsx from 'clsx/lite'

interface Props {
  className?: string
  disabled: boolean
  onClick: () => void
  children: ReactNode
}

export default function PaginationButton({
  className,
  disabled,
  onClick,
  children
}: Props) {
  return (
    <button
      className={clsx(
        className,
        'rounded transition-colors disabled:text-secondary',
        'not-disabled:hover:bg-secondary'
      )}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
