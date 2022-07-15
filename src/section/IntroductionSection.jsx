import React from 'react'
import { ReactComponent as Graveyard } from '../assets/graveyard.svg'
import Logo from '../assets/logo-big.png'
import SkullOne from '../assets/skull-01.png'
import SkullTwo from '../assets/skull-02.png'
import SkullThree from '../assets/skull-03.png'

const IntroductionSection = () => {
  return (
    <section className="section-inset lg:pt-20" id="about">
      <div className="w-full bg-white lg:bg-transparent relative max-w-5xl mx-auto p-4">
        <Graveyard className="hidden lg:block mx-auto relative z-0" />
        <div className="lg:absolute flex flex-col items-center lg:flex-row top-0 left-0 z-10 lg:py-28 lg:px-20">
          <div className="pb-4 lg:pb-0"><img src={Logo} alt="mystery skulls" /></div>
          <div className="flex-1 pl-6">
            <section className="flex flex-col items-center space-y-4 lg:space-y-0 lg:flex-row lg:space-x-4">
              <article className="rounded-[30px]">
                <div className="bg-[#014051] h-56 w-48 rounded-t-[30px] flex justify-center items-center">
                  <img src={SkullOne} alt="Mystery Skulls" />
                </div>
                <div>
                  <p className="font-avander bg-white drop-shadow-md h-16 text-xl rounded-b-[30px] flex justify-center items-center">Common
                  </p>
                </div>
              </article><article className="rounded-[30px]">
                <div className="bg-[#EEA623] h-56 w-48 rounded-t-[30px] flex justify-center items-center">
                  <img src={SkullTwo} alt="Mystery Skulls" />
                </div>
                <div>
                  <p className="font-avander bg-white drop-shadow-md h-16 text-xl rounded-b-[30px] flex justify-center items-center">
                    Legendary
                  </p>
                </div>
              </article><article className="rounded-[30px]">
                <div className="bg-[#8AB274] h-56 w-48 rounded-t-[30px] flex justify-center items-center">
                  <img src={SkullThree} alt="Mystery Skulls" />
                </div>
                <div>
                  <p className="font-avander bg-white drop-shadow-md h-16 rounded-b-[30px] flex justify-center items-center">
                    Rare
                  </p>
                </div>
              </article>
            </section>
            <section className="pt-4 lg:pt-0">
              <h2 className="text-4xl font-avander text-center pt-4 pb-2">What Is Mystery Skulls?</h2>
              <p className="text-[15px] text-center px-5">As a project, we do not intend to just be as an upcoming NFT Collection.
                These Mystery Skulls have different meanings to everyone in the
                main and OG team. Mystery Skulls has been in the progress of being
                carefully designed, thought-out and developed for the past year and a half
                and finally is brought to life better than ever was and will be. </p>
            </section>
          </div>
        </div>
      </div>
    </section>
  )
}

export default IntroductionSection