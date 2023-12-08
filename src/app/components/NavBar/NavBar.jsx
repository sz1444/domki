"use client"
import { useEffect, useState } from "react";
import { Logo } from "../Logo/Logo";
import { ContactPhone } from "../ContactPhone/ContactPhone";
import { MainMenuWrapper } from "../MainMenuWrapper/MainMenuWrapper";

const menuClassScrolled = "bg-white drop-shadow-md text-black";

export function NavBar() {
    const [scrollPosistion, setScrollPosition] = useState(0);

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
                ${scrollPosistion > 100 ? menuClassScrolled : 'text-white py-10'}`
            }
        >
            <div>
                <Logo />
                <ContactPhone />
            </div>
            <MainMenuWrapper isScrolled={scrollPosistion > 100}/>
        </div>
    )
}