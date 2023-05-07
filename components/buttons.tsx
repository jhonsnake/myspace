'use client'

import { useSession, signIn, signOut } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'

function SignOutButton() {
    return (
      <button onClick={()=> signOut()}> Sign Out </button>
    )
  }
export  default function SignInButton() {
    const { data: session, status } = useSession()

    if(status === 'loading') return <button > ... </button>
    if(status === 'unauthenticated') return <button className="border p-3 bg-black text-white" onClick={()=> signIn()}> Sign In </button>
    if(status === 'authenticated') {
        return (
            <div className='flex gap-2 items-center'>
            <Link href='/dashboard' >
                <Image className='rounded-xs' width={49} height={49} alt='Your name' src={session.user?.image ?? '/vercel.svg' } />
            </Link>

            <div className="border p-3 bg-black text-white">

            <SignOutButton/>
            </div>
            </div>
        )


    }

}


