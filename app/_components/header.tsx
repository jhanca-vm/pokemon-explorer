'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import clsx from 'clsx/lite'

const links = [
  ['/', 'Home'],
  ['/cards', 'Cards']
]

export default function Header() {
  const pathname = usePathname()

  return (
    <header className="mb-7 pt-5 flex justify-center">
      <nav className="px-5 flex gap-7 border-b border-accent font-medium">
        {links.map(([href, label]) => (
          <Link
            className={clsx(
              '-mb-px pb-3 px-1',
              pathname === href
                ? 'border-b-2 font-semibold'
                : 'border-accent hover:border-b-2'
            )}
            href={href}
            key={href}
          >
            {label}
          </Link>
        ))}
      </nav>
    </header>
  )
}
