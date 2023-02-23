import React from 'react'
import { Link } from 'react-router-dom'

const NavItem = ({ active, route, itemNumber, itemName }) => {
  return (
    <Link to={route} className='relative'>
      <div
        className={
          `${active
            ? "after:w-2 after:bg-fgColor md:after:w-full"
            : "after:bg-fgColor/40 md:after:w-0"
          } 
          pr-16 pl-10 after:absolute after:h-full after:top-0 md:after:top-auto after:left-auto 
          md:after:bottom-0 md:after:h-1 md:py-10 after:right-0 after:duration-300 
          hove:md:after:left-0 hover:md:after:right-auto hover:md:after:w-full sm:px-0 lg:py-8`
        }
      >
        <div className="flex text-xl md:text-sm lg:text-lg">
          <span className='tracking-widest font-bold mr-2 md:hidden lg:block'>
            {itemNumber}
          </span>
          <span className='tracking-[0.2em] lg:tracking-widest'>
            {itemName}
          </span>
        </div>
      </div>
    </Link>
  )
}

export default NavItem
