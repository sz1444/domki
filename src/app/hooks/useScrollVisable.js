import { useEffect } from "react"

export const useScrollVisable = visableScroll => {
    useEffect(() => {
        if (!visableScroll) {
            return document.body.classList.add('overflow-y-hidden')
        }

        return document.body.classList.remove('overflow-y-hidden')
    }, [visableScroll])
}