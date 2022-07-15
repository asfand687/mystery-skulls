import React, { useState } from 'react'
import Logo from '../assets/logo.png'
import Menu from '../assets/menu-bars.svg'
import Close from '../assets/close.svg'
import * as Scroll from 'react-scroll'

const Navbar = () => {
  const [showNav, setShowNav] = useState(false)
  return (
    <nav className="fixed z-50 w-full top-0 left-0 px-4 py-2 bg-white">
      <div className="w-full lg:max-w-[1400px] mx-auto flex items-center md:space-x-10 lg:overflow-x-hidden">
        <img className="w-6" src={Logo} alt="Mystery Skulls" />
        <div className={`hidden lg:flex flex-col lg:flex-row flex-1 z-0 space-y-4 lg:space-y-0 lg:space-x-4 items-center justify-center transition-transform duration-300 ease-in-out transform ${showNav ? "translate-y-0 lg:translate-x-0" : "-translate-y-[120%] lg:translate-x-[120%]"}`}>
          <Scroll.Link offset={10} smooth={true} to="hero" className="bg-[#E2E2E2] inline-flex cursor-pointer justify-center items-center text-sm font-semibold rounded-full h-8 w-28">
            Home
          </Scroll.Link>
          <Scroll.Link offset={10} smooth={true} to="about" className="bg-[#E2E2E2] inline-flex cursor-pointer justify-center items-center text-sm rounded-full h-8 w-28">
            About
          </Scroll.Link>
          <Scroll.Link offset={10} smooth={true} to="roadmap" className="bg-[#E2E2E2] inline-flex cursor-pointer justify-center items-center text-sm rounded-full h-8 w-28">
            Roadmap
          </Scroll.Link>
          <Scroll.Link offset={10} smooth={true} to="faq" className="bg-[#E2E2E2] inline-flex cursor-pointer justify-center items-center text-sm rounded-full h-8 w-28">
            FAQ
          </Scroll.Link>
          <Scroll.Link offset={-100} smooth={true} to="team" className="bg-[#E2E2E2] inline-flex cursor-pointer justify-center items-center text-sm rounded-full h-8 w-28">
            Team
          </Scroll.Link>
          <button className="bg-[#E2E2E2] inline-flex cursor-pointer btn-gradient justify-center items-center text-sm rounded-full h-8 w-28">
            Mint
          </button>
        </div>
        <div className="absolute right-4 lg:static z-10">
          <img onClick={() => setShowNav(!showNav)} className={`cursor-pointer ${!showNav ? "block" : "hidden"}`} src={Menu} alt="menu" />
          <img onClick={() => setShowNav(!showNav)} className={`cursor-pointer ${showNav ? "block" : "hidden"}`} src={Close} alt="close" />
        </div>
      </div>
      <div className={`bg-white h-screen w-80 flex flex-col items-center space-y-4 lg:hidden fixed ${showNav ? "right-0" : "-right-full"} shadow-xl transition-all duration-300 ease-out`}>
        <Scroll.Link offset={10} smooth={true} to="hero" className="bg-[#E2E2E2] inline-flex cursor-pointer justify-center items-center text-sm font-semibold rounded-full h-8 w-28">
          Home
        </Scroll.Link>
        <Scroll.Link offset={10} smooth={true} to="about" className="bg-[#E2E2E2] inline-flex cursor-pointer justify-center items-center text-sm rounded-full h-8 w-28">
          About
        </Scroll.Link>
        <Scroll.Link offset={10} smooth={true} to="roadmap" className="bg-[#E2E2E2] inline-flex cursor-pointer justify-center items-center text-sm rounded-full h-8 w-28">
          Roadmap
        </Scroll.Link>
        <Scroll.Link offset={10} smooth={true} to="faq" className="bg-[#E2E2E2] inline-flex cursor-pointer justify-center items-center text-sm rounded-full h-8 w-28">
          FAQ
        </Scroll.Link>
        <Scroll.Link offset={-100} smooth={true} to="team" className="bg-[#E2E2E2] inline-flex cursor-pointer justify-center items-center text-sm rounded-full h-8 w-28">
          Team
        </Scroll.Link>
        <button className="bg-[#E2E2E2] inline-flex cursor-pointer btn-gradient justify-center items-center text-sm rounded-full h-8 w-28">
          Mint
        </button>
      </div>
    </nav>
  )
}

export default Navbar