import React from 'react'
import Header from '../components/Header'
import Menu from '../components/Menu'
import NewsList from '../components/News'

export const News = () => {
   return(
      <div>
         <Header/>
         <Menu/>
         <NewsList/>
      </div>
   )
}
