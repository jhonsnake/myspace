
import { getServerSession } from "next-auth"
import {redirect} from 'next/navigation'

async function AboutPage ()   {
  const session = await getServerSession()
  if(!session) {
    return redirect('/api/auth/signin')
  }
  return (
    <main className="m-20">
        <h1 className="text-2xl font-bold">About</h1>
        <p className="mt-4">We are a social media experiment!</p>
    </main>
  )
}

export default AboutPage