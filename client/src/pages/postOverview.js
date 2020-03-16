import React, {useEffect, useState} from 'react'
import Header from '../components/Header'
import Menu from '../components/Menu'
import POverview from '../components/PostOverview'
import {useHttp} from '../hooks/httphook'

export const PostOverview = (props) => {

   const {request} = useHttp()
   
   const [state, setState] = useState({
      postData: null 
   })

   useEffect(() => {
      async function getData(){
         try {
            const data = await request(`/api/post/${props.match.params.id}`, 'GET')            
            setState({postData: data.data})
         } catch(e) {}
      }
      getData()
   }, [request, props.match.params.id])

   return(
      <div>
         <Header/>
         <Menu/>
         {state.postData ? <POverview {...state.postData} /> : null}
      </div>
   )
}
