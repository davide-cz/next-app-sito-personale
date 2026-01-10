'use client'

/* import foto1 from '../../../public/tattoo-studio-1.jpeg'
import foto2 from '../../../public/tattoo-studio-2.jpeg'
import foto3 from '../../../public/tattoo-studio-3.jpeg' */

const foto1 = 'tattoo-studio-1.jpeg'
const foto2 = 'tattoo-studio-2.jpeg'
const foto3 = 'tattoo-studio-3.jpeg'

import { useState } from "react"

const fotos = [ foto1 , foto2 , foto3 ];

export default function Carousel (){

    const [currPhoto , setCurrPhoto] = useState(0);

    const prevFoto = () =>{
        if (currPhoto == 0 ) {
            setCurrPhoto( fotos.length - 1 )
        }else{
            setCurrPhoto(currPhoto - 1)
        }
        

    }

    const succFoto = () =>{
        if (currPhoto == fotos.length -1 ) {
            setCurrPhoto( 0 )
        }else{
            setCurrPhoto(currPhoto + 1)
        }
        

    }

    return (
        <div className="h-full border-b-2 flex align-middle bg-stone-800">
            <figure className='flex h-full md:w-2/3 justify-center w-full relative m-auto'>
                <img  className=' h-max-full object-cover' src={`/${fotos[currPhoto]}`}/>
            <div className="absolute h-full w-full flex justify-between items-center px-4 align-middle">
                <button className='btn h-12  bg-transparent ' 
                    onClick={()=>prevFoto()}
                > prev </button>
                <button className='btn h-12  bg-transparent' 
                    onClick={()=>succFoto()}
                > succ </button>
            </div>
            </figure>
        </div>
    )
}