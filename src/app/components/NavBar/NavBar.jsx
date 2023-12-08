"use client"
import { useEffect, useState } from "react";
import { Logo } from "../Logo/Logo";
import { ContactPhone } from "../ContactPhone/ContactPhone";
import { MainMenuWrapper } from "../MainMenuWrapper/MainMenuWrapper";
import { usePathname } from "next/navigation";

const menuClassScrolled = "bg-white drop-shadow-md text-black";

export function NavBar() {
    const pathname = usePathname();
    const [scrollPosistion, setScrollPosition] = useState(window ? window.pageYOffset : 0);


    const getMenuAppearance = () => {
        const menuTransparent = "text-white py-10 transparent";

        const menuColor = "bg-white drop-shadow-md text-black";

        if (pathname != '/') return menuColor;

        if (scrollPosistion > 100) return menuColor;

        return menuTransparent;
    }

    useEffect(() => {
        const handleScroll = e => {
            setScrollPosition(window.pageYOffset);
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, [scrollPosistion]);
    

    return (
        <div
            className={`
                flex
                justify-between
                p-4
                fixed
                w-screen
                z-20
                top-0
                left-0
                transition-all
                group
                ${getMenuAppearance()}`
            }
        >
            <div>
                <Logo />
                <ContactPhone />
            </div>
            <MainMenuWrapper />
        </div>
    )
}