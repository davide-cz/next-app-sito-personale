
type myProps={ 
    imgUrl:string,
    descr:string ,
    heigth:string ,
}
export default function Card ({imgUrl , descr , heigth }:myProps ) {
    return (
        <div className=" h-[450px] rounded-md w-[300px] lg:w-[350px] mx-auto shadow-md hover:shadow-xl hover:scale-105
                        border-1 border-gray-300 p-2 bg-gray-200 transition-all duration-150 justify-around">


            <div className="h-1/2 flex border border-gray-300" >
                <figure className=" border m-auto h-full flex">
                    <img className={`p-2 ${heigth} m-auto`} src={imgUrl} alt="" />
                </figure>
            </div>
            <div className="max-w-full max-h-1/2">
                <p className="text-gray-700" > {descr}</p>
            </div>
        </div>
    )
}