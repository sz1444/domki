export function LinkButton({children, href}) {
    return (
        <a
            className="
                inline-block
                text-xl
                border
                rounded-full
                mx-auto
                mt-4
                py-1
                px-5
            "
            href={href}
        >
            {children}
        </a>
    ) 
    
}