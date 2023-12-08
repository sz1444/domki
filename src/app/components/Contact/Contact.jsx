import { EMAIL, PHON_NUMBER } from "@/app/static/contact";
import { LinkButtonMain } from "../LinkButtonMain/LinkButtonMain";
import { Container } from "../Container/Container";

export function Contact() {
    return (
        <div className="my-12 flex flex-wrap justify-between">
            <div className="flex justify-between items-end p-10 w-full my-5 md:w-[calc(50%-1rem)] shadow-2xl flex-wrap bg-white">
                <div>
                    <h3 className="text-2xl font-light">Email</h3> 
                    <p className="mb-5 mt-2">Napisz do nas na maila</p>
                    <a className="underline" href="">{EMAIL}</a>
                </div>
                <LinkButtonMain>Wyślij wiadomość</LinkButtonMain>
            </div>
            <div className="flex justify-between items-end p-10 w-full my-5 md:w-[calc(50%-1rem)] shadow-2xl flex-wrap bg-white">
                <div>
                    <h3 className="text-2xl font-light">Telefon</h3> 
                    <p className="mb-5 mt-2">Zadzowń do nas</p>
                    <a className="underline" href="">{PHON_NUMBER}</a>
                </div>
            
                <LinkButtonMain>Zadzwoń</LinkButtonMain>
            </div>
            <div className="flex justify-between items-end p-10 w-full my-5 shadow-2xl flex-wrap bg-white">
                <div>
                    <h3 className="text-2xl font-light">Adres</h3> 
                    <p className="mb-5 mt-2">Znajdziesz nas</p>
                    <a className="" href="">Kruklanki Sołtmany 57B 11-612</a>
                </div>
            
                <LinkButtonMain>Wyznacz trasę</LinkButtonMain>
            </div>
        </div>
    )
}