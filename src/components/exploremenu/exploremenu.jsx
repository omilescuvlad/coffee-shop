import React from 'react'
import { menu_list } from '../../assets/assets'
import './exploremenu.css'

const ExploreMenu = () => {
  return (
    <div className='explore-menu'  id='explore-menu'>
        <h1>Explore our menu</h1>
        <div className="explore-menu-list">
            {menu_list.map((item,index)=>{
                return(
                    <div key={index} className="explore-menu-list-item">
                            <img src={item.menu_image} alt="" />
                            <p>{item.menu_name}</p>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default ExploreMenu