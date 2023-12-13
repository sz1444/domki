import Image from "next/image";

export function Attraction({children, image}) {
    return (
        <div className="pb-[100%] relative">
            <Image
                className="filter brightness-[25%] overflow-hidden rounded-xl"
                src={image}
                alt="Sekcja Hero"
                fill={true}
                objectFit="cover"
            />
            <p className="
                    text-white
                    absolute
                    font-light
                    w-full
                    max-w-[40rem]
                    top-1/2
                    left-1/2
                    -translate-x-1/2
                    -translate-y-1/2
                    text-center
                    p-4
                ">{children}</p>
        </div>
    )
}