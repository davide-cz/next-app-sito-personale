
import { HiArrowCircleRight } from "react-icons/hi";

type myProps={ 

    isEven:boolean,

    imgUrl:string ,

    description1:string , 

    description2:string , 

    description3:string , 

    description4:string , 
}
export default function ImgAndDescr ( {isEven , imgUrl , description1 ,description2 , description3, description4, } :myProps ) {



/*const [isEven, setIsEven]=useState(false);*/

    return (
        <div className={`flex flex-col px-2 py-16 gap-10 h-full sm:max-h-[700px] w-full saturate-50 bg-linear-to-b border-b border-zinc-800 from-zinc-700 via-zinc-500 to-zinc-700 ${isEven ? 'lg:flex-row justify-aroud md:justify-between' : 'lg:flex-row-reverse md:justify-between' }  `} >
            <div className="lg:md-1/2  w-full bg-transparent rounded-lg sm:h-[600px] min-h-[250px]">
                <figure className="flex  h-full m-auto">
                    <img className={`object-right  rounded-xl w-auto h-[500px] ${isEven ? 'md:object-center' : 'md:object-scale-down' }`} src={`${imgUrl}`} alt="" />    
                </figure>
            </div>
            <div className="h-full  my-auto " >
                <ul className=" w-full p-2  h-full flex flex-col hover:scale-105 hover:opacity-75 transition-all duration-200">
                    {
                        description1 && 
                            <li className="flex gap-x-4 h-auto"  >
                                <div className="flex ">                                
                                    <span className="my-auto h-12 w-12" >
                                        <HiArrowCircleRight className="text-3xl w-full h-full  arrow-icon1 text-green-500 m-auto"/>
                                    </span>
                                </div>
                                <h4 className="text-xl lg:text-3xl w-4/5 h-full p-2">{description1}</h4>
                            </li>
                    }
                    {
                        description2 && 
                            <li className="flex gap-x-4  "  >
                                <div className="flex ">                                
                                    <span className="my-auto h-12 w-12" >
                                        <HiArrowCircleRight className="text-3xl w-full h-full arrow-icon2 text-green-500 m-auto"/>
                                    </span>
                                </div>
                                <h4 className="text-xl  lg:text-3xl w-4/5 h-full p-2">{description2}</h4>
                            </li>
                    }
                    {
                        description3 && 
                            <li className="flex gap-x-4"  >
                                <div className="flex ">                                
                                    <span className="my-auto h-12 w-12" >
                                        <HiArrowCircleRight className="text-3xl w-full h-full arrow-icon1 text-green-500 m-auto"/>
                                    </span>
                                </div>
                                <h4 className="text-xl  lg:text-3xl w-4/5 h-full p-2">{description3}</h4>
                            </li>
                    }
                    {
                        description4 && 
                            <li className="flex gap-x-4"  >
                                <div className="flex ">                                
                                    <span className="my-auto h-12 w-12" >
                                        <HiArrowCircleRight className="text-3xl w-full h-full arrow-icon2 text-green-500 m-auto"/>
                                    </span>
                                </div>
                                <h4 className="text-xl  lg:text-3xl w-1/2 h-full p-2">{description4}</h4>
                            </li>
                    }
                </ul>
            </div>
        </div>
    )
}