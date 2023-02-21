import React from 'react'
import { Link } from 'react-router-dom'

const NavItem = ({ active, route, itemNumber, itemName }) => {
  return (
    <Link to={route} className='relative'>
      <div
        className={`${active ? "after:w-full after:bg-fgColor" : "after:w-0 \
          after:bg-fgColor/40"} py-8 after:absolute hover:after:w-full after:h-1\
          after:bottom-0 after:right-0 hover:after:left-0 hover:after:right-auto\
          after:duration-300`}
      >
        <span className='tracking-widest font-bold mr-2'>{itemNumber}</span>
        <span className='tracking-widest'>{itemName}</span>
      </div>
    </Link>
  )
}

export default NavItem
