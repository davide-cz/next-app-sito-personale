'use client'

import { useState } from 'react'
import mazzo from '../../data/cards.json'

export default function Solitary (){

    const deck = mazzo
    
        type Carta = {
            value: number;
            seme: string;
        };

    const [scrumbledDeck , setScrumbledDeck] = useState<Carta[]>(deck)
    const [cardsInHand , setCardsInHand] = useState<Carta[]>([])
    /*  <div className=" h-[450px] rounded-md w-[300px] mx-auto border-1 border-gray-300 p-2 bg-gray-200">
            <div className="max-w-full max-h-1/2">

            </div>
        </div>*/


    const scrumbleDeck = ()=>{


        // Supponiamo che "deck" sia un array di oggetti "Carta"
        const tempDeck: Carta[] = [];

        for (let i=0 ; i < deck.length ; i++ ){
            const rndNumb = Math.floor(Math.random()*deck.length);
            tempDeck.push(deck[rndNumb]);
            deck.splice( rndNumb , 0 ); 
        };
        console.log(tempDeck);
        setScrumbledDeck(tempDeck); 
        setCardsInHand([]);
    }

    const takeCardsFromDeck =() =>{

        const cardsInHands: Carta[] = [];
        const tempDeck: Carta[] = scrumbledDeck;

        for (let i=0 ; i < 4 ; i++ ){

            const rndNumb = Math.floor(Math.random()*deck.length);
            cardsInHands.push(scrumbledDeck[rndNumb]);
            
            tempDeck.splice( rndNumb , 1  );
        }
        setScrumbledDeck(tempDeck);
        setCardsInHand(cardsInHands);
        console.log(cardsInHands);


    }

    return (



        <div className='gap-2 p-4'>
            <button className='btn' onClick={()=>scrumbleDeck()}>scrumble</button>
            <button className='btn' onClick={()=>takeCardsFromDeck()}>draw</button>
            <div className='grid grid-cols-10 gap-2 p-4'>
                {scrumbledDeck.map((card , i )=>(
                    <div key={`card-${i}`} className=" h-[200px] rounded-md w-[125px] mx-auto border-1 border-amber-400 p-2 bg-yellow-200">
                        <div className="max-w-full max-h-1/2">
                            <h1>{card.seme}</h1>

                            <h1>{card.value}</h1>
                        </div>
                    </div>
                ))}
            </div>

            <div className='flex flex-wrap gap-4' >
                {cardsInHand.map((card , i )=> ( 
                    <div key={`hand-${i}`} className='h-[200px] rounded-md w-[125px] mx-auto border-1 border-amber-400 p-2 bg-yellow-400'>
                        <h1>{card.seme}</h1>

                        <h1>{card.value}</h1>
                    </div>
                ))}
            </div>

        </div>

    )   

}