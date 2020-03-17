import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
   return (
      <div className="header">
         <Link to="/home"><h3>Cybersport News</h3></Link>
      </div>
   )
}

export default Header
