import { Attraction } from "../Attraction/Attraction";

const atractions = [
    {
        image: "http://domkimazurskie.com.pl/assets/images/324475214-1161375504493255-1672464503178243482-n-302x403.jpg",
        desc: "Sauna ogrodowa beczka 300 showroom. Dwa miejsca leżące lub 8 miejsc siedzących., opalana drewnem. W połączeniu z olejkami eterycznymi pozwala zregenerować drogi oddechowe. Ma również znakomite oddziaływanie na skórę. "
    },
    {
        image: "http://domkimazurskie.com.pl/assets/images/324475214-1161375504493255-1672464503178243482-n-302x403.jpg",
        desc: "Sauna ogrodowa beczka 300 showroom. Dwa miejsca leżące lub 8 miejsc siedzących., opalana drewnem. W połączeniu z olejkami eterycznymi pozwala zregenerować drogi oddechowe. Ma również znakomite oddziaływanie na skórę. "
    },
    {
        image: "http://domkimazurskie.com.pl/assets/images/324475214-1161375504493255-1672464503178243482-n-302x403.jpg",
        desc: "Sauna ogrodowa beczka 300 showroom. Dwa miejsca leżące lub 8 miejsc siedzących., opalana drewnem. W połączeniu z olejkami eterycznymi pozwala zregenerować drogi oddechowe. Ma również znakomite oddziaływanie na skórę. "
    },
    {
        image: "http://domkimazurskie.com.pl/assets/images/324475214-1161375504493255-1672464503178243482-n-302x403.jpg",
        desc: "Sauna ogrodowa beczka 300 showroom. Dwa miejsca leżące lub 8 miejsc siedzących., opalana drewnem. W połączeniu z olejkami eterycznymi pozwala zregenerować drogi oddechowe. Ma również znakomite oddziaływanie na skórę. "
    },
    {
        image: "http://domkimazurskie.com.pl/assets/images/324475214-1161375504493255-1672464503178243482-n-302x403.jpg",
        desc: "Sauna ogrodowa beczka 300 showroom. Dwa miejsca leżące lub 8 miejsc siedzących., opalana drewnem. W połączeniu z olejkami eterycznymi pozwala zregenerować drogi oddechowe. Ma również znakomite oddziaływanie na skórę. "
    },
    {
        image: "http://domkimazurskie.com.pl/assets/images/324475214-1161375504493255-1672464503178243482-n-302x403.jpg",
        desc: "Sauna ogrodowa beczka 300 showroom. Dwa miejsca leżące lub 8 miejsc siedzących., opalana drewnem. W połączeniu z olejkami eterycznymi pozwala zregenerować drogi oddechowe. Ma również znakomite oddziaływanie na skórę. "
    },
]

export function Atrractions() {
    return (
        <ul className="flex flex-wrap mt-5 justify-between">
              {atractions.map((atraction, key) => {
                return (
                    <li className="mb-6 w-full lg:w-[calc(33.333%-1rem)] md:w-[calc(50%-1rem)]" key={key}>
                        <Attraction image={atraction.image}>
                            {atraction.desc}
                        </Attraction>
                    </li>
                )
            })}
        </ul>
    )
}