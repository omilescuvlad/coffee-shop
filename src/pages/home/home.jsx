import React, { useState } from 'react'
import './home.css'
import Header from '../../components/header/header'
import { Navbar } from '../../components/navbar/navbar'
import ExploreMenu from '../../components/exploremenu/exploremenu'
import FoodDisplay from '../../components/fooddisplay/fooddisplay'

export const Home = () => {

const [category,setCategory] = useState("All")

  return (
    <div>
        <Header/>
        <ExploreMenu category={category} setCategory={setCategory}/>
        <FoodDisplay category = {category}/>
    </div>
  )
}

export default Home