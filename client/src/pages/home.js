import React from 'react'
import Header from '../components/Header'
import HomeFeed from '../components/HomeFeed'
import Menu from '../components/Menu'
import GamePreview from '../components/GamePreview'
import { useEffect, useState } from 'react'
import {useHttp} from '../hooks/httphook' 

export const Home = () => {

   const {request} = useHttp()

   const [previews, setPreviews] = useState({
      previews: null
   })

   useEffect(() => {
      async function getData(){
         try {
            const data = await request('/api/previews', 'GET')
            setPreviews({previews: data.data}) 
         } catch(e) {}
      }
      getData()
   }, [request])

   return(
      <div>
         <Header/>
         <Menu/>
         <div className="home">
            <HomeFeed/>
            <div className="aside">
               <div className="aside-body">
                  {previews.previews ? previews.previews.map((item, i) => (<GamePreview key={item._id} {...item}/>)) : null}
               </div>
            </div>
         </div>
      </div>
   )
}
