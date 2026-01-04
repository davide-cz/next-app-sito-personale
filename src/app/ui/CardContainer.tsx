import Card from "./Card";

export default function CardContainer (){
    return (
        
            <div className="p-2  max-h-full bg-stone-300 grid lg:grid-cols-3 md:grid-cols-2 gap-4  items-center" >
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
                    heigth=""
                />
                <Card
                    imgUrl="/tailwind.svg" 
                    descr="Tailwind è un framework che gestisce lo stile di rendering, per ottenere dei layout moderni e puliti"
                    heigth=""
                />
                <Card
                    imgUrl="/capacitor.svg"
                    descr="Capacitor è un framework costruito per produrre delle applicazioni installabili su smartphone e tablet"
                    heigth=""
                />
            </div>
    )
}