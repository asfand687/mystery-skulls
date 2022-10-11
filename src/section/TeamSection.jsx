import React from 'react'
import Daniel from '../assets/daniel.jpg'
import Davyd from '../assets/davyd.png'
import Aleksei from '../assets/alexei.jpg'
import Marko from '../assets/marko.png'
import Gabriel from '../assets/gabriel.jpg'
import Timmothy from '../assets/timmothy.jpg'
import Charlie from '../assets/charlie.jpg'
import RoadmapTop from '../assets/roadmap-03-top.png'

const TeamSection = () => {
  return (
    <section id="team">
      <div className="flex flex-col items-center text-white px-4 lg:pb-32 space-y-8">
        <h2 className="font-avander text-center text-4xl lg:text-7xl font-bold">The Mystery Skulls Team</h2>
        <p className="max-w-2xl lg:text-center">
          Our team consists of well-educated and well vetted. NFT enthusiasts.
          They’ve put everything into the project, working every day to PREFECT
          every single piece of the project itself.
        </p>
      </div>
      <div className="w-full max-w-6xl mx-auto p-4">
        <section className="flex justify-center flex-wrap gap-x-8 gap-y-10">
          <article className="bg-white relative pt-8 lg:pt-0 w-full lg:w-[268px] h-[290px]">
            <div className="absolute -top-[85px]">
              <img className="w-[268px]" src={RoadmapTop} alt="roadmap top" />
            </div>
            <div className="px-4 max-w-[340px] mx-auto space-y-2">
              <img className='mx-auto' src={Davyd} alt="Davyd" />
              <div className='px-1 text-[#313131]'>
                <h2 className='text-xl font-bold'>Davyd</h2>
                <h3 className='text-base font-medium'>Founder & Team Management</h3>
              </div>
            </div>
          </article>
          <article className="bg-white relative pt-8 lg:pt-0 w-full lg:w-[268px] h-[290px]">
            <div className="absolute -top-[85px]">
              <img className="w-[268px]" src={RoadmapTop} alt="roadmap top" />
            </div>
            <div className="px-4 max-w-[340px] mx-auto space-y-2">
              <img className='mx-auto' src={Daniel} alt="Daniel" />
              <div className='px-1 text-[#313131]'>
                <h2 className='text-xl font-bold'>Daniel</h2>
                <h3 className='text-base font-medium'>Founder & Team Management</h3>
              </div>
            </div>
          </article>
          <article className="bg-white relative pt-8 lg:pt-0 w-full lg:w-[268px] h-[290px]">
            <div className="absolute -top-[85px]">
              <img className="w-[268px]" src={RoadmapTop} alt="roadmap top" />
            </div>
            <div className="px-4 max-w-[340px] mx-auto space-y-2">
              <img className='mx-auto' src={Aleksei} alt="Aleksei" />
              <div className='px-1 text-[#313131]'>
                <h2 className='text-xl font-bold'>Aleksei</h2>
                <h3 className='text-base font-medium'>Accounting</h3>
              </div>
            </div>
          </article>
        </section>
      </div>

      <div className="w-full max-w-[1440px] mx-auto p-4 pt-28">
        <section className="flex flex-wrap justify-center gap-x-8 gap-y-10">
          <article className="bg-white relative pt-8 lg:pt-0 w-full lg:w-[268px] h-[290px]">
            <div className="absolute -top-[85px]">
              <img className="w-[268px]" src={RoadmapTop} alt="roadmap top" />
            </div>
            <div className="px-4 max-w-[340px] mx-auto space-y-2">
              <img className='mx-auto' src={Marko} alt="Marko" />
              <div className='px-1 text-[#313131]'>
                <h2 className='text-xl font-bold'>Marko</h2>
              </div>
            </div>
          </article>
          <article className="bg-white relative pt-8 lg:pt-0 w-full lg:w-[268px] h-[290px]">
            <div className="absolute -top-[85px]">
              <img className="w-[268px]" src={RoadmapTop} alt="roadmap top" />
            </div>
            <div className="px-4 max-w-[340px] mx-auto space-y-2">
              <img className='mx-auto' src={Timmothy} alt="Timmothy" />
              <div className='px-1 text-[#313131]'>
                <h2 className='text-xl font-bold'>Timmothy</h2>
              </div>
            </div>
          </article>
          <article className="bg-white relative pt-8 lg:pt-0 w-full lg:w-[268px] h-[290px]">
            <div className="absolute -top-[85px]">
              <img className="w-[268px]" src={RoadmapTop} alt="roadmap top" />
            </div>
            <div className="px-4 max-w-[340px] mx-auto space-y-2">
              <img className='mx-auto' src={Gabriel} alt="Gabriel" />
              <div className='px-1 text-[#313131]'>
                <h2 className='text-xl font-bold'>Gabriel</h2>
              </div>
            </div>
          </article>
          <article className="bg-white relative pt-8 lg:pt-0 w-full lg:w-[268px] h-[290px]">
            <div className="absolute -top-[85px]">
              <img className="w-[268px]" src={RoadmapTop} alt="roadmap top" />
            </div>
            <div className="px-4 max-w-[340px] mx-auto space-y-2">
              <img className='mx-auto' src={Charlie} alt="Charlie" />
              <div className='px-1 text-[#313131]'>
                <h2 className='text-xl font-bold'>Charlie</h2>
              </div>
            </div>
          </article>
        </section>
      </div>
    </section>
  )
}

export default TeamSection