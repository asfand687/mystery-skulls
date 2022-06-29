import React from 'react'
import Skull from '../assets/logo-big.png'
import { ReactComponent as Twitter } from '../assets/twitter.svg'

const TeamSection = () => {
  return (
    <section className="py-20">
      <h2 className="font-avander text-center text-7xl text-white">The Mystery Skulls Team</h2>
      <div className="w-full max-w-6xl mx-auto p-4">
        <section className="flex gap-x-4">
          <article className="bg-roadmap flex-1 h-[600px]">
            <div className="'px-14 relative top-12 space-y-8'">
              <img className='w-36 mx-auto' src={Skull} alt="Mystery Skull" />
              <div className='p-6 text-[#313131] space-y-4'>
                <h2 className='text-2xl font-bold'>Name</h2>
                <p className="text-xl">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim purus odio orci, diam etiam erat purus odio lectus.
                </p>
                <Twitter />
              </div>
            </div>
          </article>
          <article className="bg-roadmap flex-1 h-[600px]">
            <div className="'px-14 relative top-12 space-y-8'">
              <img className='w-36 mx-auto' src={Skull} alt="Mystery Skull" />
              <div className='p-6 text-[#313131] space-y-4'>
                <h2 className='text-2xl font-bold'>Name</h2>
                <p className="text-xl">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim purus odio orci, diam etiam erat purus odio lectus.
                </p>
                <Twitter />
              </div>
            </div>
          </article>
          <article className="bg-roadmap flex-1 h-[600px]">
            <div className="'px-14 relative top-12 space-y-8'">
              <img className='w-36 mx-auto' src={Skull} alt="Mystery Skull" />
              <div className='p-6 text-[#313131] space-y-4'>
                <h2 className='text-2xl font-bold'>Name</h2>
                <p className="text-xl">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim purus odio orci, diam etiam erat purus odio lectus.
                </p>
                <Twitter />
              </div>
            </div>
          </article>
        </section>
      </div>
    </section>
  )
}

export default TeamSection