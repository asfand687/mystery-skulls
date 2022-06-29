import React from 'react'
import { ReactComponent as FAQTitle } from '../assets/faq-title.svg'

const FAQSection = () => {
  return (
    <section className="py-20">
      <div className="w-full relative max-w-5xl mx-auto p-4">
        <FAQTitle />
        <div className='flex py-16'>
          <article className="flex-1 text-white space-y-6 border-r border-white">
            <div className="space-y-2 text-xl">
              <h2 className="font-bold">Question One</h2>
              <p className="w-[26rem]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>

            <div className="space-y-2 text-xl">
              <h2 className="font-bold">Question One</h2>
              <p className="w-[26rem]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>

            <div className="space-y-2 text-xl">
              <h2 className="font-bold">Question One</h2>
              <p className="w-[26rem]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </article>
          <article className="flex-1 flex flex-col items-end text-white space-y-6">
            <div className="space-y-2 text-xl ">
              <h2 className="font-bold">Question One</h2>
              <p className="w-[26rem]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>

            <div className="space-y-2 text-xl ">
              <h2 className="font-bold">Question One</h2>
              <p className="w-[26rem]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>

            <div className="space-y-2 text-xl ">
              <h2 className="font-bold">Question One</h2>
              <p className="w-[26rem]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}

export default FAQSection