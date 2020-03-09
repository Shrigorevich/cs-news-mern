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
            setPreviews({previews: data.previews})
            console.log(data.previews);
            
         } catch(e) {}
      }
      getData()
   }, [request])

   return(
      <div>
         <Header/>
         <Menu/>
         <div className="home row">
            <HomeFeed/>
            <div className="col-3 aside">
               <div className="aside-body">
                  {previews.previews ? previews.previews.map((item, i) => (<GamePreview key={item._id} title={item.title} description={item.description} piclink={item.piclink}/>)) : null}
               </div>
            </div>
         </div>
      </div>
   )
}
