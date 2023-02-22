import { useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import NavItem from './NavItem.component'

const Header = () => {
  const { pathname } = useLocation()
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <header className="w-full flex justify-between items-center gap-14 pl-8 pt-8 md:pt-0 md:pl-12 lg:pt-10">
        <img src="/shared/logo.svg" alt="Logo" />
        <div className="hidden bg-fgColor/50 w-full h-px z-10 lg:block"></div>
        <nav
          className={`
            ${isOpen ? "flex" : "hidden"} gap-12 text-lg font-barlow-condensed 
            bg-[#D2D2D210] backdrop-blur-2xl h-screen absolute top-0 right-0 z-40
            flex-col pt-36 sm:px-12 md:pt-0 md:h-auto md:relative md:flex-row md:flex lg:-ml-20 lg:pl-32 lg:pr-48`}
        >
          <NavItem
            active={pathname === '/' ? "active" : ""}
            route="/"
            itemNumber="00"
            itemName="HOME"
          />
          <NavItem
            active={pathname === '/destination' ? "active" : ""}
            route="/destination"
            itemNumber="01"
            itemName="DESTINATION"
          />
          <NavItem
            active={pathname === '/crew' ? "active" : ""}
            route="/crew"
            itemNumber="02"
            itemName="CREW"
          />
          <NavItem
            active={pathname === '/technology' ? "active" : ""}
            route="/technology"
            itemNumber="03"
            itemName="TECHNOLOGY"
          />
        </nav>
        <img
          src="/shared/icon-hamburger.svg"
          alt="menu open icon"
          className={`${isOpen ? "hidden" : "block"} md:hidden pr-8`}
          onClick={() => setIsOpen(true)}
        />
        <img
          src="/shared/icon-close.svg"
          alt="menu open icon"
          className={`${isOpen ? "block" : "hidden"} md:hidden pr-8 z-50`}
          onClick={() => setIsOpen(false)}
        />
      </header>
      <Outlet />
    </>
  )
}

export default Header
