'use client'

import { useSession } from 'next-auth/react'


function AuthCheck({ children }: { children: React.ReactNode}) {
    const { data: session, status } = useSession()


    console.log(session, status )

   return <>{children}</>
  }
export default AuthCheck