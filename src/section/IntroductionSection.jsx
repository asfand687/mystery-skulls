import React from 'react'
import { ReactComponent as Graveyard } from '../assets/graveyard.svg'
import Logo from '../assets/logo-big.png'
import SkullOne from '../assets/skull-01.png'
import SkullTwo from '../assets/skull-02.png'
import SkullThree from '../assets/skull-03.png'

const IntroductionSection = () => {
  return (
    <section className="section-inset pt-20" id="about">
      <div className="w-full relative max-w-5xl mx-auto bg-graveyard p-4">
        <Graveyard className="mx-auto relative z-0" />
        <div className="absolute flex top-0 left-0 z-10 py-28 px-20">
          <div><img src={Logo} alt="mystery skulls" /></div>
          <div className="flex-1 pl-6">
            <section className="flex lg:space-x-4">
              <article className="rounded-[30px]">
                <div className="bg-[#014051] h-56 w-48 rounded-t-[30px] flex justify-center items-center">
                  <img src={SkullOne} alt="Mystery Skulls" />
                </div>
                <div>
                  <p className="font-avander bg-white drop-shadow-md h-16 text-xl rounded-b-[30px] flex justify-center items-center">Level One
                  </p>
                </div>
              </article><article className="rounded-[30px]">
                <div className="bg-[#EEA623] h-56 w-48 rounded-t-[30px] flex justify-center items-center">
                  <img src={SkullTwo} alt="Mystery Skulls" />
                </div>
                <div>
                  <p className="font-avander bg-white drop-shadow-md h-16 text-xl rounded-b-[30px] flex justify-center items-center">
                    Level Two
                  </p>
                </div>
              </article><article className="rounded-[30px]">
                <div className="bg-[#8AB274] h-56 w-48 rounded-t-[30px] flex justify-center items-center">
                  <img src={SkullThree} alt="Mystery Skulls" />
                </div>
                <div>
                  <p className="font-avander bg-white drop-shadow-md h-16 rounded-b-[30px] flex justify-center items-center">
                    Level Three
                  </p>
                </div>
              </article>
            </section>
            <section>
              <h2 className="text-4xl font-avander text-center pt-4 pb-2">What Is Mystery Skulls?</h2>
              <p className="text-[15px] text-center px-5">As a project, we do not intend to just be as an upcoming NFT Collection.
                These 7,777 Mystery Skulls have different meanings to everyone in the
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