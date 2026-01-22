import Image from "next/image";
import { TfiEmail } from "react-icons/tfi";

export default function Hero () {
    return (
        <section className="flex w-full h-screen relative">
            <Image className="absolute -z-10 blur-sm animate-pulse saturate-125" alt='background with binary code' src="/hero-bg.jpeg" fill={true}/>
            <div className="text-center m-auto" >
                <h1 className="mx-auto p-2 text-5xl sm:text-7xl font-bold text-stone-400" >DC-Web-Dev</h1>
                <h2 className="mx-auto p-2 text-3xl sm:text-5xl text-stone-400" >Benvenuto su Dc-web developer</h2>
                <h5 className="mx-auto p-2 text-xl sm:text-3xl text-stone-200" >Sono un appassionato di sviluppo web, a Verona, 
                    e mi occupo di costruzione di siti web, sia lato 
                    <span className="font-bold" > Front-end</span> che <span className="font-bold" >Back-end</span></h5>
            </div>
        </section>
    )
}