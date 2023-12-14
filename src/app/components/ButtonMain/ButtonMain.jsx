import Link from "next/link";

export function ButtonMain({children, onClick, className, href}) {
    const buttonClass = `bg-lime-600 shadow-md block w-full text-xs text-center text-white rounded-md p-3 font-bold uppercase mt-6 md:w-44 cursor-pointer ${className}`;

    if (href)  {
        return <Link to={href} onClick={onClick} className={buttonClass}>{children}</Link>
    }
 
    return <button onClick={onClick} className={buttonClass}>{children}</button>
}