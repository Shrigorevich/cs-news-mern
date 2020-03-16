import React, {useEffect, useState} from 'react'
import Header from '../components/Header'
import Menu from '../components/Menu'
import BOverview from '../components/BlogOverview'
import {useHttp} from '../hooks/httphook'

export const BlogOverview = (props) => {

   const {request} = useHttp()
   
   const [state, setState] = useState({
      blogData: null 
   })
   
   useEffect(() => {
      async function getData(){
         try {
            const data = await request(`/api/blog/${props.match.params.id}`, 'GET')            
            setState({blogData: data.data})
         } catch(e) {}
      }
      getData()
   }, [request, props.match.params.id])

   return(
      <div>
         <Header/>
         <Menu/>
         {state.blogData ? <BOverview {...state.blogData} /> : null}
      </div>
   )
}
