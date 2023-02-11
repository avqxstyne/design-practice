import React from 'react'

const Home = () => {
  return (
    <div className='home-bg'>

      <div className="sidebar">

        <div className="sidebar-profile">
          <div className="pfp"></div>
          <div className="name">Grayson W</div>
        </div>

        <div className="sidebar-links">
          <div className="sidebar-link">
            <span className="material-symbols-outlined">
              home
            </span>
            <p>Home</p>
          </div>
          <div className="sidebar-link">
            <span className="material-symbols-outlined">
              check_circle
            </span>
            <p>Schedule</p>
          </div>
          <div className="sidebar-link">
            <span className="material-symbols-outlined">
              settings
            </span>
            <p>Settings</p>
          </div>
          <div className="sidebar-link">
            <span className="material-symbols-outlined">
              logout
            </span>            
            <p>Log out</p>
          </div>
        </div>
      </div>

      <div className='home-app'>
        <div className="finance">
          moeny
        </div>
      </div>
    </div>
  )
}

export default Home