import React, { useState } from "react"
import { Route, Routes } from "react-router"
import Navbar from "./Components/Navbar/Navbar"
import Home from "./Pages/Home/Home"
import Video from "./Pages/Video/Video"


function App() {
  const [showSidebar, setShowSidebar] = useState(false)
  return (
    <>
      <Navbar setShowSidebar={() => setShowSidebar(prevState => !prevState)}/>
      <Routes>
        <Route path="/" element={<Home showSidebar={showSidebar}/>} />
        <Route path="/video/:categoryId/:videoId" element={<Video />} />
      </Routes>
    </>
  )
}

export default App
