import React, { useState, useRef } from 'react'
import Video from '../assets/graveshq2.mp4'
import ReactPlayer from 'react-player'
import music from '../assets/music.mp3'

const HeroSection = () => {
  const [muted, setMuted] = useState(false)
  const [showMute, setShowMute] = useState(false)
  const audioRef = useRef(null)
  const handlePlay = (e) => {
    setMuted(!muted)
    e.target.classList.contains("play") ? audioRef.current.play() : audioRef.current.pause()
  }
  return (
    <section onMouseEnter={() => setShowMute(true)} onMouseLeave={() => setShowMute(false)} className="min-h-[1056px] flex justify-center items-center text-white" id="hero">
      <div className="absolute z-0">
        <ReactPlayer
          className="video"
          url={Video}
          playing={true}
          muted={true}
          loop={false}
          width="100%"
          height="100%"
        />
      </div>
      <div className="z-10">
        <h1 className='font-avander animate-fade text-[180px] leading-[180px] text-center'>MYSTERY <br />
          SKULLS</h1>
      </div>
      <div className="absolute z-10 bottom-0 right-10">
        <div className={`absolute z-20 cursor-pointer right-8 bottom-6 transition-opacity ease-in-out duration-300 text-white ${showMute ? "opacity-100" : "opacity-0"}`}>
          {muted ?
            (<div onClick={handlePlay} className="play rounded-md bg-white p-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="#000000">
                <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM12.293 7.293a1 1 0 011.414 0L15 8.586l1.293-1.293a1 1 0 111.414 1.414L16.414 10l1.293 1.293a1 1 0 01-1.414 1.414L15 11.414l-1.293 1.293a1 1 0 01-1.414-1.414L13.586 10l-1.293-1.293a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </div>) :
            (
              <div onClick={handlePlay} className="pause rounded-md bg-white p-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="#000000">
                  <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z" clipRule="evenodd" />
                </svg>
              </div>
            )}
        </div>
        <audio ref={audioRef} id="music" loop autoPlay muted={muted}>
          <source src={music} type="audio/mp3" />
        </audio>
      </div>
    </section>
  )
}

export default HeroSection