import Image from "next/image";
import { ButtonMain } from "../ButtonMain/ButtonMain";
import { useContext } from "react";
import { ModalContext } from "@/app/contexts/ModalContext";

export function Cottage({children, image, name}) {
    const [isOpen, setIsOpen] = useContext(ModalContext);

    return (
        <div className="duration-300 rounded-sm flex flex-row flex-wrap lg:flex-nowrap lg:flex-row bg-white shadow-2xl group">
            <Image
                className={`transition-all m-auto w-full p-2 md:w-1/2 bg-white md:group-hover:-rotate-6 md:group-hover:shadow-xl md:group-hover:scale-105`}
                src="/hero.jpg"
                alt="Sekcja Hero"
                width={403}
                height={403}
            />
            <div className="p-6 md:p-8 flex flex-col justify-center md:w-1/2">
                <h3 className="uppercase font-light mb-2 text-left w-full text-xl">{name}</h3>
                <p className="
                    font-extralight
                    w-full
                ">
                    {children}
                </p>
                <ButtonMain onClick={setIsOpen}>Zarazerwuj</ButtonMain>
            </div>
        </div>
    )
} 