import React from 'react'
import Sidebar from '../../Components/Sidebar/Sidebar'
import './Home.css'
import Feed from '../../Components/Feed/Feed'

function Home({showSidebar}) {
  return (
    <>
      {/* prop drilling */}
      <Sidebar showSidebar={showSidebar}/>
      <div className={`container ${showSidebar ? "" : "large-container" }`}>
        <Feed />
      </div>
    </>
  )
}

export default Home