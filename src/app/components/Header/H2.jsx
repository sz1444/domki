export function H2({children, className}) {
    return ( 
        <h2 className={`font-light text-2xl md:text-4xl relative pb-1 ${className}`}>
            {children}
        </h2>
    )
}