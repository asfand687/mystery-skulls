import React from 'react'
import { ReactComponent as FAQTitle } from '../assets/faq-title.svg'

const FAQSection = () => {
  return (
    <section id="faq">
      <div className="w-full relative max-w-5xl mx-auto p-4">
        <FAQTitle className="w-full" />
        <div className='flex lg:flex-row flex-col space-y-4 lg:space-y-0 items-center lg:items-start py-16'>
          <article className="flex-1 text-white space-y-6 lg:border-r border-white">
            <div className="space-y-2 text-xl">
              <h2 className="font-bold">Mint Date?</h2>
              <p className="w-full max-w-[26rem]">Approximately 1 month <br />Supply: TBD</p>
            </div>

            <div className="space-y-2 text-xl">
              <h2 className="font-bold">What is Mystery Skulls?</h2>
              <p className="w-full max-w-[26rem]">Mystery Skulls as a project is not portrayed as just an upcoming NFT Collection. There are a lot of deep meanings hidden under the name Mystery Skulls. Mystery Skulls has been in the thoughts for the past year and a half and finally is brought to life better than ever was and will be.</p>
            </div>
          </article>
          <article className="flex-1 flex justify-end text-white">
            <section className="space-y-6">
              <div className="space-y-2 text-xl ">
                <h2 className="font-bold">Is the team doxxed?</h2>
                <p className="w-full max-w-[26rem]">Yes, all the team members are going to introduce them selfs on each AMA</p>
              </div>

              <div className="space-y-2 text-xl">
                <h2 className="font-bold">How to contact the team?</h2>
                <p className="w-full max-w-[26rem]">You can contact the team on discord, moderator and founders are always to happy to chat with their community.</p>
              </div>

              <div className="space-y-2 text-xl">
                <h2 className="font-bold">What Blockchain is it on?</h2>
                <p className="w-full">TBD</p>
              </div>
            </section>
          </article>
        </div>
      </div>
    </section>
  )
}

export default FAQSection