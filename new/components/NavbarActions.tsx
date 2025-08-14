"use client"
import Link from 'next/link'
import { signIn, signOut } from 'next-auth/react'

const bubbleBtn =
  "relative px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white backdrop-blur-md overflow-hidden hover:bg-white/20 transition " +
  "before:content-[''] before:absolute before:top-0 before:left-0 before:w-1/2 before:h-1/2 before:bg-white/30 before:rounded-full before:blur-md before:-translate-x-1/4 before:-translate-y-1/4"

export default function NavbarActions({ session }) {
  return (
    <div className="flex items-center gap-5">
      {session?.user ? (
        <>
          <Link href="/blog/create" className={bubbleBtn}>
            Create
          </Link>
          <Link href="/blog/create" className={bubbleBtn}>
            {session?.user?.name}
          </Link>
          <button onClick={() => signOut()} className={bubbleBtn}>
            Logout
          </button>
        </>
      ) : (
        <button onClick={() => signIn('github')} className={bubbleBtn}>
          Sign in with GitHub
        </button>
      )}
    </div>
  )
}
