import { H2 } from "../Header/H2";

export function SectionPage({children, header, subheader}) {
    return (
        <section className="py-20 px-4">
            <H2 className="">{header}</H2>
            <p className="mt-2">{subheader}</p>
            {children}
        </section>
    )
}