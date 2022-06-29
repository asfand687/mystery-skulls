import React, { useState } from 'react'
import Logo from '../assets/logo.png'
import Menu from '../assets/menu-bars.svg'
import Close from '../assets/close.svg'

const Navbar = () => {
  const [showNav, setShowNav] = useState(false)
  return (
    <nav className="px-4 bg-white">
      <div className="w-full lg:max-w-[1400px] mx-auto flex items-center md:space-x-10 overflow-x-hidden">
        <img className="w-10" src={Logo} alt="Mystery Skulls" />
        <div className={`flex flex-1 z-0 justify-between transition-transform duration-300 ease-in-out transform ${showNav ? "translate-x-[120%]" : "translate-x-0"}`}>
          <a href="/" className="bg-[#E2E2E2] inline-flex justify-center items-center text-sm font-semibold rounded-full h-10 w-28">
            Home
          </a>
          <button className="bg-[#E2E2E2] inline-flex justify-center items-center text-sm rounded-full h-10 w-28">
            About
          </button>
          <button className="bg-[#E2E2E2] inline-flex justify-center items-center text-sm rounded-full h-10 w-28">
            Rarity
          </button>
          <button className="bg-[#E2E2E2] inline-flex justify-center items-center text-sm rounded-full h-10 w-28">
            Roadmap
          </button>
          <button className="bg-[#E2E2E2] inline-flex justify-center items-center text-sm rounded-full h-10 w-28">
            FAQ
          </button>
          <button className="bg-[#E2E2E2] inline-flex justify-center items-center text-sm rounded-full h-10 w-28">
            Team
          </button>
          <button className="bg-[#E2E2E2] inline-flex btn-gradient justify-center items-center text-sm rounded-full h-10 w-28">
            Mint
          </button>
        </div>
        <div className="z-10">
          <img onClick={() => setShowNav(!showNav)} className={`cursor-pointer ${showNav ? "block" : "hidden"}`} src={Menu} alt="menu" />
          <img onClick={() => setShowNav(!showNav)} className={`cursor-pointer ${!showNav ? "block" : "hidden"}`} src={Close} alt="close" />
        </div>
      </div>
    </nav>
  )
}

export default Navbar