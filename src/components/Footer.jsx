import React from 'react'
import Skull from '../assets/logo.png'
import { ReactComponent as Twitter } from '../assets/twitter.svg'
import { ReactComponent as Boat } from '../assets/boat.svg'

const Footer = () => {
  return (
    <footer className="py-10 flex justify-center">
      <div className="space-y-6">
        <img src={Skull} className="w-16 mx-auto" alt="Mystery Skulls" />
        <div className="flex gap-x-4">
          <div className="text-white">
            <a href="https://twitter.com/_MysterySkulls_">
              <Twitter />
            </a>
          </div>
          <Boat />
        </div>
      </div>
    </footer>
  )
}

export default Footer