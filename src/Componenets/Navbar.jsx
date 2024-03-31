import React from 'react'
import {
  HiHome,
  HiMagnifyingGlass,

  HiStar,
  HiPlayCircle,
  HiTv
} from "react-icons/hi2";
import { HiPlus, HiDotsVertical } from "react-icons/hi";
import Headeritem from './Headeritem';
function Navbar() {
  const menu = [
    {
      name: 'HOME',
      icon: HiHome
    },
    {
      name: 'SEARCH',
      icon: HiMagnifyingGlass
    },
    {
      name: 'WATCHLIST',
      icon: HiPlus
    },
    {
      name: 'ORIGINALS',
      icon: HiStar
    },
    {
      name: 'MOVIES',
      icon: HiPlayCircle
    },
    {
      name: 'SERIES',
      icon: HiTv
    }
  ]
  return (
    <div style={{ display: 'flex', alignItems: 'center', fontSize: '20px', gap: '25px', padding: '5px' }}>
      <img
        src="https://logos-world.net/wp-content/uploads/2021/02/Disney-Symbol.png"
        style={{
          width: '80px',
          height: '40px',
        }}
        alt="Film Projector"
      />

      {menu.map((item) => (
        <Headeritem name={item.name} Icon={item.icon} />
      ))}


    </div>



  )
}

export default Navbar
