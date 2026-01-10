'use client'

import Link from "next/link";


export default function Navbar () {

    const scrollToSection = (sectionId : string) => {
        const element = document.getElementById(sectionId);
        if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <nav className="h-24 flex bg-transparent text-amber-100 text-lg justify-between " >
            <div className="my-auto ">
                logo
            </div>
            <ul className="flex gap-4 p-2 lg:h-full ">
                <li className="my-auto "> 
                    <Link href={'/'}>                        
                        <button className="btn"
                                onClick={() => scrollToSection('home')}>
                                home
                        </button> 
                    </Link>
                </li >
                <li className="my-auto ">                   
                        <button className="btn"
                                onClick={() => scrollToSection('about')}>
                                Cosa offriamo
                        </button>
                </li>
                <li className="my-auto ">                       
                    <button className="btn"
                            onClick={() => scrollToSection('footer')}>
                            contatti
                    </button>
                </li>
            </ul>
        </nav>
    )
}