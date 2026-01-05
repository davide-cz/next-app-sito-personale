import Image from "next/image";
import { TfiEmail } from "react-icons/tfi";

export default function Hero () {
    return (
        <section className="flex w-full h-screen relative">
            <Image className="absolute -z-10 blur-sm animate-pulse saturate-125" alt='background with binary code' src="/hero-bg.jpeg" fill={true}/>
            <div className="text-center m-auto" >
                <h1 className="mx-auto p-2 text-7xl font-bold text-stone-600" >DC-web developer</h1>
                <h2 className="mx-auto p-2 text-5xl text-stone-400" >Benvenuto su Dc-web-dev</h2>
                <h5 className="mx-auto p-2 text-4xl text-stone-700" >Ciao, sono uno sviluppatore di siti web,nella provincia di Verona, sono a disposizione per discutere di nuove idee e progetti</h5>
                <div className="flex justify-center gap-4 ">
                    <h2 className="p-2 text-3xl text-stone-400" >puoi contattarmi qui: </h2>
                    <a href="mailto:carletti.dav@gmail.com" className="animate-bounce"> <TfiEmail className="text-5xl text-amber-300 hover:text-amber-600 h-full" /></a>
                
                </div>
            </div>
        </section>
    )
}