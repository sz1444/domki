const MENU = [
    {
        name: 'Home',
        link: 'home'
    },
    {
        name: 'Oferta',
        link: 'oferta'
    },
    {
        name: 'Atrakcje',
        link: 'atrakcje'
    },
    {
        name: 'Cennik',
        link: 'cennik'
    },
    {
        name: 'Kontakt',
        link: 'kontakt'
    },
]

export function MainMenu({setIsOpen}) {
    return (
        <div className="fixed z-20 top-0 left-0 w-screen h-screen bg-white text-black">
            <ul className="flex flex-col justify-center items-center w-full h-full">
                {MENU.map((item, index) => {
                    return (
                        <li key={index}>
                            <a 
                                href={item.link}
                                className="block p-4 text-3xl font-light hover:text-green-900 hover:underline" 
                            >
                                {item.name}
                            </a>
                        </li>
                    )
                })}
            </ul>
            <button 
                className="absolute top-4 right-4 text-3xl"
                onClick={e => setIsOpen(false)}
            >
                &#x2715;
            </button>
        </div>
    )
}