import React from 'react'
import './Sidebar.css'
import home from '../../assets/home.png'
import game_icon from '../../assets/game_icon.png'
import automobiles from '../../assets/automobiles.png'
import sports from '../../assets/sports.png'
import entertainment from '../../assets/entertainment.png'
import tech from '../../assets/tech.png'
import music from '../../assets/music.png'
import blogs from '../../assets/blogs.png'
import news from '../../assets/news.png'
import jack from '../../assets/jack.png'
import simon from '../../assets/simon.png'
import tom from '../../assets/tom.png'
import meghan from '../../assets/megan.png'
import cameron from '../../assets/cameron.png'

function Sidebar({showSidebar}) {
  return (
    <aside className={`sidebar ${showSidebar?"":"small-sidebar"}`}>
      <div className="shortcut-links">
        <div className="side-link">
          <img src={home} alt="home icon"/>
          <p>Home</p>
        </div>
        <div className="side-link">
          <img src={game_icon} alt="gaming icon"/>
          <p>Gaming</p>
        </div>
        <div className="side-link">
          <img src={automobiles} alt="car icon"/>
          <p>Automobiles</p>
        </div>
        <div className="side-link">
          <img src={sports} alt="sports icon"/>
          <p>Sports</p>
        </div>
        <div className="side-link">
          <img src={entertainment} alt="entertainment icon"/>
          <p>Entertainment</p>
        </div>
        <div className="side-link">
          <img src={tech} alt="tech icon"/>
          <p>tech</p>
        </div>
        <div className="side-link">
          <img src={music} alt="music icon"/>
          <p>Music</p>
        </div>
        <div className="side-link">
          <img src={blogs} alt="blog icon"/>
          <p>Blogs</p>
        </div>
        <div className="side-link">
          <img src={news} alt="news icon"/>
          <p>News</p>
        </div>
        <hr />
      </div>

      <div className="subscribed-list">
        <h3>Subscribed</h3>
        <div className="side-link">
          <img src={jack} alt="random profile image" />
          <p>PewDiePie</p>
        </div>
        <div className="side-link">
          <img src={simon} alt="random profile image" />
          <p>Simon</p>
        </div>
        <div className="side-link">
          <img src={tom} alt="random profile image" />
          <p>Tom</p>
        </div>
        <div className="side-link">
          <img src={meghan} alt="random profile image" />
          <p>Meghan</p>
        </div>
        <div className="side-link">
          <img src={cameron} alt="random profile image" />
          <p>Cameron</p>
        </div>

        {/* if there are more components then add scroll to
           side bar which it currently doesnot do*/}


         {/* <div className="side-link">
          <img src={cameron} alt="random profile image" />
          <p>Cameron</p>
        </div>
        <div className="side-link">
          <img src={cameron} alt="random profile image" />
          <p>Cameron</p>
        </div>
        <div className="side-link">
          <img src={cameron} alt="random profile image" />
          <p>Cameron</p>
        </div>
        <div className="side-link">
          <img src={cameron} alt="random profile image" />
          <p>Cameron</p>
        </div>
        <div className="side-link">
          <img src={cameron} alt="random profile image" />
          <p>Cameron</p>
        </div>
        <div className="side-link">
          <img src={cameron} alt="random profile image" />
          <p>Cameron</p>
        </div>
        <div className="side-link">
          <img src={cameron} alt="random profile image" />
          <p>Cameron</p>
        </div>
        <div className="side-link">
          <img src={cameron} alt="random profile image" />
          <p>Cameron</p>
        </div>
        <div className="side-link">
          <img src={cameron} alt="random profile image" />
          <p>Cameron</p>
        </div>
        <div className="side-link">
          <img src={cameron} alt="random profile image" />
          <p>Cameron</p>
        </div>
        <div className="side-link">
          <img src={cameron} alt="random profile image" />
          <p>Cameron</p>
        </div>   */}

      </div>
    </aside>
  )
}

export default Sidebar