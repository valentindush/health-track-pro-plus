'use client'
const NavBar = () => {
    return (
        <nav className="w-full bg-white p-2 backdrop-blur-sm sticky top-0 shadow-sm px-4">
            <div className="flex items-center gap-2 w-fit mr-0 ml-auto">
                <span className="text-sm font-semibold text-gray-800">Valentin Dushime</span>
                <div className="w-8 h-8 border-2 border-gray-500 rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path className="stroke-gray-700" strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                    </svg>
                </div>
            </div>
        </nav>
    )
}

export default NavBar