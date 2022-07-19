import React from 'react'
import Skull from '../assets/logo.png'
import { ReactComponent as Twitter } from '../assets/twitter.svg'
import { ReactComponent as Discord } from '../assets/discord.svg'

const Footer = () => {
  return (
    <footer className="py-10 flex justify-center">
      <div className="space-y-6">
        <img src={Skull} className="w-12 mx-auto" alt="Mystery Skulls" />
        <div className="flex justify-center gap-x-4">
          <div className="text-white">
            <a href="https://twitter.com/_MysterySkulls_">
              <Twitter />
            </a>
          </div>
          <div className="text-white">
            <a href="https://discord.gg/mysteryskulls">
              <Discord />
            </a>
          </div>

        </div>
      </div>
    </footer>
  )
}

export default Footer