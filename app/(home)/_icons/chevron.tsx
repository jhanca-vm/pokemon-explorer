import clsx from 'clsx/lite'

interface Props {
  className?: string
}

export default function IconChevron({ className }: Props) {
  return (
    <svg
      className={clsx('w-3.5 fill-none stroke-[1.5] stroke-current', className)}
      viewBox="0 0 14 8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m1 1 6 6 6-6" />
    </svg>
  )
}
