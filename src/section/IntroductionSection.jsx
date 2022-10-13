import React from 'react'
import Skull from '../assets/daniel-transparent.png'

const IntroductionSection = () => {
  return (
    <section className="section-inset lg:pt-20 text-white" id="about">
      <div className="w-full relative max-w-5xl mx-auto p-4 space-y-8">
        <h2 className="font-avander text-5xl md:text-7xl text-center">What Is Mystery Skulls?</h2>
        <div className="flex flex-col md:flex-row items-center justify-center border-b-4 md:space-x-16 border-white">
          <article className="order-2 md:order-1">
            <p className="font-semibold max-w-md">
              As a project, we do not intend to just be as an upcoming NFT Collection. These 7,777 Mystery Skulls have different meanings to everyone in the main and OG team. Mystery Skulls has been in the progress of being carefully designed, thought-out and developed for the past year and a half and finally is brought to life better than ever was and will be.
            </p>
          </article>
          <article className="order-1 md:order-2 pb-4 md:pb-0">
            <img src={Skull} alt="Daniel" />
          </article>
        </div>
      </div>
    </section>
  )
}

export default IntroductionSection