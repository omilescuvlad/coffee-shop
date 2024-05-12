import React from 'react'
import './home.css'
import Header from '../../components/header/header'
import { Navbar } from '../../components/navbar/navbar'
import ExploreMenu from '../../components/exploremenu/exploremenu'

export const Home = () => {
  return (
    <div>
        <Navbar/>
        <Header/>
        <ExploreMenu/>
    </div>
  )
}

export default Home;