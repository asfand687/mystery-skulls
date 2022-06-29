import React from 'react'
import { ReactComponent as Graveyard } from '../assets/graveyard.svg'
import Logo from '../assets/logo-big.png'
import LogoSmall from '../assets/logo.png'

const IntroductionSection = () => {
  return (
    <section className="section-inset py-20">
      <div className="w-full relative max-w-5xl mx-auto bg-graveyard p-4">
        <Graveyard className="mx-auto relative z-0" />
        <div className="absolute flex top-0 left-0 z-10 py-28 px-20">
          <div><img src={Logo} alt="mystery skulls" /></div>
          <div className="flex-1 pl-6">
            <section className="flex lg:space-x-4">
              <article className="rounded-[30px]">
                <div className="bg-[#D9D9D9] h-56 w-48 rounded-t-[30px] flex justify-center items-center">
                  <img src={LogoSmall} alt="Mystery Skulls" />
                </div>
                <div>
                  <p className="font-avander bg-white drop-shadow-md h-16 text-xl rounded-b-[30px] flex justify-center items-center">Level One
                  </p>
                </div>
              </article><article className="rounded-[30px]">
                <div className="bg-[#D9D9D9] h-56 w-48 rounded-t-[30px] flex justify-center items-center">
                  <img src={LogoSmall} alt="Mystery Skulls" />
                </div>
                <div>
                  <p className="font-avander bg-white drop-shadow-md h-16 text-xl rounded-b-[30px] flex justify-center items-center">
                    Level Two
                  </p>
                </div>
              </article><article className="rounded-[30px]">
                <div className="bg-[#D9D9D9] h-56 w-48 rounded-t-[30px] flex justify-center items-center">
                  <img src={LogoSmall} alt="Mystery Skulls" />
                </div>
                <div>
                  <p className="font-avander bg-white drop-shadow-md h-16 rounded-b-[30px] flex justify-center items-center">
                    Level Three
                  </p>
                </div>
              </article>
            </section>
            <section>
              <h2 className="text-4xl font-avander text-center pt-4">What Is Mystery Skulls?</h2>
              <p className="text-[15px] text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum in dictumst duis sed in. Tristique faucibus lorem a cras. Euismod vel, imperdiet amet, sollicitudin pellentesque mauris nam ut. Sed mi ornare imperdiet ipsum. Odio dolor id viverra aliquam sit. Accumsan, scelerisque blandit quam elit, turpis mattis sodales. Scelerisque odio convallis mauris justo, id arcu. Mauris at pulvinar felis ipsum sed cras scelerisque. Turpis turpis diam, ipsum risus nulla nec varius. Id lobortis risus, urna lectus porta nunc. </p>
            </section>
          </div>
        </div>
      </div>
    </section>
  )
}

export default IntroductionSection