import React from 'react'
import Header from '../components/Header'
import Menu from '../components/Menu'
import GOverview from '../components/GameOverview'
import { useEffect, useState } from 'react'
import {useHttp} from '../hooks/httphook' 

export const GameOverview = (props) => {

   const [state, setState] = useState({
      gameData: null
   })

   const {request} = useHttp()

   useEffect(() => {
      async function getData(){
         try {
            const data = await request(`/api/game/${props.match.params.id}`, 'GET')
            setState({
               gameData: data.gameData
            })
         } catch(e) {}
      }
      getData()
   }, [request, props.match.params.id])

   return(
      <div>
         <Header/>
         <Menu/>
         {state.gameData ? <GOverview {...state.gameData} /> : null}
      </div>
   )
}
