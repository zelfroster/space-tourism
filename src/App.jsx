import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header.component";
import { Home, Destination, Crew, Technology } from "./routes";
import { useState, useEffect } from "react";

function App() {
  const { pathname } = useLocation()
  const [bgImage, setBgImage] = useState()

  //change background according to pathname
  useEffect(() => {
    switch (pathname) {
      case "/":
        setBgImage('bg-mainBackground')
        break;
      case "/destination":
        setBgImage('bg-destBackground')
        break;
      case "/crew":
        setBgImage('bg-crewBackground')
        break;
      case "/technology":
        setBgImage('bg-techBackground')
        break;
    }
  }, [pathname])

  return (
    <div className={`w-full min-h-screen text-fgColor font-barlow bg-bgColor ${bgImage} bg-cover`}>
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
