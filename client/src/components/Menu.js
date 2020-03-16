import React from 'react'
import {Link} from 'react-router-dom'

export const Post = (props) => {

   return (
      <div id="menu" className="menu-fixed">
         <div className="menu-head">
            <h4 className="logo-title">CSN</h4>
            <div className="menu-logo">
               <img className="img-fluid" src={require('../images/own_logo.png')} alt="icon"/>
            </div>
         </div>
         <div className="menu-body">
            <div className="navigation">
               <ul className="menu-list">
                  <li className="menu-list-elem"><Link to="/">HOME</Link></li>
                  <li className="menu-list-elem"><Link to="/news">NEWS</Link></li>
                  <li className="menu-list-elem"><Link to="/analitics">ANALITICS</Link></li>
                  <li className="menu-list-elem"><Link to="/calendar/tournaments-active">CALENDAR</Link></li>
               </ul>
            
               <ul className="games-list">
                  <li className="games-list-elem">
                     <img className="icon" src={require('../images/cs-icon.png')} alt="icon"/>
                     <span>CS GO</span>                    
                  </li>
                  <li className="games-list-elem">  
                     <img className="icon" src={require('../images/dota-icon.png')} alt="icon"/>
                     <span>Dota 2</span>
                  </li>
                  <li className="games-list-elem">
                     <img className="icon" src={require('../images/league-icon.png')} alt="icon"/>
                     <span>League of Legends</span>                     
                  </li>
               </ul>
            </div>
            <div className="menu-collapse">
               <span><i className="fab fa-instagram social-link"></i></span>
               <span><i className="fab fa-telegram social-link"></i></span>
               <span><i className="fab fa-twitter social-link"></i></span>
            </div>
         </div>
      </div>
   )
}

export default Post
