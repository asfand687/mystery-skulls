import React from 'react'
import Skull from '../assets/logo.png'
import { ReactComponent as Twitter } from '../assets/twitter.svg'
import { ReactComponent as Discord } from '../assets/discord.svg'

const Footer = () => {
  return (
    <footer className="py-10 flex flex-col md:flex-row lg:space-x-72 space-y-2 bg-black relative z-20 px-4 lg:px-10">
      <article>
        <img className="mx-auto w-12" src={Skull} alt="Skull" />
      </article>
      <article className="text-white space-y-2">
        <div className="flex flex-col md:flex-row items-center space-y-2 md:space-x-32">
          <article className="flex space-x-8 text-white">
            <p>About</p>
            <p>Roadmap</p>
            <p>FAQ</p>
            <p>Team</p>
          </article>
          <article className="flex space-x-8 text-[#ADDC68]">
            <Twitter />
            <Discord />
          </article>
        </div>

        <p className="text-center md:text-left">Sign Up For The Latest Mystery Skulls News</p>

        <div className="md:space-x-6 space-y-4">
          <input className="rounded-full text-black px-4 w-full py-2 text-lg outline-none focus:ring-1 focus:ring-slate-800 md:max-w-[360px] " />
          <button className="py-2 px-6 text-lg lg:text-xl text-black font-semibold bg-[#ADDC68] outline-none border-none rounded-full">
            Submit
          </button>
        </div>
      </article>
    </footer>
  )
}

export default Footer