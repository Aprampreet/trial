import Link from 'next/link'
import Image from 'next/image'
import { auth } from '@/auth'
import NavbarActions from './NavbarActions'

export default async function Navbar() {
  const session = await auth()

  return (
    <header className="px-5 py-3 bg-black shadow-lg font-work-sans">
      <nav className="flex justify-between items-center">
        <Link href="/">
          <Image alt="logo" src="/vercel.svg" width={40} height={30} />
        </Link>
        <NavbarActions session={session} />
      </nav>
    </header>
  )
}
