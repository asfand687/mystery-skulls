import React from 'react'
import { ReactComponent as FAQTitle } from '../assets/faq-title.svg'
import { ReactComponent as Tombstone } from '../assets/tombstone.svg'
import Tree from '../assets/treegifright.gif'

const FAQSection = () => {
  return (
    <section id="faq" className="pt-32 relative">
      <div className="w-full relative max-w-5xl mx-auto p-4 text-white">
        <FAQTitle className="w-full" />
        <section className="space-y-8 py-16">
          <article className="flex flex-col md:flex-row items-center text-center md:space-x-12 border-b border-white">
            <p>What is mint date?</p>
            <div>
              <p>Approximately 1 month</p>
              <p>Supply: TBD</p>
            </div>
          </article>

          <article className="flex flex-col md:flex-row items-center text-center md:space-x-28 border-b border-white">
            <p>What is Mystery Skulls?</p>
            <div className="md:pl-2">
              <p>Mystery Skulls as a project is not portrayed as just an upcoming NFT Collection. There are a lot of deep meanings hidden under the name Mystery Skulls. Mystery Skulls has been in the thoughts for the past year and a half and finally is brought to life better than ever was and will be.
              </p>
            </div>
          </article>

          <article className="flex flex-col md:flex-row items-center text-center  md:space-x-8 border-b border-white">
            <p>Is the team doxxed?</p>
            <div>
              <p>
                Yes, all the team members are going to introduce them selfs on each AMA.
              </p>
            </div>
          </article>

          <article className="flex flex-col md:flex-row items-center text-center border-b border-white">
            <p>How to contact the team?</p>
            <div>
              <p>
                You can contact the team on discord, moderator and founders are always to happy to chat with their community.
              </p>
            </div>
          </article>
          <article className="flex flex-col md:flex-row items-center text-center md:space-x-14">
            <p>What Blockchain <br /> is it on?</p>
            <p>
              TBD
            </p>
          </article>
        </section>
      </div>
      <img className="hidden md:block absolute -right-20 -bottom-80" src={Tree} alt="Tree Gif" />
      <Tombstone className="hidden md:block absolute -left-0 -bottom-0" />
    </section>
  )
}

export default FAQSection