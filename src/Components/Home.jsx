import React from 'react'
import Hero from './Hero'
import TopPicks from './TopPicks'
import Delivery from './Delivery'

const Home = ({handleAdd}) => {
  return (
    <div>
        <Hero />
        <Delivery /> 
        <TopPicks handleAdd={handleAdd}/>
    </div>
  )
}

export default Home