import React from "react"
import Image from 'next/image'
import Logo from '../assets/image/logo.png'
import Link from "next/link"
import ICart from '../assets/icon/cart.svg'
const MENU = [
    {
        label: 'Home',
        url: '/hone'
    },
    {
        label: 'Menu',
        url: '/hone'
    },
    {
        label: 'About Us',
        url: '/hone'
    },
    {
        label: 'Order Online',
        url: '/hone'
    },
    {
        label: 'Reservation',
        url: '/hone'
    },
    {
        label: 'Contact Us',
        url: '/hone'
    }
]

const NavBar = () => {
    return (
        <div className="my-8 flex items-center justify-between">
            <Image className="cursor-pointer" src={Logo} alt={"Logo"} />
            {
                MENU.map(item => <Link key={item.label} className="hover:text-orange text-base py-2 px-4" href={item.url}>{item.label}</Link>)
            }
            <div className="rounded-full bg-gray p-3 relative">
              <Image className="cursor-pointer" src={ICart} alt="cart"/>
              <div className="bg-red center rounded-full w-5 h-5 absolute -top-2 -right-2">
                <span className="text-white text-xs">3</span>
              </div>
            </div>
            <div className="bg-green center px-8 py-2 rounded-full">
                <span className="text-white">Log in</span>
            </div>
        </div>
    )
}

export default NavBar