import Image from "next/image";
import { LinkButton } from "../LinkButton/LinkButton";
import { useContext } from "react";
import { ModalContext } from "@/app/contexts/ModalContext";

export function Hero() {
    const [,setIsOpenModal] = useContext(ModalContext);

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
               <p className="text-xs md:text-base">DOMKI | SAUNA | JACUZZI </p>
               <p className="mt-2 mb-4">NASZ POMYSŁ NA ODPOCZYNEK</p>
               <LinkButton onClick={() => setIsOpenModal(true)}>Zarezerwuj</LinkButton>
               <LinkButton className="md:ml-4" href="/gallery">Zobacz Galerię</LinkButton>           
            </div>
        </div>
    )
}