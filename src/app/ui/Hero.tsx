import Image from "next/image";

export default function Hero () {
    return (
        <section className="flex w-full h-screen relative">
            <Image className="absolute -z-10 blur-sm animate-pulse saturate-125" alt='background with binary code' src="/hero-bg.jpeg" fill={true}/>
            <div className="text-center m-auto" >
                <h1 className="mx-auto p-2 text-7xl font-bold text-stone-600" >DC-web solution</h1>
                <h2 className="mx-auto p-2 text-5xl text-stone-400" >Benvenuto su Dc-web solution</h2>
                <h5 className="mx-auto p-2 text-4xl text-stone-700" >Insieme possiamo costruire il sito più adatto alle tue esigenze</h5>
            </div>
        </section>
    )
}