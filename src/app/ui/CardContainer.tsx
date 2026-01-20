import Card from "./Card";

export default function CardContainer (){
    return (
            <div className="p-8   max-h-full gap-y-10 bg-stone-300 flex flex-wrap gap-4 lg:gap-10 items-center" >
                <Card
                    imgUrl="/mongodb.svg"
                    descr="per la creazione di database non relazionali e quindi più flessibili"
                    heigth=""
                />
                <Card
                    imgUrl="/nodejs.svg"
                    descr="Per creare server e gestire le richieste in tempo reale tra client e server"
                    heigth=""
                />
                <Card
                    imgUrl="/next.svg"
                    descr="Framework all'avanguardia, basata su react JS, per caricare le pagine in tempo reale e rendere più fluida la navigazione"
                    heigth=""
                />
                <Card
                    imgUrl="/react.svg"
                    descr="React JS è una libreria di javascript, conosciuta per la velocità e la versatilità nelle applicazioni web "
                    heigth="max-w-2/3 "
                />
                <Card
                    imgUrl="/tailwindcss.svg" 
                    descr="TailwindCSS è un Framework basato su CSS utilizzato per costruire lo stile di un sito web dandogli un look moderno"
                    heigth=""
                />
                <Card
                    imgUrl="/capacitor.svg" 
                    descr="Capacitor è una libreria basata su JS, con cui è possibile creare delle App installabili su smartphone e tablet "
                    heigth=""
                />
            </div>
    )
}