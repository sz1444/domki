"use client";

import { useScrollVisable } from "@/app/hooks/useScrollVisable";
import { useEffect } from "react";

export function Modal({children, header, isOpen, setClose}) {

    useScrollVisable(!isOpen);

    if (!isOpen) return <></>;

    return (
        <div
            className="fixed top-0 left-0 w-screen h-screen flex bg-[#0009] z-20 justify-center items-start"
            onClick={setClose}
        >
            <div
                className="w-screen h-screen bg-white p-5 md:p-10 relative md:w-auto md:h-auto md:mt-10 shadow-2xl"
                onClick={e => e.stopPropagation()}
            >
                <div className="min-h-[40px]">
                    {header && <p className="text-2xl pr-8">{header}</p>}
                    <button
                        className="absolute top-5 right-5 md:top-10 md:right-10 text-2xl text-gray-500"
                        onClick={setClose}
                    >
                        &#x2715;
                    </button>
                </div>
          
                <div className="mt-5">
                    {children}
                </div>
            </div>
        </div>
    )
}