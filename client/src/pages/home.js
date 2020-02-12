import React from 'react'
import Header from '../elements/Header'
import NewsFeed from '../elements/NewsFeed'

//{state.state ? state.content.map((el) => {<Post title={el.title} content={el.content} piclink={el.piclink}/>}) : null}
export const Home = () => {

   return(
      <div>
         <Header/>
         <NewsFeed/>
      </div>
   )
}
