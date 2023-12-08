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
               <p className="text-sm">DOMKI | SAUNA | JACUZZI </p>
               <p>NASZ POMYSŁ NA ODPOCZYNEK</p>
               <LinkButton>Zarezerwuj</LinkButton>               
            </div>
        </div>
    )
}