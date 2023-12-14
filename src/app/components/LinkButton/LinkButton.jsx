import Link from "next/link";

export function LinkButton({children, href = '', onClick, className = ""}) {
    return (
        <Link
            onClick={onClick}
            className={`
                inline-block
                text-xl
                border
                rounded-full
                mx-auto
                mt-4
                p-2
                min-w-[15rem]
                cursor-pointer
                ${className}
            `}
            href={href}
        >
            {children}
        </Link>
    ) 
    
}