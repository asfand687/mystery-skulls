import React from 'react'
import Skull from '../assets/logo.png'
import { ReactComponent as Twitter } from '../assets/twitter.svg'
import { ReactComponent as Discord } from '../assets/discord.svg'

const Footer = () => {
  return (
    <footer className="py-10 flex lg:space-x-72 bg-black relative z-20 px-4 lg:px-10">
      <article>
        <img className="w-12" src={Skull} alt="Skull" />
      </article>
      <article className="text-white space-y-2">
        <div className="flex space-x-32">
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

        <p>Sign Up For The Latest Mystery Skulls News</p>

        <div className="space-x-6">
          <input className="rounded-full w-[360px] py-2" />
          <button className="py-2 px-6 text-lg lg:text-xl text-black font-semibold bg-[#ADDC68] outline-none border-none rounded-full">
            Submit
          </button>
        </div>
      </article>
    </footer>
  )
}

export default Footer