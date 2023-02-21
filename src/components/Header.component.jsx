import { Outlet, useLocation } from 'react-router-dom'
import NavItem from './NavItem.component'

const Header = () => {
  const { pathname } = useLocation()
  return (
    <>
      <header className="w-full flex justify-between items-center gap-14 pl-12 pt-10">
        <img src="/shared/logo.svg" alt="Logo" />
        <div className="hidden bg-fgColor/50 w-full h-px z-10 md:block"></div>
        <nav
          className="-ml-20 flex gap-12 text-lg font-barlow-condensed bg-[#D2D2D210] pl-32 pr-48 backdrop-blur-2xl"
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
      </header>
      <Outlet />
    </>
  )
}

export default Header
