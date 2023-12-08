import Image from "next/image";
import { LinkButtonMain } from "../LinkButtonMain/LinkButtonMain";

export function Cottage({children, image, name, reverse}) {
    return (
        <div className="duration-300 rounded-sm flex flex-row flex-wrap lg:flex-nowrap lg:flex-row bg-white shadow-2xl group">
            <Image
                className={`transition-all m-auto w-full p-2 md:w-1/2 bg-white group-hover:border group-hover:-rotate-6 group-hover:shadow-xl group-hover:scale-105`}
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
                <LinkButtonMain>Zarazerwuj</LinkButtonMain>
            </div>
        </div>
    )
} 