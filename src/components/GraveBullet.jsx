import React from 'react'
import { ReactComponent as Grave } from '../assets/grave.svg'

const GraveBullet = ({ number }) => {
  return (
    <div>
      <Grave />
      <div className="relative left-4 text-3xl bottom-14 text-white">
        {number}
      </div>
    </div>
  )
}

export default GraveBullet