import React from 'react'
import Skull from '../assets/logo.png'
import { ReactComponent as Twitter } from '../assets/twitter.svg'
import { ReactComponent as Boat } from '../assets/boat.svg'
import { ReactComponent as Instagram } from '../assets/insta.svg'

const Footer = () => {
  return (
    <footer className="py-20 pb-10 flex justify-center">
      <div className="space-y-6">
        <img src={Skull} className="w-16 mx-auto" alt="Mystery Skulls" />
        <div className="flex gap-x-4">
          <div className="text-white">
            <Twitter />
          </div>
          <Boat />
          <Instagram />
        </div>
      </div>
    </footer>
  )
}

export default Footer