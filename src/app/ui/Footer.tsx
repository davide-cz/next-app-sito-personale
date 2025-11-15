import Link from "next/link";

export default function Footer () {
    return (
        <footer className=" p-10 flex gap-8 bg-blue-900 text-blue-100">
            <div className="w-1/3">
                logo
            </div>
            
            <div className="w-24">
                <ul className="border-l px-4">
                    <li>
                        <Link href={''}>Link1</Link>
                    </li>
                    <li>
                        <Link href={''}>Link1</Link>
                    </li>
                    <li>
                        <Link href={''}>Link1</Link>
                    </li>
                </ul>
            </div>
            <div>
                <ul className="border-l px-4">
                    <li>
                        <Link href={''}>Link1</Link>
                    </li>
                    <li>
                        <Link href={''}>Link1</Link>
                    </li>
                    <li>
                        <Link href={''}>Link1</Link>
                    </li>
                </ul>
            </div>
        </footer>
    )
}