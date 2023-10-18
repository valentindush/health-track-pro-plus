'use client'

import Link from "next/link"
import { useState } from "react"

const navLinks:{name: string, url:string}[] = [
    {
        name: 'Overview',
        url: '/'
    },
    {
        name: 'Temperature',
        url: '/temp'
    },
    {
        name: 'Heart Beat Rate',
        url: '/bpm'
    },
    {
        name: 'Profile',
        url: '/profile'
    }
]

const SideBar = ()=>{

    const [activeItem, setActiveItem] = useState("home")

    return(
        <nav className="w-[15rem] bg-white h-screen p-4 shadow-md ">
            <div className="">
                <h1 className="text-xlfont-bold text-pink-600">HealthTrack Pro</h1>
            </div>
            <div className="flex flex-col gap-2 mt-12">
                <Link onClick={()=>setActiveItem("home")} href="/app/home" className={`flex items-center gap-2 ${activeItem === "home"?"bg-gray-200":"bg-white"} hover:bg-gray-200 p-3 rounded-lg transition-colors`}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                    </svg>
                    <span className="font-semibold text-gray-800">Home</span>
                </Link>

                <Link onClick={()=>setActiveItem("temp")} href="/app/temp" className={`flex items-center gap-2 ${activeItem === "temp"?"bg-gray-200":"bg-white"} hover:bg-gray-200 p-3 rounded-lg transition-colors`}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6z" />
                    </svg>
                    <span className="font-semibold text-gray-800">Temperature</span>
                </Link>

                <Link onClick={()=>setActiveItem("bpm")} href="/app/bpm" className={`flex items-center gap-2 ${activeItem === "bpm"?"bg-gray-200":"bg-white"} hover:bg-gray-200 p-3 rounded-lg transition-colors`}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                    </svg>

                    <span className="font-semibold text-gray-800">Heart beat</span>
                </Link>

            </div>

        </nav>
    )
}

export default SideBar