import React from 'react'
import { ReactComponent as Twitter } from '../assets/twitter.svg'
import Daniel from '../assets/daniel.jpg'
import Davyd from '../assets/davyd.png'
import Aleksei from '../assets/alexei.jpg'
import Marko from '../assets/marko.png'
import Gabriel from '../assets/gabriel.jpg'
import Timmothy from '../assets/timmothy.jpg'
import Charlie from '../assets/charlie.jpg'

const TeamSection = () => {
  return (
    <section id="team">
      <div className="flex flex-col items-center text-white px-4 lg:pb-8">
        <h2 className="font-avander text-center text-4xl lg:text-7xl ">The Mystery Skulls Team</h2>
        <h3 className="font-avander text-5xl pt-4 lg:pt-10 pb-4">About Team</h3>
        <p className="max-w-2xl lg:text-center">
          Our team consists of well-educated and well vetted. NFT enthusiasts.
          They’ve put everything into the project, working every day to PREFECT
          every single piece of the project itself.
        </p>
      </div>
      <div className="w-full max-w-6xl mx-auto p-4">
        <section className="flex justify-center flex-wrap gap-x-4 gap-y-10">
          <article className="bg-roadmap tombstone bg-white pt-8 lg:pt-0 w-full lg:w-[340px] h-[600px]">
            <div className="px-4 max-w-[340px] mx-auto relative top-28 space-y-8">
              <img className='mx-auto' src={Davyd} alt="Davyd" />
              <div className='p-6 text-[#313131] space-y-4'>
                <h2 className='text-xl font-bold'>Davyd</h2>
                <h3 className='text-xl font-bold'>Founder & Team Management</h3>
                <div className="flex gap-x-2">
                  <Twitter className='text-black' />
                </div>
              </div>
            </div>
          </article>
          <article className="bg-roadmap tombstone bg-white pt-8 lg:pt-0 w-full lg:w-[340px] h-[600px]">
            <div className="px-4 max-w-[340px] mx-auto relative top-28 space-y-8">
              <img className='mx-auto' src={Daniel} alt="Daniel" />
              <div className='p-6 text-[#313131] space-y-4'>
                <h2 className='text-xl font-bold'>Daniel</h2>
                <h3 className='text-xl font-bold'>Founder & Team Management</h3>
                <div className="flex gap-x-2">
                  <Twitter className='text-black' />
                </div>
              </div>
            </div>
          </article>
          <article className="bg-roadmap tombstone bg-white pt-8 lg:pt-0 w-full lg:w-[340px] h-[600px]">
            <div className="px-4 max-w-[340px] mx-auto relative top-28 space-y-8">
              <img className='mx-auto' src={Aleksei} alt="Aleksei" />
              <div className='p-6 text-[#313131] space-y-4'>
                <h2 className='text-xl font-bold'>Aleksei</h2>
                <h3 className='text-xl font-bold lg:pb-6'>Accounting</h3>
                <div className="flex gap-x-2">
                  <Twitter className='text-black' />
                </div>
              </div>
            </div>
          </article>
        </section>
      </div>

      <div className="w-full max-w-[1440px] mx-auto p-4 pt-10">
        <section className="flex flex-wrap justify-center gap-x-4 gap-y-10">
          <article className="bg-roadmap tombstone bg-white pt-8 lg:pt-0 w-full lg:w-[340px] h-[600px]">
            <div className="px-4 max-w-[340px] mx-auto relative top-28 space-y-8">
              <img className='mx-auto' src={Marko} alt="Marko" />
              <div className='p-6 text-[#313131] space-y-4'>
                <h2 className='text-xl font-bold'>Marko</h2>
                <h3 className='text-xl font-bold lg:pb-6'>Artist</h3>
                <div className="flex gap-x-2">
                  <Twitter className='text-black' />
                </div>
              </div>
            </div>
          </article>
          <article className="bg-roadmap tombstone bg-white pt-8 lg:pt-0 w-full lg:w-[340px] h-[600px]">
            <div className="px-4 max-w-[340px] mx-auto relative top-28 space-y-8">
              <img className=' mx-auto' src={Timmothy} alt="Timmorhy" />
              <div className='p-6 text-[#313131] space-y-4'>
                <h2 className='text-xl font-bold'>Timmothy</h2>
                <h3 className='text-xl font-bold lg:pb-6'>Web Developer</h3>
                <div className="flex gap-x-2">
                  <Twitter className='text-black' />
                </div>
              </div>
            </div>
          </article>
          <article className="bg-roadmap tombstone bg-white pt-8 lg:pt-0 w-full lg:w-[340px] h-[600px]">
            <div className="px-4 max-w-[340px] mx-auto relative top-28 space-y-8">
              <img className='mx-auto' src={Gabriel} alt="Gabriel" />
              <div className='p-6 text-[#313131] space-y-4'>
                <h2 className='text-xl font-bold'>Gabriel</h2>
                <h3 className='text-xl font-bold lg:pb-6'>Marketing</h3>
                <div className="flex gap-x-2">
                  <Twitter className='text-black' />
                </div>
              </div>
            </div>
          </article>
          <article className="bg-roadmap tombstone bg-white pt-8 lg:pt-0 w-full lg:w-[340px] h-[600px]">
            <div className="px-4 max-w-[340px] mx-auto relative top-28 space-y-8">
              <img className='mx-auto' src={Charlie} alt="Charlie" />
              <div className='p-6 text-[#313131] space-y-4'>
                <h2 className='text-xl font-bold'>Charlie</h2>
                <h3 className='text-xl font-bold'>Smart Contract Developer</h3>
                <div className="flex gap-x-2">
                  <Twitter className='text-black' />
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