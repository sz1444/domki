import { ButtonMain } from "../ButtonMain/ButtonMain";

export function ContactBlock({header, subheader, link, linkContent, fullWidth, buttonContent}) {

    return (
        <div className={`flex justify-between items-end p-10 w-full mb-8 shadow-2xl flex-wrap bg-white ${fullWidth ? "" : "md:w-[calc(50%-1rem)]"}`}>
            <div>
                <h3 className="text-2xl font-light">{header}</h3> 
                <p className="mb-5 mt-2">{subheader}</p>
                <a className="underline" href={link}>{linkContent}</a>
            </div>

            <ButtonMain>{buttonContent}</ButtonMain>
        </div>
    )

}