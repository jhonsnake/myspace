import Image from "next/image"
import Link from "next/link"

interface UserCardProps {
    id: string
    name: string | null
    email: string | null
    image: string | null
    age: number | null
    }

const UserCard = ({name, email, image, id, age}:UserCardProps) => {
  return (
    <div className="flex flex-col items-center justify-center">
        <Image width={50} height={50} className="rounded-full" src={image ??'/vercel.svg' } alt={name?? ''} />
        <h1 className="text-2xl font-bold">{name}</h1>
        <p className="text-xl">{email}</p>
        <h3><Link href={`/users/${id}`}>{name}</Link></h3>
        <p>Age:{age}</p>
    </div>
  )
}

export default UserCard