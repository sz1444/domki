import { useContext, useEffect, useState } from "react"
import { Modal } from "../Modal/Modal"
import { ModalContext } from "@/app/contexts/ModalContext"
import { FormReservation } from "../FormReservation/FormReservation";

const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("foo");
    }, 3000);
});

export const ModalReservation = () => {
    const [isOpenModal, setIsOpenModal] = useContext(ModalContext);
    const [isLoading, setIsLoading] = useState(false);
    const [sendStatus, setSendStatus] = useState(null);

    useEffect(() => {
        if (!sendStatus) return;

        setTimeout(() => {
            setIsOpenModal(false);
            setSendStatus(null);
        }, 5000)
    }, [sendStatus])

    return (
        <Modal isOpen={isOpenModal} header="Zarezerwuj pobyt" setClose={() => setIsOpenModal(false)}>
            <div className="md:w-[450px]">
                {isLoading && <p className="text-sm">Wysyłam formularz..</p> }
                
                {(!isLoading && !sendStatus) && <FormReservation  setIsLoading={setIsLoading} setSendStatus={setSendStatus}/>}

                {(!isLoading && sendStatus) && <div>{sendStatus}</div>}
            </div>
        </Modal>
    )
}