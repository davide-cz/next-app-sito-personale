import Image from "next/image";
import Navbar from "./ui/Navbar";
import Hero from "./ui/Hero";
import CardContainer from "./ui/CardContainer";
import ImgAndDescr from "./ui/ImgAndDescr";

export default function Home() {
  return (
    <>      
      <div id='home' className="font-sans flex flex-col justify-center">
        <Hero/>
        <h2 className="text-4xl p-8 text-center" >Di seguito le tecnologie che utilizzo per la realizzazione dei miei progetti:</h2>
        <CardContainer/>
        <section>
          <h4 id="about" className="p-4 bg-stone-900 *: ">Ciò che ho acquisito con l'esperienza:</h4>
        </section>
        <ImgAndDescr
          isEven={false}
          imgUrl="/pc-assets.jpeg"
          description1="Sviluppo front-end e back-end"
          description2="Gestione appuntamenti direttamente dal sito"
          description3="Ottimizzazione per la navigazione da mobile, tablet e desktop"
          description4=""
          centered={false}
        />
        <ImgAndDescr
          isEven={true}
          imgUrl="/pc-asset-2.jpeg"
          description1=""
          description2="layout semplice ed user-friendly"
          description3="Soluzioni per migliorare la posizione nei risultati di ricerca on-line (SEO)"
          description4=""
          centered={true}
          
        />
        <ImgAndDescr
          isEven={false}
          imgUrl="/pc-asset-3.jpeg"
          description1="Constante confronto sui risultati che si vogliono raggiungere"
          description2="Manutenzione del sito con la possibilità di implementare nuove funzionalità qual'ora ci sia il bisogno "
          description3=""
          description4=""
          centered={true}
        />
      </div>  
    </>
  );
}
