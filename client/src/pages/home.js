import React from 'react'
import Header from '../components/Header'
import HomeFeed from '../components/HomeFeed'
import Menu from '../components/Menu'
import Aside from '../components/Aside'

export const Home = () => {
   return(
      <div>
         <Header/>
         <Menu/>
         <div className="home row">
            <HomeFeed/>
            <div className="col-3 aside">
               <div className="aside-body">
                  <div className="block"></div>
               </div>
            </div>
         </div>
      </div>
   )
}
