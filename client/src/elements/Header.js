import React from 'react'

export const Header = () => {
   return (
     <div>
        <div className="header">
           <nav className="nav">
              <div className="nav-item"><a href="/">Home</a></div>
              <div className="nav-item"><a href="/">Analytics</a></div>
              <div className="nav-item"><a href="/calendar">Calendar</a></div>
              <div className="nav-item"><a href="/">Disciplines</a></div>
           </nav>
        </div>
     </div>
   )
}

export default Header
