import React from 'react'
import { ReactComponent as FAQTitle } from '../assets/faq-title.svg'

const FAQSection = () => {
  return (
    <section className="pb-20">
      <div className="w-full relative max-w-5xl mx-auto p-4">
        <FAQTitle />
        <div className='flex py-16'>
          <article className="flex-1 text-white space-y-6 border-r border-white">
            <div className="space-y-2 text-xl">
              <h2 className="font-bold">Mint Date?</h2>
              <p className="w-[26rem]">Approximately 1 month <br />Supply: TBD</p>
            </div>

            <div className="space-y-2 text-xl">
              <h2 className="font-bold">What is Mystery Skulls?</h2>
              <p className="w-[26rem]">Mystery Skulls as a project is not portrayed as just an upcoming NFT Collection. There are a lot of deep meanings hidden under the name Mystery Skulls. Mystery Skulls has been in the thoughts for the past year and a half and finally is brought to life better than ever was and will be.</p>
            </div>
          </article>
          <article className="flex-1 flex flex-col items-end text-white space-y-6">
            <div className="space-y-2 text-xl ">
              <h2 className="font-bold">Is the team doxxed?</h2>
              <p className="w-[26rem]">Yes, all the team members are going to introduce them selfs on each AMA
                What Blockchain is it on: TBD.</p>
            </div>

            <div className="space-y-2 text-xl">
              <h2 className="font-bold">How to contact the team?</h2>
              <p className="w-[26rem]">You can contact the team on discord, moderator and founders are always to happy to chat with their community.</p>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}

export default FAQSection