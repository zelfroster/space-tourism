import { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header.component";
import { Home, Destination, Crew, Technology } from "./routes";

function App() {
  const { pathname } = useLocation()
  const [bgImageDesktop, setBgImageDesktop] = useState()
  const [bgImageTablet, setBgImageTablet] = useState()
  const [bgImageMobile, setBgImageMobile] = useState()

  //change background according to pathname
  useEffect(() => {
    switch (pathname) {
      case "/":
        setBgImageDesktop('lg:bg-homeDesktop')
        setBgImageTablet('sm:bg-homeTablet')
        setBgImageMobile('bg-homeMobile')
        break;
      case "/destination":
        setBgImageDesktop('lg:bg-destDesktop')
        setBgImageTablet('sm:bg-destTablet')
        setBgImageMobile('bg-destMobile')
        break;
      case "/crew":
        setBgImageDesktop('lg:bg-crewDesktop')
        setBgImageTablet('sm:bg-crewTablet')
        setBgImageMobile('bg-crewMobile')
        break;
      case "/technology":
        setBgImageDesktop('lg:bg-techDesktop')
        setBgImageTablet('sm:bg-techTablet')
        setBgImageMobile('bg-techMobile')
        break;
    }
  }, [pathname])

  return (
    <div className={`w-full min-h-screen text-fgColor font-barlow bg-bgColor bg-cover ${bgImageMobile} ${bgImageTablet} ${bgImageDesktop}`}>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="/destination" element={<Destination />} />
          <Route path="/crew" element={<Crew />} />
          <Route path="/technology" element={<Technology />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;





