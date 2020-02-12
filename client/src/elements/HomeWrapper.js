import React from 'react'
import NewsFeed from './NewsFeed'
import Aside from './Aside'
//{props.postsSlice.map((item, i) => (<Post key={i} title={item.title} preview={item.preview} piclink={item.piclink}/>))}
//
export const HomeWrapper = (props) => {

   return (
      <div class="homeWrapper">
         <NewsFeed/>
         <Aside/>
      </div>
   )
}

export default HomeWrapper
