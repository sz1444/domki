import Image from "next/image";
import { LinkButton } from "../LinkButton/LinkButton";
import { LinkButtonMain } from "../LinkButtonMain/LinkButtonMain";

export function Cottage({children, image, name, reverse}) {
    return (
        <div className={`shadow-xl flex flex-row flex-wrap lg:flex-nowrap ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>
            <Image
                className="m-auto w-full"
                src="/hero.jpg"
                alt="Sekcja Hero"
                width={403}
                height={403}
            />
            <div className="p-6 md:p-8 flex flex-col justify-center">
                <h3 className="uppercase font-light mb-2 text-left w-full">{name}</h3>
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