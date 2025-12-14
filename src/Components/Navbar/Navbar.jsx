import React from 'react'
import './Navbar.css'
import menu_icon from '../../assets/menu.png'
import logo from '../../assets/logo.png'
import search_icon from '../../assets/search.png'
import upload_icon from '../../assets/upload.png'
import more_icon from '../../assets/more.png'
import notification_icon from '../../assets/notification.png'
import profile_icon from '../../assets/jack.png'

function Navbar() {
  return (
    <nav className='flex-div'>
        <div className='nav-left flex-div'>
            <img 
                className='menu-icon' 
                src={menu_icon} 
                alt='hamburger menu' 
            />
            <img 
                className='logo' 
                src={logo} 
                alt='site logo'
            />
        </div>
        {/* Search bar */}
        <div className="nav-middle flex-div">
            <div className="search-box flex-div">
                <input type="text" placeholder='search'/>
                <img src={search_icon} alt='search icon'/>
            </div>
        </div>

        <div className="nav-right flex-div">
            <img src={upload_icon} alt="upload icon" />
            <img src={more_icon} alt="add more icon" />
            <img src={notification_icon} alt="notification icon" />
            <img className="user-icon" src={profile_icon} alt="user icon" />
        </div>
    </nav>
  )
}

export default Navbar