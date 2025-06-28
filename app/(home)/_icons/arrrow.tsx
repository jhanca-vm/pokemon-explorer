import clsx from 'clsx/lite'

interface Props {
  className?: string | boolean
}

export default function IconArrow({ className }: Props) {
  return (
    <svg
      className={clsx(className, 'h-3 fill-none stroke-[1.5] stroke-current')}
      viewBox="0 0 14 16"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7 1v.5m0 3V6m0 3v6M13 9l-6 6M1 9l6 6" />
    </svg>
  )
}
