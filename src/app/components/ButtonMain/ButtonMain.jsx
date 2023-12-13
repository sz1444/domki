export function ButtonMain({children, onClick, className, href}) {
    const buttonClass = `bg-lime-600 shadow-md block w-full text-xs text-center text-white rounded-md p-3 font-bold uppercase mt-6 md:w-44 cursor-pointer ${className}`;

    if (href)  {
        return <a href={href} onClick={onClick} className={buttonClass}>{children}</a>
    }
 
    return <button onClick={onClick} className={buttonClass}>{children}</button>
}