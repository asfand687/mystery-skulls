import React from 'react'
import { ReactComponent as Roadmap01 } from '../assets/roadmap-01.svg'
import TreeLeft from '../assets/treesgifleft.gif'
import TreeRight from '../assets/treegifright.gif'
import GraveBullet from '../components/GraveBullet'

const RoadmapSection = () => {
  return (
    <section className="relative pt-10" id="roadmap">
      <div className="absolute z-10 -left-32 top-36">
        <img src={TreeLeft} alt="Tree" />
      </div>
      <div className="absolute z-10 -right-32 top-36">
        <img src={TreeRight} alt="Tree" />
      </div>
      <div className="w-full max-w-2xl mx-auto pt-6">
        <Roadmap01 />
      </div>
      <div className="w-full flex lg:space-x-12 max-w-5xl mx-auto px-4 pt-28">
        <div className="flex-1 bg-roadmap h-[810px]">
          <div className='px-14 relative top-32 space-y-8'>
            <article className="flex">
              <div>
                <GraveBullet number={1} />
              </div>
              <p className="px-4 text-lg">
                15% earnings to be donated to Ukraine to assist displaced families during the conflict.
              </p>
            </article><article className="flex">
              <div>
                <GraveBullet number={2} />
              </div>
              <p className="px-4 text-lg">
                35% of royalties will be spread out to holders’ wallets.
              </p>
            </article><article className="flex">
              <div>
                <GraveBullet number={3} />
              </div>
              <p className="px-4 text-lg">
                Each month the founders of the projects will be airdropping Mystery Skulls NFT’S to 50 lucky holders. These airdrops will be completely random.
              </p>
            </article><article className="flex">
              <div>
                <GraveBullet number={4} />
              </div>
              <p className="px-4 text-lg">
                Every week there will be POKER tournaments between holders. As for the winners, they will get an opportunity of getting: FREE MERCH, NFT and ETH/SOL prizes.
              </p>
            </article>
          </div>
        </div>

        <div className="flex-1 bg-roadmap-lg  h-[1200px] mt-28">
          <div className='px-16 relative top-32 space-y-8'>
            <article className="flex">
              <div>
                <GraveBullet number={5} />
              </div>
              <p className="px-4 text-lg">
                Merch Store Launch. A merch of our NFT collection will be available for our holders ONLY, to buy. If you become a holder and get one of our NFTS
                you’ll be granted access to our merch store where only you can buy merch of your own exclusive NFT or even NFTS inside our collection.
              </p>
            </article><article className="flex">
              <div>
                <GraveBullet number={6} />
              </div>
              <p className="px-4 text-lg">
                60 days post-mint, we will begin to host parties in LA, MIA, NYC, and LDN. In which our FOUNDERS and the whole team will participate, only holders will be allowed to attend these events in these cities and also we will have
                people going around asking how do the holders and members feel about the project in general and what can we improve in the future.
              </p>
            </article>
            <article className="flex">
              <div>
                <GraveBullet number={7} />
              </div>
              <p className="px-4 text-lg">
                For the future collection of MYSTERY SKULLS, each holder will be able to draw his design NFT for a project that will come after mystery skulls. There will be a community vote that will help us choose one good design, and from there make a full multi-thousand collection out of it. The winner will be rewarded with a BIG mystery prize
              </p>
            </article>
          </div>
        </div>


      </div>
    </section>
  )
}

export default RoadmapSection
