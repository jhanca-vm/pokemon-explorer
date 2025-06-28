interface Props {
  className?: string
  name?: string
  value?: string | number
}

export default function Item({ className, name, value }: Props) {
  return (
    <li className={className}>
      <strong className="font-semibold">{name}:</strong> {value}
    </li>
  )
}
