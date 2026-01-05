import Link from "next/link";

export default function Footer () {
    return (
        <footer className=" min-h-40 p-10 flex gap-8 justify-center bg-gray-800 text-blue-100">
            <div className="hidden md:block ">
                logo
                <p></p>
            </div>
            <div className="flex flex-col my-auto gap-2 text-center" >

                <h3 className="text-xl text-gray-400">per informazioni, progetti o anche solo per fare due chiacchere</h3>
                <h3 className="text-xl text-gray-400">Contattami qui:  </h3>
                <a  href="mailto:carletti.dav@gmail.com"><p className="text-indigo-300 hover:text-purple-400 hover:underline text-xl" >carletti.dav@gmail.com</p></a>
            </div>
        </footer>
    )
}