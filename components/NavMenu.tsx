import Link from "next/link"
import Image from "next/image"
import  SignInButton  from "./buttons"


const NavMenu = () => {
  console.log("Rendering NavMenu")
  return (
    <nav className=" flex justify-between m-6">
        <Link href='/' >
            <Image
            src="/next.svg"
            width={216}
            height={30}
            alt="logo"
            />
        </Link>
        <ul className="flex gap-3 hover:cursor-pointer underline items-center">
            <li>
                <Link href='/about'>
                    About
                </Link>
            </li>
             <li>
                <Link href='/blog'>
                    Blog
                </Link>
            </li>
             <li>
                <Link href='/users'>
                    Users
                </Link>
            </li>
            <li >
                <SignInButton/>
            </li>
        </ul>
    </nav>
  )
}

export default NavMenu