import React from 'react'
import { ReactComponent as Twitter } from '../assets/twitter.svg'
import { ReactComponent as Discord } from '../assets/discord.svg'
import James from '../assets/james.png'
import Davyd from '../assets/david.png'
import Daniel from '../assets/daniel.png'
import Marko from '../assets/marko.png'
import Aleksei from '../assets/alexi.png'

const TeamSection = () => {
  return (
    <section id="team">
      <div className="flex flex-col items-center text-white pb-8">
        <h2 className="font-avander text-center text-7xl ">The Mystery Skulls Team</h2>
        <h3 className="font-avander text-5xl pt-10 pb-4">About Team</h3>
        <p className="max-w-2xl text-center">
          Our team consists of well-educated and well vetted. NFT enthusiasts.
          They’ve put everything into the project, working every day to PREFECT
          every single piece of the project itself.
        </p>
      </div>
      <div className="w-full max-w-6xl mx-auto p-4">
        <section className="flex justify-center flex-wrap gap-x-4 gap-y-10">
          <article className="bg-roadmap w-[340px] h-[600px]">
            <div className="px-4 relative top-28 space-y-8">
              <img className='mx-auto' src={Davyd} alt="Davyd" />
              <div className='p-6 text-[#313131] space-y-4'>
                <h2 className='text-xl font-bold'>Davyd</h2>
                <h3 className='text-xl font-bold'>Founder & Team Management</h3>
                <div className="flex gap-x-2">
                  <Twitter className='text-black' />
                  <Discord />
                </div>
              </div>
            </div>
          </article>
          <article className="bg-roadmap w-[340px] h-[600px]">
            <div className="px-4 relative top-28 space-y-8">
              <img className='mx-auto' src={Daniel} alt="Daniel" />
              <div className='p-6 text-[#313131] space-y-4'>
                <h2 className='text-xl font-bold'>Daniel</h2>
                <h3 className='text-xl font-bold'>Founder & Team Management</h3>
                <div className="flex gap-x-2">
                  <Twitter className='text-black' />
                  <Discord />
                </div>
              </div>
            </div>
          </article>
          <article className="bg-roadmap w-[340px] h-[600px]">
            <div className="px-4 relative top-28 space-y-8">
              <img className=' mx-auto' src={James} alt="James" />
              <div className='p-6 text-[#313131] space-y-4'>
                <h2 className='text-xl font-bold'>James</h2>
                <h3 className='text-xl font-bold'>Founder {"&"} Crypto+NFT Enthusiast</h3>
                <div className="flex gap-x-2">
                  <Twitter className='text-black' />
                  <Discord />
                </div>
              </div>
            </div>
          </article>
          <article className="bg-roadmap w-[340px] h-[600px]">
            <div className="px-4 relative top-28 space-y-8">
              <img className='mx-auto' src={Aleksei} alt="Aleksei" />
              <div className='p-6 text-[#313131] space-y-4'>
                <h2 className='text-xl font-bold'>Aleksei</h2>
                <h3 className='text-xl font-bold'>Marketing</h3>
                <div className="flex gap-x-2">
                  <Twitter className='text-black' />
                  <Discord />
                </div>
              </div>
            </div>
          </article>
          <article className="bg-roadmap w-[340px] h-[600px]">
            <div className="px-4 relative top-28 space-y-8">
              <img className='mx-auto' src={Marko} alt="Marko" />
              <div className='p-6 text-[#313131] space-y-4'>
                <h2 className='text-xl font-bold'>Marko</h2>
                <h3 className='text-xl font-bold'>Accountant</h3>
                <div className="flex gap-x-2">
                  <Twitter className='text-black' />
                  <Discord />
                </div>
              </div>
            </div>
          </article>
        </section>
      </div>
    </section>
  )
}

export default TeamSection