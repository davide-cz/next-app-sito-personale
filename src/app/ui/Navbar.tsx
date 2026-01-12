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
            <div className="flex ">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center my-auto ml-4 text-white font-bold text-xl">
                    DC
                </div>
                
                <span className="ml-3 my-auto text-xl font-bold">DC web developer</span>
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