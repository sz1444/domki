import Image from "next/image";
import { LinkButton } from "../LinkButton/LinkButton";

export function Hero() {
    return (
        <div className="relative h-screen">
            <Image
                className="filter brightness-[25%]"
                src="/hero.jpg"
                alt="Sekcja Hero"
                fill={true}
                objectFit="cover"
            />

            <div 
                className="
                    text-white
                    absolute
                    text-2xl
                    md:text-4xl
                    font-extralight
                    w-full
                    max-w-[40rem]
                    top-1/2
                    left-1/2
                    -translate-x-1/2
                    -translate-y-1/2
                    text-center
                    p-4
                    shado
                "
            >
               <p className="text-base">DOMKI | SAUNA | JACUZZI </p>
               <p className="mt-2 mb-4">NASZ POMYSŁ NA ODPOCZYNEK</p>
               <LinkButton>Zarezerwuj</LinkButton>
               <LinkButton className="ml-4" href="/gallery">Zobacz Galierę</LinkButton>           
            </div>
        </div>
    )
}