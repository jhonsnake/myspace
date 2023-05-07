import { PrismaClient } from "@prisma/client"
import { Metadata } from "next"
import Image from "next/image"

interface Props {
    params: {
        id: string
    }
}

export async function generateMetaData({params}:Props): Promise<Metadata>{
    const user = await new PrismaClient().user.findUnique({ where: { id: params.id }})
    return { title: `User profile of ${user?.name ?? ''}` }

}

async function UserProfile({params}:Props) {
    const prisma = new PrismaClient()
    const user = await prisma.user.findUnique({ where: { id: params.id }})
    const {name, bio, image} = user ?? {}
  return (
    <div>
        <h1>{name}</h1>
        <p>{bio}</p>
        <Image width={50} height={50} src={image ?? ''} alt={name ?? ''} />
    </div>
  )
}

export default UserProfile