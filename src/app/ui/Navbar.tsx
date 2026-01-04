import Link from "next/link";


export default function Navbar () {
    return (
        <nav className="h-24 flex bg-transparent text-amber-100 text-lg justify-between " >
            <div className="my-auto ">
                logo
            </div>
            <ul className="flex gap-4 p-2 lg:h-full ">
                <li className="my-auto "> 
                    <Link href={'/'}>                        
                        <button className="btn">
                                home
                        </button> 
                    </Link>
                </li >
                <li className="my-auto "> 
                    <Link href={'/studio'}>                        
                        <button className="btn">
                                studio
                        </button>
                    </Link>
                </li>
                <li className="my-auto "> 
                    <Link href={'/contact'}>                        
                        <button className="btn">
                                contatti
                        </button>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}