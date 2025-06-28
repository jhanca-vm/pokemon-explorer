import clsx from 'clsx/lite'

interface Props {
  className?: string
}

export default function IconChevrons({ className }: Props) {
  return (
    <svg
      className={clsx('h-3.5 fill-none stroke-[1.5] stroke-current', className)}
      viewBox="0 0 13 12"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 1 1 6l5 5M12 1 7 6l5 5" />
    </svg>
  )
}
