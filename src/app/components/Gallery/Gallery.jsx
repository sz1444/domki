"use client";

import Image from "next/image";
import { Container } from "../Container/Container";
import { useState } from "react";
import { Modal } from "../Modal/Modal";

const x = [1,2,3,4,5,6,7,8,9,10,12,13,14,15,16,17,18,19,20];

export function Gallery() {
    const [isScreenImage, setIsScreenImage] = useState('/lis.jpeg');

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleCloseModal = () => setIsModalOpen(false);

    return (
            <>
                <div className="w-full max-h-[calc(100vh-300px)] flex items-center mb-1 hidden">
                    <Image
                        className="w-auto m-auto max-h-full mb-1 shadow-md rounded-lg block "
                        objectFit={true}
                        src={isScreenImage}
                        alt="Sekcja Hero"
                        width={403}
                        height={403}
                    />
                </div>

                <Modal isOpen={isModalOpen} setClose={handleCloseModal}>
                    <Image
                            className="w-auto m-auto max-h-full block"
                            objectFit={true}
                            src={isScreenImage}
                            alt="Sekcja Hero"
                            width={1000}
                            height={1000}
                        />
                </Modal>
        
                <ul className="flex flex-wrap pb-4">
                    {x.map(index => {
                        return (
                            <li key={index} className="w-1/2 md:w-1/3 lg:w-1/4">
                                <Image
                                    className="transition-all w-full p-[1px] block min-h-full object-cover filter grayscale-[50%] hover:grayscale-0"
                                    objectFit={true}
                                    src={index % 2 ? '/lis.jpeg' : '/hero.jpg'}
                                    alt="Sekcja Hero"
                                    width={1000}
                                    height={1000}
                                    onClick={() => {
                                        setIsScreenImage(index % 2 ? '/lis.jpeg' : '/hero.jpg')
                                        setIsModalOpen(true);
                                    }
                                }
                                />
                            </li>
                        )
                    })}
                </ul>
            </>
    )
}

1234

