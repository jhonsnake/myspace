
import { PrismaClient } from '@prisma/client'
import UserCard from '@/components/UserCard'
import Link from 'next/link'

const prisma = new PrismaClient()
async function Users() {
    const users = await prisma.user.findMany()
  return (
    <div>
        {users.map((user) => {
            return <UserCard key={user.id} {...user} />
        })}

    </div>
  )
}

export default Users