import Image from "next/image";

export default function Hero () {
    return (
        <section className="flex w-full h-screen relative">
            <Image className="absolute -z-10 blur-sm animate-pulse saturate-125" alt='background with binary code' src="/hero-bg.jpeg" fill={true}/>
            <div className="text-center m-auto" >
                <h1 className="mx-auto p-2 text-7xl font-bold text-stone-600" >DC-Web-Dev</h1>
                <h2 className="mx-auto p-2 text-5xl text-stone-400" >Benvenuto su Dc-web solution</h2>
                <h5 className="mx-auto p-2 text-4xl text-stone-700" >Sono un appassionato di sviluppo web sia lato 
                    <span className="font-bold" > Front-end</span> che <span className="font-bold" >Back-end</span></h5>
            </div>
        </section>
    )
}