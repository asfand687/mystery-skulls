import React from 'react'
import { ReactComponent as Roadmap01 } from '../assets/roadmap-01.svg'
import { ReactComponent as BlackGrave } from '../assets/grave-black.svg'
import { ReactComponent as TreeLeft } from '../assets/tree-bg-left.svg'
import { ReactComponent as TreeRight } from '../assets/tree-right.svg'

const RoadmapSection = () => {
  return (
    <section className="relative py-20">
      <div className="absolute z-10 top-36">
        <TreeLeft />
      </div>
      <div className="absolute z-10 -right-14 top-[36rem]">
        <TreeRight />
      </div>
      <div className="w-full relative flex lg:space-x-12 max-w-5xl mx-auto p-4">
        <div className="flex-1 flex justify-end">
          <Roadmap01 />
        </div>
        <div className="flex-1 bg-roadmap h-[720px]">
          <div className='px-14 relative top-32 space-y-8'>
            <article className="flex">
              <div>
                <BlackGrave />
              </div>
              <p className="px-4 text-xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim purus odio orci, diam etiam erat purus odio lectus.
              </p>
            </article><article className="flex">
              <div>
                <BlackGrave />
              </div>
              <p className="px-4 text-xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim purus odio orci, diam etiam erat purus odio lectus.
              </p>
            </article><article className="flex">
              <div>
                <BlackGrave />
              </div>
              <p className="px-4 text-xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim purus odio orci, diam etiam erat purus odio lectus.
              </p>
            </article><article className="flex">
              <div>
                <BlackGrave />
              </div>
              <p className="px-4 text-xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim purus odio orci, diam etiam erat purus odio lectus.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default RoadmapSection