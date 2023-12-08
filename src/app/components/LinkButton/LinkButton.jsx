export function LinkButton({children, href, className = ""}) {
    return (
        <a
            className={`
                inline-block
                text-xl
                border
                rounded-full
                mx-auto
                mt-4
                p-2
                min-w-[15rem]
                ${className}
            `}
            href={href}
        >
            {children}
        </a>
    ) 
    
}