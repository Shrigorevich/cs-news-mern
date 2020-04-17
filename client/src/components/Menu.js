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
                  <li className="menu-list-elem"><Link to="/">ГЛАВНАЯ</Link></li>
                  <li className="menu-list-elem"><Link to="/news">НОВОСТИ</Link></li>
                  <li className="menu-list-elem"><Link to="/analitics">БЛОГИ</Link></li>
                  <li className="menu-list-elem"><Link to="/calendar/tournaments-active">КАЛЕНДАРЬ</Link></li>
               </ul>
            
               <ul className="games-list">
                  <li className="games-list-elem">
                     <div className="d-flex align-items-center">
                        <img className="icon" src={require('../images/cs-icon.png')} alt="icon"/>
                        <Link to="/game-overview/CS-GO">  
                           <span>CS GO</span>
                        </Link>
                     </div>                  
                  </li>
                  <li className="games-list-elem"> 
                     <div className="d-flex align-items-center">
                        <img className="icon" src={require('../images/dota-icon.png')} alt="icon"/>
                        <Link to="/game-overview/Dota-2">
                           <span>Dota 2</span>
                        </Link>
                     </div>  
                  </li>
                  <li className="games-list-elem">
                     <div className="d-flex align-items-center">
                        <img className="icon" src={require('../images/league-icon.png')} alt="icon"/>
                        <Link to="/game-overview/League-of-Legends">
                           <span>League of Legends</span>     
                        </Link>
                     </div>                           
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
