import Image from "next/image";
import Navbar from "./ui/Navbar";
import Hero from "./ui/Hero";
import CardContainer from "./ui/CardContainer";
import ImgAndDescr from "./ui/ImgAndDescr";

export default function Home() {
  return (
    <>      
      <div className="font-sans flex flex-col justify-center">
        <Hero/>
        <h2 className="text-4xl" >Di seguito le tecnologie che verranno utilizzate per la realizzazione del tuo prossimo sito</h2>
        <CardContainer/>
        <section>
          <h4 className="p-4 bg-stone-900 *: ">Ciò che DC-WebSolution ti può offrire:</h4>
        </section>
        <ImgAndDescr
          isEven={false}
          imgUrl="/pc-assets.jpeg"
          description1="Sviluppo front-end e back-end del tuo sito web"
          description2="Gestione appuntamenti direttamente dal sito"
          description3="Ottimizzazione per la navigazione da mobile, tablet e desktop"
          description4=""
        />
        <ImgAndDescr
          isEven={true}
          imgUrl="/pc-asset-2.jpeg"
          description1="Prova la nostra soluzione su misura per il tuo business"
          description2="layout semplice ed user-friendly"
          description3="Soluzioni per migliorare la posizione nei risultati di ricerca on-line (SEO)"
          description4=""
          
        />
        <ImgAndDescr
          isEven={false}
          imgUrl="/pc-asset-3.jpeg"
          description1="Constante confronto sui risultati che si vogliono raggiungere"
          description2="Manutenzione del sito con la possibilità di implementare nuove funzionalità qual'ora ci sia il bisogno "
          description3=""
          description4=""
        />
      </div>  
    </>
  );
}
