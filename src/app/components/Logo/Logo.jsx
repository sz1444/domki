import Link from "next/link";

export function Logo() {
    return (
        <h1
            className="text-lime-600 text-xl uppercase font-extrabold"
        >
            <Link href="/">Domki Mazurskie</Link>
        </h1>
    )
}