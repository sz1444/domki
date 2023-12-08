import { EMAIL, PHON_NUMBER } from "@/app/static/contact";
import { LinkButtonMain } from "../LinkButtonMain/LinkButtonMain";
import { ContactBlock } from "../ContactBlock/ContactBlock";

export function Contact() {
    return (
        <div className="my-12 flex flex-wrap justify-between">
            <ContactBlock 
                header="Email"
                subheader="Napisz do nas na maila"
                link={`mailto:${EMAIL}`}
                linkContent={EMAIL}
                buttonContent="Napisz"
            />

            <ContactBlock 
                header="Telefon"
                subheader="Zadzowń do nas"
                link={`tel:${PHON_NUMBER}`}
                linkContent={PHON_NUMBER}
                buttonContent="Zadzwoń"
            />

            <ContactBlock 
                header="Adres"
                subheader="Znajdziesz nas"
                linkContent="Kruklanki Sołtmany 57B 11-612"
                fullWidth={true}
                buttonContent="Wyznacz trasę"
            />
        </div>
    )
}