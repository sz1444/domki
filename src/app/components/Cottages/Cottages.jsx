import { Cottage } from "../Cottage/Cottage";

const cotagges = [
    {
        name: "Domen 1",
        image: "http://domkimazurskie.com.pl/assets/images/323944744-561119692698089-1202939475250705788-n-403x403.jpg",
        desc: "Sauna ogrodowa beczka 300 showroom. Dwa miejsca leżące lub 8 miejsc siedzących., opalana drewnem. W połączeniu z olejkami eterycznymi pozwala zregenerować drogi oddechowe. Ma również znakomite oddziaływanie na skórę. "
    },
    {
        name: "Domen 1",
        image: "http://domkimazurskie.com.pl/assets/images/323944744-561119692698089-1202939475250705788-n-403x403.jpg",
        desc: "Sauna ogrodowa beczka 300 showroom. Dwa miejsca leżące lub 8 miejsc siedzących., opalana drewnem. W połączeniu z olejkami eterycznymi pozwala zregenerować drogi oddechowe. Ma również znakomite oddziaływanie na skórę. "
    },
    {
        name: "Domen 1",
        image: "http://domkimazurskie.com.pl/assets/images/323944744-561119692698089-1202939475250705788-n-403x403.jpg",
        desc: "Sauna ogrodowa beczka 300 showroom. Dwa miejsca leżące lub 8 miejsc siedzących., opalana drewnem. W połączeniu z olejkami eterycznymi pozwala zregenerować drogi oddechowe. Ma również znakomite oddziaływanie na skórę. "
    },
]

export function Cotagges() {
    return (
        <ul className="flex flex-wrap mt-5 justify-between">
              {cotagges.map((cotagge, key) => {
                return (
                    <li className="mb-8 w-full" key={key}>
                        <Cottage image={cotagge.image} name={cotagge.name} reverse={!((key+1) % 2)}>
                            {cotagge.desc}
                        </Cottage>
                    </li>
                )
            })}
        </ul>
    )
}